import { GoogleGenerativeAI,  } from '@google/generative-ai';
import {GoogleGenerativeAIStream, StreamingTextResponse} from 'ai'
import { env } from '@/env.mjs';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { type location } from '@/lib/types';
import { getGeoLocation } from '@/lib/utils';
import { functions, runChatFunctions } from '@/app/chat-functions';

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

type ChatRequest = {
    messages: Array<{
        role: string;
        content: string;
    }>;
};

export async function POST(req: Request) {
    const ipAddress = req.headers.get("x-forwarded-for");

    if (process.env.NODE_ENV !== "development" && process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        const ratelimit = new Ratelimit({
            redis: kv,
            limiter: Ratelimit.slidingWindow(60, "1 d"),
        });

        const { success, limit, reset, remaining } = await ratelimit.limit(`askyp_ratelimit_${ipAddress}`);

        if (!success) {
            return new Response("You have reached your request limit for the day.", {
                status: 429,
                headers: {
                    "X-RateLimit-Limit": limit.toString(),
                    "X-RateLimit-Remaining": remaining.toString(),
                    "X-RateLimit-Reset": reset.toString(),
                },
            });
        }
    }

    const { messages } = await req.json() as ChatRequest;

    
    const latitude= 34.0549
    const longitude=118.2426

    const yelpData = await runChatFunctions('fetch_restaurants', { latitude, longitude });
    if (!yelpData) {
        throw new Error('Failed to fetch Yelp data.');
    }
    
    const prompt = messages.map(message => ({
        role: message.role === 'user' ? 'user' : 'model',
     //   parts: [{ text: message.content }],
        parts: [{ text: JSON.stringify(yelpData) }]
    }));

//     prompt.push({
//                 role: 'model',
//                 , // Pass Yelp data as part of the prompt
//             });
//   prompt.push({
//                 role: 'model',
//                 parts: [{ text: '' }], // Empty text to signify waiting for user response
//             });
    const response = await genAI.getGenerativeModel({ model: 'gemini-pro' }).generateContentStream({ contents: prompt });

    const stream = GoogleGenerativeAIStream(response);

    return new StreamingTextResponse(stream);
}
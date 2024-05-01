import { GoogleGenerativeAI,  } from '@google/generative-ai';
import {GoogleGenerativeAIStream, StreamingTextResponse} from 'ai'
import { env } from '@/env.mjs';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { type location } from '@/lib/types';
import { getGeoLocation } from '@/lib/utils';

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

    
    const prompt = messages.map(message => ({
        role: message.role === 'user' ? 'user' : 'model',
        parts: [{ text: message.content }],
    }));

    const response = await genAI.getGenerativeModel({ model: 'gemini-pro' }).generateContentStream({ contents: prompt });

    const stream = GoogleGenerativeAIStream(response);

    return new StreamingTextResponse(stream);
}



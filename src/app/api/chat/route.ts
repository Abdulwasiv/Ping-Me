import { GoogleGenerativeAI,  } from '@google/generative-ai';
import {GoogleGenerativeAIStream, StreamingTextResponse} from 'ai'
import { env } from '@/env.mjs';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { type location } from '@/lib/types';
import { getGeoLocation } from '@/lib/utils';
import { functions, runChatFunctions } from '@/app/chat-functions';
import  prompts  from '@/components/prompt';

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
  
 
    const extractFunctionName = (userPrompt: string): string | undefined => {
    const flattenedPrompts = prompts.flatMap(prompt => prompt.prompts);
    const index = flattenedPrompts.findIndex(prompt => prompt.toLowerCase() === userPrompt.toLowerCase());
    if (index !== -1) {
        return flattenedPrompts[index];
    }
    return undefined;
};


const functionMapping: Record<string, string> = {};

prompts.forEach(prompt => {
    prompt.prompts.forEach(userPrompt => {
        const functionName = extractFunctionName(userPrompt);
        if (functionName) {
            functionMapping[userPrompt] = prompt.name;
        }
    });
});
const user_pro = messages.find(message => message.role === 'user')?.content;

console.log('Extracted function name:', user_pro);

// Example usage:
//const userPrompt = "Locate businesses near me that specialize in eco-friendly products";

const functionName = extractFunctionName(user_pro);
const category = functionMapping[user_pro];
console.log('Extracted category name:', category);

let locationResult = await getGeoLocation(ipAddress);
const params: location = locationResult;


// const latitude= 34.0549
// const longitude=118.2426
    

     if (!functionName) {
        throw new Error('Function name not provided in user message.');
    }

    const yelpData = await runChatFunctions(category, params);
    if (!yelpData) {
        throw new Error('Failed to fetch Yelp data.');
    }
    
    
    const prompt = messages.map(message => ({
        role: message.role === 'user' ? 'user' : 'model',
        parts: [{ text: yelpData ? JSON.stringify(yelpData) : message.content }],
    }));
    

    const response = await genAI.getGenerativeModel({ model: 'gemini-pro' }).generateContentStream({ contents: prompt });

    const stream = GoogleGenerativeAIStream(response);

    return new StreamingTextResponse(stream);
}



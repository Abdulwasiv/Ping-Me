import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
 
  server: {
    OPENAI_API_KEY: z.string().min(1),
    YELP_CLIENT_ID: z.string().min(1),
    YELP_API_KEY: z.string().min(1),
    YELP_API_ENDPOINT: z.string().url(),
    IPINFO_TOKEN: z.string().min(1),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
 client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },
  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    YELP_CLIENT_ID: process.env.YELP_CLIENT_ID,
    YELP_API_KEY: process.env.YELP_API_KEY,
    YELP_API_ENDPOINT: process.env.YELP_API_ENDPOINT,
    NODE_ENV: process.env.NODE_ENV,
    IPINFO_TOKEN: process.env.IPINFO_TOKEN,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

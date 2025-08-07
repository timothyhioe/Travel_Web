import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1),
  PORT: z.coerce.number().int().positive().default(3000),
  //JWT_SECRET: z.string().min(32),
});

export const ENV = envSchema.parse(process.env);
export type EnvType = typeof ENV;

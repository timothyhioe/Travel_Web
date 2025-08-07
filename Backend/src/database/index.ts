import { drizzle } from 'drizzle-orm/node-postgres';

import { ENV } from '../config/env.config.js';
import { databaseSchema } from './schema/index.js';

export const db = drizzle({
  connection: ENV.DATABASE_URL,
  schema: databaseSchema,
  casing: 'snake_case',
});

export type Database = typeof db;

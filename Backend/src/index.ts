import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { ENV } from './config/env.config.js';

const app = express();

app.use((req: Request, _res: Response, next: NextFunction) => {
  console.info(`New request to ${req.path}`);
  next();
});

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

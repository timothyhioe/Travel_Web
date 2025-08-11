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

// Error handling middleware should be at the end
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  // Default error response
  res.status(500).json({
    errors: ['Internal Server Error'],
  });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

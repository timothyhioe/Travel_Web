import { App } from './app';
import { ENV } from './config/env.config';
import { type Database, db } from './database';
import { Server } from './server';

export const DI = {} as {
  app: App;
  db: Database;
  server: Server;
};

export function initializeDependencyInjection() {
  // Initialize database
  DI.db = db;

  // Initialize app
  DI.app = new App();
  DI.server = new Server(DI.app, ENV);
}

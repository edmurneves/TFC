import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;
console.log('starting...');

new App().start(PORT);

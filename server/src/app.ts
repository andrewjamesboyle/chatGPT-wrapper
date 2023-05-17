// src/app.ts
import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Add chatRoutes
app.use('/api', chatRoutes);

// Existing route
app.get('/', (req, res) => {
  res.send('Hello, ChatGPT Wrapper!');
});

// Catch-all route for 404 errors
app.use('*', (req, res) => {
  res.status(404).send('Not found');
});

export default app;

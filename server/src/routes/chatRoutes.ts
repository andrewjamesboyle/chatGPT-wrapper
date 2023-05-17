// src/routes/chatRoutes.ts
import express from 'express';
import { chatWithGPT, Message } from '../services/chatService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const messages: Message[] = req.body.messages;
    const chatResponse = await chatWithGPT(messages);
    res.json(chatResponse);
//   } catch (error: any) {
//     console.error('Error:', error.message);
//     console.error('Stack:', error.stack);
//     res.status(500).json({ error: error.message });
  } catch (error: any) {
    console.error('API Error:', error);
    throw new Error('An error occurred while communicating with the ChatGPT API.');
  }
});

export default router;


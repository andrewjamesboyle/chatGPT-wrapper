// src/controllers/chatController.ts
import { Request, Response } from 'express';
import { chatWithGPT } from '../services/chatService';

export const chat = async (req: Request, res: Response) => {
  try {
    const userInput = req.body.message;
    const gptResponse = await chatWithGPT(userInput);
    res.json({ message: gptResponse });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
};

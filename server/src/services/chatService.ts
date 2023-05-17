// src/services/chatService.ts

import apiClient from '../utils/apiClient'

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const chatWithGPT = async (messages: Message[]) => {
  // Call the OpenAI ChatGPT API with the input messages and return the response
  try {
    const response = await apiClient.post('/v1/engines/davinci-codex/completions', {
      prompt: {
        messages: messages,
      },
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    return response.data;
  } catch (error) {
    throw new Error('An error occurred while communicating with the ChatGPT API.');
  }
};

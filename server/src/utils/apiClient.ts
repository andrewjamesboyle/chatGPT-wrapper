// src/utils/apiClient.ts
import axios from 'axios';

// Replace with your actual OpenAI API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const apiClient = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
  },
});

export default apiClient;

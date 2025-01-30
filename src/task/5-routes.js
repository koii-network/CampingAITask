import { namespaceWrapper, app } from "@_koii/namespace-wrapper";
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
// // initialize openai
const openai = new OpenAI({
  apiKey: dotenv.config().parsed.OPENAI_API_KEY,
});

export async function routes() {
  // Serve static files
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(express.json());



  // route that serves an index.html file
  app.get("/question", async (_req, res) => {
    res.sendFile('index.html', { root: 'D:/_Koii_Projects/CampingAI/0-0-2/src/task/app' });
  });



  // Handle chat API endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;

      console.log("MESSAGE RECEIVED:", message);

      // use openai to answer the question
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful camping and outdoor activities expert. Provide detailed, accurate, and safety-conscious advice about camping, hiking, outdoor survival, and related activities. Keep responses focused on camping and outdoor activities."
          },
          {
            role: "user",
            content: message
          }
        ],
        stream: false,
      });

      const responseText = response.choices[0].message.content;
      res.json({ response: responseText });
    } catch (error) {
      console.error('Error processing chat:', error);
      res.status(500).json({ error: 'Failed to process chat message' });
    }
  });
}

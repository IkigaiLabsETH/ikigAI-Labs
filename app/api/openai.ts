// app/api/openai.ts

import axios from "axios";

const OPENAI_API_BASE_URL = "https://api.openai.com/v1";

export async function fetchOpenAIResponse(query: string): Promise<string> {
  try {
    const response = await axios.post(
      `${OPENAI_API_BASE_URL}/engines/davinci-codex/completions`,
      {
        prompt: query,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    throw new Error("Failed to fetch response from OpenAI API.");
  }
}

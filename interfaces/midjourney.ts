// pages/api/midjourney.ts
import { NextApiRequest, NextApiResponse } from 'next';

const obj = {
  title: "Midjourney Prompt Generator",
  desc: "I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be.",
  category: "Midjourney",
  permissions: ['user'],
  fromColor: "gray-500",
  toColor: "gray-500",
  to: "/ai/midjourney",
  api: "/api/midjourney", // Adjust the API route accordingly
  output: {
    title: "GM GM",
    desc: "Here is your first prompt: Cyberpunk, IMAX, ARRI, Hasselblad, Bokeh, Velvia, Cinematic Lighting, Kodachrome, Depth of Field, beautiful colors, insane details, intricate details, beautifully color graded, Unreal Engine, Studio Lighting, Soft Lighting, Daft Punk.",
    color: "blue",
  },
  prompts: [
    {
      title: "Prompt Design",
      desc: "A sentence or paragraph you wish to understand in bullet point form.",
      prompts: [
        {
          title: "Content",
          attr: "content",
          value: "",
          placeholder: "Write a super creative prompt for MidJourney",
          label: "",
          type: "textarea",
          maxLength: 600,
          min: 3,
          required: true,
          error: "",
          example: "Cyberpunk, IMAX, ARRI, Hasselblad, Bokeh, Velvia, Cinematic Lighting, Kodachrome, Depth of Field, beautiful colors, insane details, intricate details, beautifully color graded, Unreal Engine, Studio Lighting, Soft Lighting, Daft Punk. ",
        },
      ],
      example: {
        output: "Cyberpunk, IMAX, ARRI, Hasselblad, Bokeh, Velvia, Cinematic Lighting, Kodachrome, Depth of Field, beautiful colors, insane details, intricate details, beautifully color graded, Unreal Engine, Studio Lighting, Soft Lighting, Daft Punk ",
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
      },
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(obj);
  } else {
    res.status(405).end();
  }
}

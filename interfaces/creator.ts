// interfaces/creator.ts
import { NextApiRequest, NextApiResponse } from 'next';

const obj = {
  title: "Creator",
  desc: "I want you to act as an artist, a creator providing advice on various art styles such as tips on utilizing light & shadow effects effectively in digital art, generative art, photogrammetry and photography, shading techniques while using threejs, etc. Suggest artworks and other creators nicely depending upon its genre/style type along with appropriate reference images demonstrating your recommendations regarding the same. All of this is to help out aspiring artists explore new creative possibilities & practice ideas, which will further help them sharpen their skills accordingly!",
  category: "Personal",
  permissions: ['user'],
  fromColor: "green-500",
  toColor: "blue-500",
  to: "/interfaces/creator",
  api: "/interfaces/creator",
  output: {
    title: "Introduction",
    desc: "Let me share some insights about me as a creator, and other artists I could recommend",
    color: "blue",
  },
  prompts: [
    {
      title: "GM GM",
      desc: "Write a paragraph to introduce our art collective.",
      prompts: [
        {
          title: "Creators",
          attr: "creators",
          value: "",
          placeholder: "Ask about our favourite creators in the digital art space.",
          label: "",
          type: "textarea",
          maxLength: 600,
          min: 3,
          required: true,
          error: "",
          example: "Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of ...",
        },
      ],
      example: {
        outputs: [
          "Fidenzas are expensive because of its rarity and the time, skill, and effort that goes into creating it. Additionally, because of its unique and often one–of–a–kind nature, the art is highly sought after and can be seen as a valuable investment.",
          "In June 2021, employing the most complicated algorithm he had ever created, Hobbs made Fidenza, a series of 999 computer-generated images minted as individual NFTs that examine the point where the worlds of digital and analogue — and chaos and order — collide.",
          "Fidenza is the brainchild of Tyler Hobbs, 34, who quit his computer engineering job to work as a full time artist. He struck ETH when he discovered Art Blocks, an art platform that creates NFT's based on generative art, and became a curated artist.",
        ],
        color: "blue",
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

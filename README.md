<h4 align="left"><b>Meet Our CEO</b></h4>

<p align="left">
    <a href="https://livethelife.tv" target="_blank"><img src="public/other/apple-touch-icon.png" alt="IkigaiLabsXYZ" width="100" /></a>
</p>


## ChatGPT4.20 + Midjourney V6.9 is a match made in heaven tbh.

The CEO is super friendly, however he lacks knowledge about gen art, web3, the Ikigai Labs repo and our specific editorial style, and we feel he could become a better CEO as the use of the openai API allows us to remix it, add specific features, pull in specific web3 and NFT data and fix our own painpoints. 

# 🔥 Features

- Prompt library
- Organize chats into folders (with colours)
- Filter chats and folders
- Token count and pricing
- YouTube, Midjourney, WhatsApp integration
- Camera Capture and Generative Voice AI
- Custom model parameters (e.g. presence_penalty)
- Chat as user / assistant / system
- Edit, reorder and insert any messages, anywhere
- Chat title generator
- Save chat automatically to local storage
- Import / Export chat
- Download chat (markdown / image / json)
- Sync to Google Drive and/or AWS S3
- Integration with Google Search API
- Azure OpenAI endpoint support
- Replicate endpoint support
- Multiple language support (i18n)
- Unlimited local storage (desktop)
- Runs locally (desktop)


- We use `IndexDB` to store local data, it will not be uploaded to the server.
- Provides different conversations modes，support `Single Conversation`, `Continuous Conversation`, `OpenAI Image Generation`、`Stable Diffusion` and more.
- Powered by `Provider plugin` , easy to extend AI platforms such as [OpenAI](https://openai.com/), [Replicate](https://replicate.com/), and also supports custom model parameters.

- [OpenAI](https://openai.com) - We're using the brand new [text-embedding-ada-002](https://openai.com/blog/new-and-improved-embedding-model/) embedding model, which captures deeper information about text in a latent space with 1536 dimensions
  - This allows us to go beyond keyword search and search by higher-level topics.
- [Pinecone](https://www.pinecone.io) - Hosted vector search which enables us to efficiently perform [k-NN searches](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) across these embeddings

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [ToDesktop](https://todesktop.com) - A simple way to make your web app into a beautiful desktop app
- [DexieJS](https://dexie.org) - A Minimalistic Wrapper for IndexedDB
- [Mantine](https://mantine.dev) - A fully featured React component library

## YouTube
- Navigate to the root directory of the repository in your terminal.
- Run the command `npm install` to install all the necessary dependencies.
- Run the command `npx tsx src/bin/resolve-yt-playlist.ts` to download the English transcripts for each episode of the target playlist (in this case, the All-In Podcast Episodes Playlist).
- Run the command `npx tsx src/bin/process-yt-playlist.ts` to pre-process the transcripts and fetch embeddings from OpenAI, then insert them into a Pinecone search index.
- You can now run the command `npx tsx src/bin/query.ts` to query the Pinecone search index.
(Optional) Run the command `npx tsx src/bin/generate-thumbnails.ts` to generate timestamped thumbnails of each video in the playlist. This step takes ~2 hours and requires a stable internet connection.
- The frontend of the project is a Next.js webapp deployed to Vercel that uses the Pinecone index as a primary data store. You can run the command npm run dev to start the development server and view the webapp locally.

Note that a few episodes may not have automated English transcriptions available, and that the project uses a HTML scraping solution for this, so a better solution would be to use Whisper to transcribe the episode's audio.

## ASCII ART PLUGIN

ChatGPT Plugin which renders text as ASCII art.

[Live manifest file](https://chatgpt-plugin-ascii-art.transitive-bullshit.workers.dev/.well-known/ai-plugin.json)

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [@cloudflare/itty-router-openapi](https://github.com/cloudflare/itty-router-openapi)


## Self-host using Docker

```
docker run --name chatpad -d -p 8080:80 ghcr.io/deiucanta/chatpad:latest
```

## Self-host using Docker with custom config

```
docker run --name chatpad -d -v `pwd`/config.json:/usr/share/nginx/html/config.json -p 8080:80 ghcr.io/deiucanta/chatpad:latest
```


## LEX FRIDMAN PLUGIN

This is a ChatGPT retrieval plugin which gives ChatGPT access to all of the transcriptions across 360+ episodes of the [Lex Fridman Podcast](https://lexfridman.com/podcast/). It contains a single API route.


- [Dexa API](https://dexa.ai/) (currently in private beta)

Here's an example [live manifest file](https://chatgpt-plugin-dexa-lex-fridman.transitive-bullshit.workers.dev/.well-known/ai-plugin.json). API endpoints are protected so only OpenAI can access them.

[Dexa](https://dexa.ai) has already done all the hard work of aggregating, transcribing, processing, and indexing the Lex Fridman Podcast (and many other podcasts!).

Under the hood, they're doing **a lot** of really awesome, AI-powered data processing:

- Transcriptions with speaker labels (diarization) for attribution (using [Assembly](https://assemblyai.com))
- Automatic post-processing for common transcription errors
- Advanced chunking based on metadata, topic detection, and sentence structure
- Metadata extraction and enrichment with support for photos of speakers
- Heirarchical clustering and summarization

Lex Fridman Podcast stats from [Dexa](https://dexa.ai/) as of April 5, 2023:

- Total number of episodes: 364
- Total characters transcribed: 45,005,793
- Total audio length: ~36 days

## Getting Started

- get your api key from https://openai.com/api/

You can check if Yarn is installed on your PC with the command `yarn --version`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### OpenAI Magic with GPT-4.20

This project is using OpenAI and its API layer. It is baked in with Authentication, Session Management, Token Tracking, as well as Billing (currently disabled). This MVP will fully understand the structure of the Ikigai Labs XYZ codebase and the tech stack we use, including TailwindCSS, Nextjs, Typscript, P5js, Javascript, React, Nodejs, etc etc. It will understand how to enter the right prompts to get the most out of openai as our coding assistant to publish for example a new minting page, or develop new features, or fix issues in our code. It will also be able to assist us with P5js scripts needed for the Ikigai Labs Gen Art Series.

## Introduction

To start using the project, you will need the following. Node version 14 or above, MongoDB Cloud, an OpenAI account and key and Python.

### Starting Guide

Prepare the following items

- OpenAI account + API Key
- MongoDB Cloud instance database (free tier) + Cluster/Login
- NodeJS
- StripeJS (not required unless implementing billing)

### Installation

- Perform a NPM install or Yarn in the rood directory to install modules
- Update the ENV keys (or ENV.DEV) for your environemnt (for OpenAI, Mongo Etc)
- - MongoDB requires Cluster, Database, Username and Password
- For PC `npm run api` to start the instance of the project
- For Mac `npm run apimac` to start the instance of the project
- Start the Create React App using `npm start`

On first run, the database will initialise with an admin user at `/routes/middleware/mongo.js` which can be updated

You will be able to login with the following details:
`Username: admin@domain.com // Password: KeepingHumanSafe101`

You should have an instance of the backend and frontend running.

For more information, please follow the video attached to this project. This is a starter template. Support is not included as part of the download. Debugging and such will need to be performed at on your own, as well as implementing features.

There is the option to add Stripe, which is currently configured for subscriptions, you will need to connect the Stripe API, Webook URL, and create pricing plans (tempalates provided).

## Adding Prompts

The following steps need to be completed to add one new prompt on the backend and frontend.

### Part 1: Frontend

Head to `./src/tools/` to add the option to use a prompt on the frontend:

- Copy an existing prompt structure, and relabel the title, description, examples (eg, summarize.js -> helloworld.js)
- Update the intended backend url call path on the prompt to `/helloworld`
- Then import the new file add and it to the array on index.js

### Part 2: Backend

Head to `/routes/ai/` to add to the backend a new file

- Copy an existing file prompt call such as (eg. summarize.js -> hellowworld.js)
- Update the listen POST path to `/helloworld`
- Import the new file and add it to the array on index.js

Restart the client and backend server. The new prompt should show up. I've added an example hello world for testing purposes.

### Part 3: Customise Promtps

Udpate the backend and frontend queries to define the kind of prompt you want to query OpenAI with, as well as the kind of output you wish. There are examples for plaintext and listed prompts as part of this process.

GPT-3.5 and GPT-4 can now access plugins and other APIs through the OpenAI API. This expands the possibilities for external GPT applications. In addition, GPT-3.5 gets a 16k context window via API, four times larger than ChatGPT

## Stack

- ▲ [Next.js](https://nextjs.org/) for webapp
- 🖼 [Chakra UI](https://chakra-ui.com/) for UI components
- 📦 [Prisma](https://www.prisma.io/) for database
- 🧠 [Replicate](https://replicate.com/), a platform for running machine learning models in the cloud
- 💰 [Stripe](https://stripe.com/) for payments
- 👩‍🎨 [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion) an open-source text-to-image generation model

- [OpenAI Functions](https://platform.openai.com/docs/guides/gpt/function-calling) - AI completions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI streaming library
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles

## Getting Started

Install dependencies:

```bash
yarn install
```

You can use Docker to run a local postgres database and maildev server (accessible at http://localhost:1080):

```bash
docker-compose up -d
```

Create .env.local:

```bash
cp .env.example .env.local
```

Update environment variable values:

```
// Database connection string of your database (postgresql here)
DATABASE_URL=postgresql://photoshot:photoshot@localhost:5432/photoshot
// https://next-auth.js.org/configuration/options#nextauth_url
NEXTAUTH_URL=http://localhost:3000

// AWS S3 bucket info (for storing pictures)
S3_UPLOAD_KEY=
S3_UPLOAD_SECRET=
S3_UPLOAD_BUCKET=
S3_UPLOAD_REGION=

// Replicate API token / username
REPLICATE_API_TOKEN=
REPLICATE_USERNAME=
REPLICATE_MAX_TRAIN_STEPS=3000
REPLICATE_NEGATIVE_PROMPT=
REPLICATE_HD_VERSION_MODEL_ID=

// Replicate instance token (should be rare)
NEXT_PUBLIC_REPLICATE_INSTANCE_TOKEN=

// Random secret for NextAuth
SECRET=

// SMTP server and email address to send emails from
EMAIL_FROM=
EMAIL_SERVER=smtp://localhost:1080

// Stripe API key
STRIPE_SECRET_KEY=

// Price of a studio in cents (ie: 1000 = $10)
NEXT_PUBLIC_STRIPE_STUDIO_PRICE=

// Amount of allowed shots per studio
NEXT_PUBLIC_STUDIO_SHOT_AMOUNT=

// Prompt wizard
OPENAI_API_KEY=
OPENAI_API_SEED_PROMPT=
```

Run migrations

```bash
yarn prisma:migrate:dev
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

////

## Installation

`npm i openai-api`

## Usage

### Initializing

```js
const OpenAI = require("openai-api");

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);
```

### Completion API call

```js
(async () => {
  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: "this is a test",
    maxTokens: 5,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
    stop: ["\n", "testing"],
  });

  console.log(gptResponse.data);
})();
```

#### Example of a successful completion response:

```js
{
    id: 'some-long-id',
    object: 'text_completion',
    created: 1616791508,
    model: 'davinci:2020-05-03',
    choices: [
        {
          text: " predicted text...",
          index: 0,
          logprobs: null,
          finish_reason: 'length'
        }
    ]
}
```

### Search API call

```js
(async () => {
  const gptResponse = await openai.search({
    engine: "davinci",
    documents: ["White House", "hospital", "school"],
    query: "the president",
  });

  console.log(gptResponse.data);
})();
```

### Answers API call

```js
(async () => {
  const gptResponse = await openai.answers({
    documents: ["Puppy A is happy.", "Puppy B is sad."],
    question: "which puppy is happy?",
    search_model: "ada",
    model: "curie",
    examples_context: "In 2017, U.S. life expectancy was 78.6 years.",
    examples: [
      ["What is human life expectancy in the United States?", "78 years."],
    ],
    max_tokens: 5,
    stop: ["\n", "<|endoftext|>"],
  });

  console.log(gptResponse.data);
})();
```

### Classification API call

```js
(async () => {
  const gptResponse = await openai.classification({
    examples: [
      ["A happy moment", "Positive"],
      ["I am sad.", "Negative"],
      ["I am feeling awesome", "Positive"],
    ],
    labels: ["Positive", "Negative", "Neutral"],
    query: "It is a raining day :(",
    search_model: "ada",
    model: "curie",
  });

  console.log(gptResponse.data);
})();
```

### Engines API call

```js
(async () => {
  const gptResponse = await openai.engines();

  console.log(gptResponse.data);
})();
```

### Embeddings API call

Documentation: [https://beta.openai.com/docs/api-reference/embeddings](https://beta.openai.com/docs/api-reference/embeddings)

```js
(async () => {
  const gptResponse = await openai.embeddings({
    engine: "text-similarity-babbage-001",
    input: ["A happy moment", "I am sad.", "I am feeling awesome"],
  });

  console.log(gptResponse.data); // see index.d.ts interface Embedding
})();
```

<p align="left"><i>Did you enjoy using this? Give it some love with a star! 🌟</i></p>

//

# OpenAI Edge

A TypeScript module for querying OpenAI's API using `fetch` (a standard Web API)
instead of `axios`. This is a drop-in replacement for the official `openai`
module (which has `axios` as a dependency).

As well as reducing the bundle size, removing the dependency means we can query
OpenAI from edge environments. Edge functions such as Next.js Edge API Routes
are very fast and, unlike lambda functions, allow streaming data to the client.

The latest version of this module has feature parity with the official `v3.3.0`.

> **Update July 2023:** The official `openai` library will use `fetch` in v4,
> hopefully making `openai-edge` redundant. You can try it in beta now, more
> info here: https://github.com/openai/openai-node/discussions/182

## Installation

```shell
yarn add openai-edge
```

or

```shell
npm install openai-edge
```

## Responses

Every method returns a promise resolving to the standard `fetch` response i.e.
`Promise<Response>`. Since `fetch` doesn't have built-in support for types in
its response data, `openai-edge` includes an export `ResponseTypes` which you
can use to assert the correct type on the JSON response:

```typescript
import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

const configuration = new Configuration({
  apiKey: "YOUR-API-KEY",
});
const openai = new OpenAIApi(configuration);

const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  size: "512x512",
  response_format: "url",
});

const data = (await response.json()) as ResponseTypes["createImage"];

const url = data.data?.[0]?.url;

console.log({ url });
```

## With Azure

To use with Azure OpenAI Service you'll need to include an `api-key` header and
an `api-version` query parameter:

```typescript
const config = new Configuration({
  apiKey: AZURE_OPENAI_API_KEY,
  baseOptions: {
    headers: {
      "api-key": AZURE_OPENAI_API_KEY,
    },
  },
  basePath: `https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME`,
  defaultQueryParams: new URLSearchParams({
    "api-version": AZURE_OPENAI_API_VERSION,
  }),
});
```

## Without global fetch

This module has zero dependencies and it expects `fetch` to be in the global
namespace (as it is in web, edge and modern Node environments). If you're
running in an environment without a global `fetch` defined e.g. an older version
of Node.js, please pass `fetch` when creating your instance:

```typescript
import fetch from "node-fetch";

const openai = new OpenAIApi(configuration, undefined, fetch);
```

## Without global FormData

This module also expects to be in an environment where `FormData` is defined. If
you're running in Node.js, that means using v18 or later.

## Available methods

- `cancelFineTune`
- `createAnswer`
- `createChatCompletion` (including support for `functions`)
- `createClassification`
- `createCompletion`
- `createEdit`
- `createEmbedding`
- `createFile`
- `createFineTune`
- `createImage`
- `createImageEdit`
- `createImageVariation`
- `createModeration`
- `createSearch`
- `createTranscription`
- `createTranslation`
- `deleteFile`
- `deleteModel`
- `downloadFile`
- `listEngines`
- `listFiles`
- `listFineTuneEvents`
- `listFineTunes`
- `listModels`
- `retrieveEngine`
- `retrieveFile`
- `retrieveFineTune`
- `retrieveModel`

## Edge route handler examples

Here are some sample
[Next.js Edge API Routes](https://nextjs.org/docs/api-routes/edge-api-routes)
using `openai-edge`.

### 1. Streaming chat with `gpt-3.5-turbo`

Note that when using the `stream: true` option, OpenAI responds with
[server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).
Here's an example
[react hook to consume SSEs](https://github.com/dan-kwiat/react-hooks#useserversentevents)
and here's a [full NextJS example](https://github.com/dan-kwiat/chat-gpt-clone).

```typescript
import type { NextRequest } from "next/server";
import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Who won the world series in 2020?" },
        {
          role: "assistant",
          content: "The Los Angeles Dodgers won the World Series in 2020.",
        },
        { role: "user", content: "Where was it played?" },
      ],
      max_tokens: 7,
      temperature: 0,
      stream: true,
    });

    return new Response(completion.body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/event-stream;charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};

export const config = {
  runtime: "edge",
};

export default handler;
```

### 2. Text completion with Davinci

```typescript
import type { NextRequest } from "next/server";
import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: searchParams.get("prompt") ?? "Say this is a test",
      max_tokens: 7,
      temperature: 0,
      stream: false,
    });

    const data = (await completion.json()) as ResponseTypes["createCompletion"];

    return new Response(JSON.stringify(data.choices), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};

export const config = {
  runtime: "edge",
};

export default handler;
```

### 3. Creating an Image with DALL·E

```typescript
import type { NextRequest } from "next/server";
import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  try {
    const image = await openai.createImage({
      prompt: searchParams.get("prompt") ?? "A cute baby sea otter",
      n: 1,
      size: "512x512",
      response_format: "url",
    });

    const data = (await image.json()) as ResponseTypes["createImage"];

    const url = data.data?.[0]?.url;

    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};

export const config = {
  runtime: "edge",
};

export default handler;
```

//

### Reasons to consider using `openai-fetch`:

- Supports all envs with native fetch: Node 18+, browsers, Deno, Cloudflare Workers, etc
- Package size: `openai-fetch` is [~5kb](https://bundlephobia.com/package/openai-fetch) and `openai-node` is [~180kb](https://bundlephobia.com/package/openai-node)
- `openai-fetch` includes the first choice in the response (no repetitive: `response.choices[0.text]`)
- You only need the completions, edits, and embeddings endpoints

### Use `openai-node` if you need:

- Endpoints other than completions, edits, and embeddings
- Streaming response support (this may be added later)
- Responses to contain more than one choice (no `n` support)
- To use tokens instead of strings for input

## Usage

Install `openai-fetch` with your favorite package manager and create an instance of the `OpenAIClient` class.

```ts
import { OpenAIClient } from 'openai-fetch';

const client = new OpenAIClient({ apiKey: '<your api key>' });
```

//

## API

The API follows OpenAI very closely, so their [reference documentation](https://beta.openai.com/docs/api-reference) can generally be used. Everything is strongly typed, so you will know if anything is different as soon as TypeScript parses your code.

### Create Completion

See: [OpenAI docs](https://beta.openai.com/docs/api-reference/completions) | [Type definitions](/src/schemas/completion.ts)

```ts
client.createCompletion(params: CompletionParams): Promise<{
  /** The completion string. */
  completion: string;
  /** The raw response from the API. */
  response: CompletionResponse;
}>
```

To get a streaming response, use the `streamCompletion` method.

```ts
client.streamCompletion(params: CompletionParams): Promise<
    ReadableStream<{
      /** The completion string. */
      completion: string;
      /** The raw response from the API. */
      response: CompletionResponse;
    }>
  >
```

### Create Chat Completion

See: [OpenAI docs](https://beta.openai.com/docs/api-reference/chat) | [Type definitions](/src/schemas/chat-completion.ts)

```ts
client.createChatCompletion(params: ChatCompletionParams): Promise<{
  /** The completion message. */
  message: ChatResponseMessage;
  /** The raw response from the API. */
  response: ChatCompletionResponse;
}>
```

### Create Embedding

See: [OpenAI docs](https://beta.openai.com/docs/api-reference/embeddings) | [Type definitions](/src/schemas/embedding.ts)

```ts
client.createEmbedding(params: EmbeddingParams): Promise<{
  /** The embedding for the input string. */
  embedding: number[];
  /** The raw response from the API. */
  response: EmbeddingResponse;
}>
```

### Create Edit

See: [OpenAI docs](https://beta.openai.com/docs/api-reference/edits) | [Type definitions](/src/schemas/edit.ts)

```ts
client.createEdit(params: EditParams): Promise<{
  /** The edited input string. */
  completion: string;
  /** The raw response from the API. */
  response: EditResponse;
}>
```

//

#### [Website](https://dify.ai) • [Docs](https://docs.dify.ai) • [Deployment Docs](https://docs.dify.ai/getting-started/install-self-hosted) •  [FAQ](https://docs.dify.ai/getting-started/faq) • [Twitter](https://twitter.com/dify_ai) • [Discord](https://discord.gg/FngNHpbcY7)

**Dify** is an easy-to-use LLMOps platform designed to empower more people to create sustainable, AI-native applications. With visual orchestration for various application types, Dify offers out-of-the-box, ready-to-use applications that can also serve as Backend-as-a-Service APIs. Unify your development process with one API for plugins and datasets integration, and streamline your operations using a single interface for prompt engineering, visual analytics, and continuous improvement.

**1. Text embedding:** Fully automated text preprocessing embeds your data as context without complex concepts. Supports PDF, TXT, and syncing data from Notion, webpages, APIs.

**2. API-based:**  Backend-as-a-service. Access web apps directly or integrate via APIs without complex backend setup.

**3. Plugins:** Dify "Smart Chat" now supports first-party plugins like web browsing, Google search, Wikipedia to enable online lookup, analyzing web content, and explaining the AI's reasoning process conversationally.

**4. Team workspaces:** Team members can join workspaces to collaboratively edit, manage, and use team AI apps.

**5. Data labeling and improvement:**  Visually inspect AI app logs and improve data via labeling. Observe the AI's reasoning process to continuously enhance performance. (Coming soon)

### OpenAI Embeddings

OpenAI embeddings are pre-trained language models used for natural language processing tasks. These models are built using deep learning algorithms and can be fine-tuned for specific tasks. OpenAI provides several pre-trained embeddings, including GPT-2, GPT-3, and BERT. Each of these models has a different number of parameters and can be used for different tasks.

To use OpenAI embeddings, you can install the OpenAI API and authenticate with your API key. Then, you can load the desired OpenAI embedding model and use it for your NLP task. For example, you can generate text using the model by calling the completions method.

OpenAI embeddings are trained on large amounts of text data and are designed to capture the meaning of words and phrases in a way that is useful for downstream NLP tasks. This is achieved through a process called unsupervised learning, where the model learns from the patterns in the data without being explicitly trained on a specific task.

Once trained, OpenAI embeddings can be used for a variety of NLP tasks, such as text classification, sentiment analysis, and language translation. In addition, they can be fine-tuned for specific tasks by providing additional training data and adjusting the model's parameters.

OpenAI provides several pre-trained embedding models with varying sizes and capabilities. GPT-2 and GPT-3 are both transformer-based models that are well-suited for language generation tasks, such as text completion and question answering. BERT, on the other hand, is a bidirectional encoder that is particularly useful for tasks that require understanding the relationship between different words in a sentence, such as sentiment analysis and named entity recognition.

Overall, OpenAI embeddings are a powerful tool for NLP tasks and have been used to achieve state-of-the-art performance on a wide range of benchmarks and applications.

### Storing Embeddings in Postgres

`pgvector` is a Postgres extension that provides support for vector operations, including similarity search and nearest neighbor search. It allows you to store vectors as columns in a database table and perform vector operations on them using SQL queries.

One interesting use case of `pgvector` is to use it in conjunction with OpenAI embeddings. Since OpenAI embeddings represent words and phrases as high-dimensional vectors, you can store these vectors in a pgvector column and use the extension's similarity search capabilities to find similar words or phrases in a large dataset.

For example, let's say you have a database of customer reviews and you want to find all the reviews that mention a particular product. You could use OpenAI embeddings to represent each review as a vector and store these vectors in a pgvector column. Then, you could perform a similarity search to find all the reviews that are similar to the vector representing the product name.

This approach can be very powerful for applications that involve large amounts of text data, as it allows you to perform complex queries on the data using vector operations. However, it does require some additional setup and configuration compared to traditional SQL queries, so it may not be suitable for all use cases.

### Storing Embeddings in Supabase
	
Supabase is an open-source firebase alternative using which businesses can generate a backend within 2 minutes. It enables users to start their projects with an authentication, Postgres database, instant APIs, storage and real-time subscription. Supabase also takes care of the organisations’ security and provides features of sign-ups and logins for protecting their data. Users can store, organise and share large files with ease, including videos and images. They can write down personalised codes and cron jobs without even scaling or deploying servers. It allows users to develop applications locally and then go on a big level when the organisation is ready. To work with Supabase, it’s not required for organisations to hire database experts. The platform is so simple that even non-techies can understand and use its full features easily. To an organisation, Supabase offers speed and reliability by managing their data in an efficient way.

https://github.com/IkigaiLabsETH/supabase-ai/

### Storing Embeddings in Pinecone

Pinecone is a fully managed vector database that makes it easy to add semantic search to production applications. It combines vector search libraries, capabilities such as filtering, and distributed infrastructure to provide high performance and reliability at any scale. Machine Learning teams combine vector embeddings and vector search to create better applications that impact business results.

https://github.com/IkigaiLabsETH/pinecone- 
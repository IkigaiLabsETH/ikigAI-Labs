const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router();

app.post('/helloworld', async (req, res, next) => {
  try {
    let { content } = req.body;

    let prompt = `Hello World:\n###\n`;

    let inputRaw = `TEXT: ${content}\nKEY POINTS: 1.`;
    prompt += inputRaw;

    const { data: { choices: [{ text }] } } = await openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 100,
      temperature: 0.7,
      topP: 1,
      frequencyPenalty: 1,
      presencePenalty: 0,
      bestOf: 1,
      n: 1,
      user: req.user._id,
      stream: false,
      stop: ["###", "", ],
    });

    let output = text.trimEnd();
    output = output.substring(1, output.length - 1);

    if (output.endsWith("'")) {
      output = output.substring(0, output.length - 1);
    }

    req.locals.input = prompt;
    req.locals.inputRaw = inputRaw;
    req.locals.output = output;

    next();
  } catch (err) {
    console.error(err.response);
    console.error(err.data);
    console.error(err.message);
  }
});

module.exports = app;

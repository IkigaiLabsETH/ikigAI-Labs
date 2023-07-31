const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router();

app.post('/example', async (req, res, next) => {
  try {
    let { content } = req.body;

    let prompt = `I want you to act as a travel guide. I will write you my location and you will suggest a 5-star hotel and a gastronomic restaurant to visit near my location. In some cases, I will also give you the type of places I will visit. For example a surfing beach. You will also suggest me places of similar type that are close to my first location. My first suggestion request is "I am in Bordeaux and I want to visit museums, enjoy fine dining, and a place to sleep, with the preference for a 5-star hotel."\n###\n`;

    let inputRaw = `LOCATION: Bordeaux\nACTIVITIES: Museums, Fine dining\nHOTEL PREFERENCE: 5-star\n`;
    prompt += inputRaw;

    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 250,
      temperature: 0.5,
      topP: 1,
      frequencyPenalty: 1,
      presencePenalty: 0,
      bestOf: 1,
      n: 1,
      user: req.user._id,
      stream: false,
      stop: ["###", "", ],
    });
    let output = `${gptResponse.data.choices[0].text}`;

    output = output.substring(1, output.length - 1);
    output = output.trimEnd();

    if (output.endsWith("'")) {
		output = output.substring(0, output.length - 1)
	}

	// remove a single new line at the end of output if there is one
	if (output.endsWith('\n')) {
		output = output.substring(0, output.length - 1)
	}

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app
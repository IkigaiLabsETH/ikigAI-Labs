
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/travelagent', async (req, res, next) => {
	try {
		let { content } = req.body

    let prompt = `I want you to act as a travel guide. I will write you my location and you will suggest a 5-star hotel and a gastronomic restaurant to visit near my location. In some cases, I will also give you the type of places I will visit. For example a surfing beach. You will also suggest me places of similar type that are close to my first location. My first suggestion request is: `

    let inputRaw = `"${content}"`
    prompt += inputRaw

    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt,
      temperature: 0.5,
      maxTokens: 100,
      topP: 1,
      frequencyPenalty: 1,
      presencePenalty: 0,
      bestOf: 1,
      n: 1,
      user: req.user._id,
      stream: false,
      stop: ["###", "<|endoftext|>", ],
    });

    let outputs = []

    // if(gptResponse.data.choices[0].text){
    //   // Split break lines
    //   outputs = `1.${gptResponse.data.choices[0].text}`.split('\n')

    //   // remove entries with spaces or empty
    //   outputs = outputs.filter(function(output) {
    //     return (!(output === "" || output === " " || output === "\n"))
    //   })

    //   // remove numbers and spaces
    //   for (let i = 0; i < outputs.length; i++) {
    //     outputs[i] = outputs[i].substring(3)
    //     outputs[i] = outputs[i].replace(/^\s+|\s+$/g, '')
    //   }
    //   // remove duplicates
    //   outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos)
    // }

    req.locals.input = prompt
    req.locals.inputRaw = inputRaw
    req.locals.outputs = outputs

    next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}

  })

module.exports = app
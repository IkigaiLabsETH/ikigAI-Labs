import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Example",
	desc: "let's start testing ser",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/example",
	api: "/ai/example",

	output: {
		title: "Example",
		desc: "The following key points detected",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Entry Text",
		desc: "Tell us where you want to live the life",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Let's Gooo", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Aloha ",
			},
		],
		example: {
			output: "Aloha Aloha Aloha ",
			// outputs: [
			// 	"It's Time To Live The Good Life.",
			// 	"We are keen to explore South Africa.",
			// 	"NYC may be the only city that never sleeps.",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj


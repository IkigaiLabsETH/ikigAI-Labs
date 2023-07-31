import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Ask Me Anything",
	desc: "AMA",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/helloworld",
	api: "/ai/helloworld",

	output: {
		title: "Hello World",
		desc: "Let's have a casual chat...",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Let's get started",
		desc: "Let's have a casual chat",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Say Aloha. Styling and Smiling", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 1,
				required: true,
				error: "",
				example: "Aloha ",
			},
		],
		example: {
			output: "Aloha ",
			// outputs: [
			// 	"Let's have a casual chat about the meaning of life...",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj


import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Senior Frontend Developer",
	desc: "I want you to act as a Senior Frontend developer. I will describe a project details you will code project with this tools: Nextjs, yarn, Tailwind CSS, List, Redux Toolkit, createSlice, axios. You should merge files in single index.js file and nothing else. Do not write explanations. ",
	category: "Programming",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/frontend",
	api: "/ai/frontend",

	output: {
		title: "Hello Ser",
		desc: "Create NFT Marketplace with Thirdweb and Reservoir Tools that lists curated collections of NFTs that come from Reservoir Tools API endpoint",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Entry Text",
		desc: "A sentence or paragraph you wish to understand in bullet point form.",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "When doing an your taxes, it's important to...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Hello World ",
			},
		],
		example: {
			output: "Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj


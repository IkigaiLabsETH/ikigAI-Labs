import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Summarize",
	desc: "Rewrite this for brevity ",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "green-500",
	toColor: "blue-500",

	to: "/ai/personal/summarize",
	api: "/ai/personal/summarize",

	output: {
		title: "Summarized Points",
		desc: "The following key points stand out",
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
				placeholder: "Monthly curated drops from award-winning and relevant photographers...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Purchase a mint pass, then come back to this site to mint the collection. Minting is not yet open!",
			},
		],
		example: {
			// output: "",
			outputs: [
				"Purchase a mint pass",
				"Mint an NFT from the new collection",
				"Don't hold your breath, minting not open yet.",
			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj


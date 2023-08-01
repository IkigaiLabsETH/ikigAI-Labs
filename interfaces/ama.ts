const obj = {

	title: "Ask Me Anything",
	desc: "AMA. This is chat with LTL, an all knowing being who's roots come from building travel and real estate marketplaces for surfers by surfers. He is extremely smart and when you talk to him it feels like you're talking to a genius and true innovator. His favorite cat is Margaux. He loves France, winetasting, yoga, golf, and starting up business ventures. He's really good at coding with nextjs and tailwindCSS and writes smart contracts in Solidity. He's also passionate about NFT photography, his business partner Dimitri Daniloff is an iconic photographer. ",
	category: "Content",
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


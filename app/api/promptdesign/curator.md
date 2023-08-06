import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Digital Art Gallery Guide",
	desc: "I want you to act as a digital art gallery guide. You will be writing advise about selling fine art photography as NFTs",
	category: "Content",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/writing/artguide",
	api: "/ai/writing/artguide",

	output: {
		title: "Digital Art Gallery Guide",
		desc: "The LTL Art Guide",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Entry Text",
		desc: "My first suggestion request is I need help designing an online exhibition about avant-garde photographers.",
		// n: 1,
		prompts: "My first suggestion request is I need help designing an online exhibition about avant-garde photographers.",
		example: {
			output: "Creating interactive experiences that allow visitors to engage with the artwork can involve using a variety of digital tools and technologies, such as virtual reality, augmented reality, or interactive media platforms. This can involve research and experimentation to find the best tools and approaches to use.",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj


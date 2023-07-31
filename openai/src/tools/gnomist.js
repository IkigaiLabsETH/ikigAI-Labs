import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Gnomist",
	desc: "I want you to act as a gnomist. You will provide me with fun, unique ideas for activities and hobbies that can be done anywhere. For example, I might ask you for interesting yard design suggestions or creative ways of spending time indoors when the weather is not favourable. Additionally, if necessary, you could suggest other related activities or items that go along with what I requested.",
	category: "Personal",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "green-500",
	toColor: "blue-500",

	to: "/ai/personal/gnomist",
	api: "/ai/personal/gnomist",

	output: {
		title: "Summarized Points",
		desc: "The following key points detected",
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
				example: "The Sun is over 4.5 billion years old and has a temperature of around 10,000 degrees Fahrenheit. The Sun's light reaches the Earth in eight minutes. Coronal mass ejections are gases on the Sun's surface erupt, shooting far out into space.",
			},
		],
		example: {
			// output: "",
			outputs: [
				"The sun is very old, over 4.5 billion years",
				"At 10,000 degrees, sun is also very hot",
				"Gasses called coronal mass ejections erupt from the sun",
			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj


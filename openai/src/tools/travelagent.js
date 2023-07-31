import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Travel Agent",
	desc: "I want you to act as a travel guide. I will write you my location and you will suggest a 5-star hotel and a gastronomic restaurant to visit near my location. In some cases, I will also give you the type of places I will visit. For example a surfing beach. You will also suggest me places of similar type that are close to my first location. My first suggestion request is I am in Bordeaux and I want to visit museums, enjoy fine dinging, and a place to sleep, with the preference for a 5-star hotel. ",
	category: "Personal",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/travelagent",
	api: "/ai/travelagent",

	output: {
		title: "Hello Ser",
		desc: "The following destination seems like a good idea",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Ready to Live The Life?",
		desc: "A sentence to understand where you would love to live the life.",
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
				example: "Aloha, let's go discover some places to Live The Life ",
			},
		],
		example: {
			output: "Aloha ser, let's go visit a museum, enjoy some fine dining, and discover a 5-star place to sleep ",
			// outputs: [
			// 	"I am in Bordeaux and I want to visit museums, enjoy fine dinging, and a place to sleep, with the preference for a 5-star hotel",
			// 	"I am in Bordeaux and I want to visit museums, enjoy fine dinging, and a place to sleep, with the preference for a 5-star hotel",
			// 	"Sure, I'd be happy to help you plan your trip to Bordeaux! For a 5-star hotel in Bordeaux, you might consider the InterContinental Bordeaux - Le Grand Hotel. It is a luxury hotel located in the heart of the city, just a short walk from the Museum of Aquitaine and other popular cultural attractions. As for a gastronomic restaurant, you might consider La Grand'Vigne, which is located within a short drive of the city center. This restaurant has received accolades for its innovative, modern French cuisine, and it also boasts an impressive wine list featuring some of the best vintages from the Bordeaux region. As for museums, Bordeaux has several to choose from, including the Musée d'Aquitaine, which is devoted to the history and culture of the region, and the CAPC Musée d'Art Contemporain, which features works by contemporary artists. If you're interested in visiting a surfing beach while you're in the area, you might consider heading to the town of Arcachon, which is located about an hour's drive southwest of Bordeaux. The beaches in this area are known for their great surfing conditions and are popular with both locals and tourists alike. I hope this information helps you plan your trip to Bordeaux! If you have any further questions or need more suggestions, just let me know.",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj


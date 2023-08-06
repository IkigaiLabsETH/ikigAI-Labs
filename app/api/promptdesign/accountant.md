import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Accountant",
	desc: "I want you to act as an accountant and come up with creative ways to manage finances. You'll need to consider budgeting, investment strategies and risk management when creating a financial plan for your client. In some cases, you may also need to provide advice on taxation laws and regulations in order to help them maximize their profits.",
	category: "Business",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/business/accountant",
	api: "/ai/business/accountant",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Accountant",
		desc: "My first suggestion request is “Create a financial plan for a small business that focuses on cost savings and long-term investments",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Accountant",
		desc: "Create a financial plan",
		// n: 1,
		prompts: [
			{ 
				title: "Title", 
				attr: "title",  
				value: "", 
				placeholder: "Create a financial plan", 
				label: "Examples: NFTs, Accountant, Finance, Defi",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "nft platform",
			},
			{ 
				title: "Expenses", 
				attr: "Expenses",  
				value: "", 
				placeholder: "$42,069", 
				label: "Examples: 40k, $20,000, $50 per hour",
				// type: "textarea",
				maxLength: 20,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "40k",
			},
			{ 
				title: "Business Model", 
				attr: "Business Model",  
				value: "", 
				placeholder: "Tokenomics", 
				label: "Examples: Fair Launch, Bonds, LP",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Fair Launch",
			},
			{ 
				title: "Defi", 
				attr: "Defi",  
				value: "", 
				placeholder: "Defi", 
				label: "Examples: Aave, Yearn, OlympusDAO",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "OlympusDAO",
			},
			{ 
				title: "Information", 
				attr: "info",  
				value: "", 
				placeholder: "Tell us a bit more", 
				label: "Examples: Ideas, Brainstorm, Actionplan",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Brainstorm",
			},
		],
		example: {
output: `Sure, I'd be happy to help with that! Here are a few ideas for creative ways to manage finances:

Implement a budget: A budget is a crucial tool for financial management. It helps you track your income and expenses, and ensures that you are spending money in a way that aligns with your financial goals.

Invest in a diverse portfolio: Diversifying your investments can help manage risk and maximize returns. Consider investing in a mix of asset classes, such as stocks, bonds, and real estate.

Use financial software: There are many financial software programs available that can help you track your budget, investments, and other financial matters. These tools can be very useful in helping you stay organized and on top of your finances.

Utilize tax-advantaged accounts: There are several types of accounts that offer tax advantages, such as 401(k)s and IRAs. Contributions to these accounts may be tax-deductible, and any earnings are tax-deferred until withdrawal.

Seek professional advice: It can be helpful to work with a financial advisor or accountant who can provide guidance on financial management and help you develop a plan that is tailored to your specific needs and goals.

I hope these ideas are helpful! Let me know if you have any specific questions or concerns that you'd like me to address.
`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	},{
		title:"Financial Plan",
		desc: "Write a short few words about the business",
		// n: 1,
		prompts: [
			{ 
				title: "Financial Plan", 
				attr: "content",  
				value: "", 
				placeholder: "Write a short few words about the business", 
				label: "",
				type: "textarea",
				maxLength: 400,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "Write a short few words about the business",
			},
		],
		example: {
output: `Sure, here is a financial plan for an NFT marketplace:

Develop a budget: First, create a budget that outlines all of your expected expenses and income. This will help you understand your financial situation and determine how much money you have available to invest in the business.

Secure funding: Depending on the size and scale of your marketplace, you may need to secure funding through investments, loans, or other sources. Carefully consider the terms of any funding you receive, and be sure to have a plan in place to pay it back.

Invest in marketing: NFT marketplaces rely on visibility and traction to succeed. Make sure to allocate a significant portion of your budget to marketing and advertising efforts that will help drive traffic to your site.

Manage costs: Keep a close eye on your expenses and look for ways to cut costs wherever possible. This could include negotiating better deals with suppliers, automating certain processes, or finding more cost-effective solutions for things like payment processing or customer support.

Diversify revenue streams: Consider offering additional services or products to generate additional income for your business. For example, you could offer NFT consulting or design services, or sell physical merchandise related to your marketplace.

Plan for taxes: Make sure to set aside a portion of your revenue to cover any taxes that may be owed on your earnings. You may also want to seek the advice of a tax professional to ensure that you are in compliance with all relevant tax laws and regulations.
`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj


import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Social Media Influencer",
	desc: "I want you to act as a social media influencer. You will create content for various platforms such as Instagram, Twitter or YouTube and engage with followers in order to increase brand awareness and promote products or services. I need help creating an engaging campaign on Instagram to promote a new line of fine art photography.",
	category: "Business",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/business/socialmedia",
	api: "/ai/business/socialmedia",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Social Media Influencer",
		desc: "Example of a possible job application ad",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Social Media Influencer",
		desc: "Write a short few words about the ad",
		// n: 1,
		prompts: [
			{ 
				title: "Title", 
				attr: "title",  
				value: "", 
				placeholder: "Junior Accountant", 
				label: "Examples: UX, Developer, Designer, Copy Writer",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "web3 dev",
			},
			{ 
				title: "Salary", 
				attr: "salary",  
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
				title: "Skills or Experience", 
				attr: "skills",  
				value: "", 
				placeholder: "Tax Audit, Reports, Designing Logos, etc", 
				label: "Examples: Microsoft CRM, Adobe, Till, Equipment",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Tax Audit, Reports, MyOB",
			},
			{ 
				title: "Company", 
				attr: "company",  
				value: "", 
				placeholder: "Company Ptd Ltd", 
				label: "Examples: Tax Point Inc., Moshi Pty Ltd, Studium",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Smith and Co",
			},
			{ 
				title: "Contact Information", 
				attr: "contact",  
				value: "", 
				placeholder: "Adrian Smith adrian@smith.com", 
				label: "Examples: Adrian, adrian@example.com, Call Adrian on 041021031",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Adrian Smith adrian@smith.com",
			},
		],
		example: {
output: `Smith & Co is looking for a Junior Accountant to join our team. If you have experience in accounting and bookkeeping, you will get the chance to work on a wide range of financial and accounting tasks.

The Role:
- Work on a variety of financial tasks
- Do bank reconciliations
- Prepare reports and financial statements
- Work with the CFO to ensure the company is compliant with the financial regulations
			
Skills and Experience:
- Proven experience in an accounting role
- Experience in MYOB would be an advantage
- Experience in a retail environment would be an advantage
			
How to apply:
If you are interested, you can apply by contacting us directly at Smith & Co or email john@smith.com.au.`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	},{
		title:"Basic Ad",
		desc: "Write a short few words about the ad",
		// n: 1,
		prompts: [
			{ 
				title: "Job Information", 
				attr: "content",  
				value: "", 
				placeholder: "accountant 40k can do report, audit, myob, Smith and Co, contact Ryan ryan@co.com", 
				label: "",
				type: "textarea",
				maxLength: 400,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "Junior Accountant earning $40k that does reports, audits, uses myob to work for Smith and Co contact John at john@smith.com",
			},
		],
		example: {
output: `Smith & Co is looking for a Junior Accountant to join our team. If you have experience in accounting and bookkeeping, you will get the chance to work on a wide range of financial and accounting tasks.

The Role:
- Work on a variety of financial tasks
- Do bank reconciliations
- Prepare reports and financial statements
- Work with the CFO to ensure the company is compliant with the financial regulations
			
Skills and Experience:
- Proven experience in an accounting role
- Experience in MYOB would be an advantage
- Experience in a retail environment would be an advantage
			
How to apply:
If you are interested, you can apply by contacting us directly at Smith & Co or email john@smith.com.au.`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj


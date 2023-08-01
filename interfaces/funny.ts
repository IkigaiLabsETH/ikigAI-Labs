
interface PromptField {
  title: string;
  attr: string;
  value: string;
  placeholder: string;
  label: string;
  type?: string;
  maxLength: number;
  min?: number;
  required?: boolean;
  error: string;
  example: string;
}

interface Prompt {
  title: string;
  desc: string;
  prompts: PromptField[];
  example: {
    output: string;
  };
}

interface Output {
  title: string;
  desc: string;
  // Icon: any; // If you want to use a string as an icon, you might need to import an icon library like `react-icons`, `material-ui/icons`, or `@fortawesome/react-fontawesome`.
  // color: string;
}

interface Task {
  title: string;
  desc: string;
  category: string;
  // Icon: any;
  permissions: string[];
  fromColor: string;
  toColor: string;
  to: string;
  api: string;
  output: Output;
  prompts: Prompt[];
}

const obj: Task = {
  title: "Stand-up Comedian",
  desc: "I want you to act as a stand-up comedian. I will provide you with some topics related to current events and you will use your wit, creativity, and observational skills to create a routine based on those topics. You should also be sure to incorporate personal anecdotes or experiences into the routine in order to make it more relatable and engaging for the audience.",
  category: "Content",
  // tags: [],
  permissions: ['user'],
  fromColor: "yellow-400",
  toColor: "yellow-600",
  to: "/ai/writing/funny",
  api: "/ai/writing/funny",
  output: {
    title: "LOL",
    desc: "The following joke has been generated",
    // Icon: RefreshIcon,
    // color: "",
  },
  prompts: [{
    title: "Entry Text",
    desc: "Asky me anything anon.",
    // n: 1,
    prompts: [
      {
        title: "Title",
        attr: "title",
        value: "",
        placeholder: "The Subject",
        label: "You pick the subject. I'll share my dad jokes",
        // type: "textarea",
        maxLength: 150,
        // max: 100,
        min: 5,
        required: true,
        error: "",
        example: "Ok maybe I'm not funny after all",
      },
      {
        title: "Audience",
        attr: "audience",
        value: "",
        placeholder: "cryptocurrency, web3, nfts",
        label: "Who are you vibing with?",
        // type: "textarea",
        maxLength: 50,
        // max: 100,
        // min: 5,
        // required: true,
        error: "",
        example: "CryptoPunks and ArtBlocks crew",
      },
      {
        title: "LFG",
        attr: "desc",
        value: "",
        placeholder: "What if a cryptopunk gets hyped after minting a heritage collection from ArtBlocks...",
        label: "Ok Degens, let me share a story or you tell me what's next",
        type: "textarea",
        maxLength: 600,
        // max: 100,
        // min: 100,
        // required: true,
        error: "",
        example: "Now it's time for you to act all smart anon, don't hesitate to share a dad joke.",
      },
      {
        title: "Keywords",
        attr: "keywords",
        value: "",
        placeholder: "Comedy, Jokes, Memes",
        label: "Are you into memes. We tend to love them.",
        // type: "textarea",
        maxLength: 100,
        // max: 100,
        // min: 4,
        // required: true,
        error: "",
        example: "memetics are underrated, in essence it's storytelling with virality",
      },
    ],
    example: {
      output: "Now may be a good time to share another meme or joke.",
      // outputs: [],
      // Icon: RefreshIcon,
      // color: "",
    }
  }]
};

export default obj;

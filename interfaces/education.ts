export interface PromptField {
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

export interface Prompt {
    title: string;
    desc: string;
    prompts: PromptField[];
    example: {
      output: string;
    };
}

export interface Output {
    title: string;
    desc: string;
}

export interface Task {
    title: string;
    desc: string;
    category: string;
    Icon: any;
    permissions: string[];
    fromColor: string;
    toColor: string;
    to: string;
    api: string;
    output: Output;
    prompts: Prompt[];
}

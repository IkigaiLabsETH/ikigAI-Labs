"use client";

import { useState } from "react";
import Image from "@/components/Image";
import Field from "@/components/Field";
import Select from "@/components/Select";
import Icon from "@/components/Icon";
import PreviewChatBot from "@/components/PreviewChatBot";

const bots = [
    {
        id: "0",
        title: "ChatGPT-4",
        image: "/images/logo-chat-gpt.svg",
    },
    {
        id: "1",
        title: "Google Bard AI",
        image: "/images/logo-converso.svg",
    },
    {
        id: "2",
        title: "ChatGPT-3",
        image: "/images/logo-chat-gpt.svg",
    },
];

const CreateChatBotPage = () => {
    const [name, setName] = useState<string>("UI8 Bot");
    const [bot, setBot] = useState<any>(bots[0]);
    const [message, setMessage] = useState<string>(
        "Hello, I’m Synapse a large language model designed to answer questions and provide information on a wide range of topics. How can I assist you today?"
    );
    const [prompt, setPrompt] = useState<string>(
        "What is the capital of France Can you explain the concept of machine learning What is the weather forecast for tomorrow in New York City"
    );

    return (
        <>
            <div className="flex justify-between items-center mb-12 md:mb-5 md:-mx-5 md:px-5 md:pb-5 md:border-b md:border-n-3 dark:md:border-n-5">
                <div className="text-h3 md:text-h5">Your chatbot</div>
                <PreviewChatBot />
            </div>
            <form action="" className="" onSubmit={() => console.log("Submit")}>
                <div className="flex -mx-1.5 mb-12 md:block md:mx-0 md:mb-8">
                    <Field
                        className="w-[calc(50%-0.75rem)] mx-1.5 md:w-full md:mx-0 md:mb-3"
                        label="Bot name"
                        placeholder="I.g. UI8 Marketplace"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        required
                        optional
                    />
                    <Select
                        className="w-[calc(50%-0.75rem)] mx-1.5 md:w-full md:mx-0"
                        label="Base bot"
                        items={bots}
                        value={bot}
                        onChange={setBot}
                    />
                </div>
                <div className="mb-12 md:mb-8">
                    <div className="flex mb-2 text-base-2 font-semibold text-n-4">
                        Chatbot logo
                    </div>
                    <div className="flex items-center text-small text-n-4">
                        <div className="flex justify-center items-center shrink-0 w-16 h-16 mr-6 bg-n-7 rounded-full">
                            <Image
                                className="w-5"
                                src="/images/logo-2.svg"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                        800x800 PNG, JPG is recommended. Maximum file size: 2Mb
                    </div>
                </div>
                <div className="mb-12 md:mb-8">
                    <div className="flex mb-2 text-base-2 font-semibold text-n-4">
                        Cover image (optional)
                    </div>
                    <div className="relative h-32 rounded-2xl overflow-hidden">
                        <Image
                            className="object-cover"
                            src="/images/chatbot-upload.jpg"
                            fill
                            alt=""
                        />
                    </div>
                </div>
                <Field
                    className="mb-12 md:mb-8"
                    label="Intro message"
                    placeholder="Enter message"
                    note="Enter each message in a new line."
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    required
                    textarea
                />
                <Field
                    className="mb-12 md:mb-8"
                    label="Suggest prompts"
                    placeholder="I.g. What is Synapse UI kit"
                    note="Enter each message in a new line."
                    value={prompt}
                    onChange={(e: any) => setPrompt(e.target.value)}
                    required
                    textarea
                />
                <div className="flex">
                    <button className="btn-gradient md:grow" type="submit">
                        <span>Create chatbot</span>
                        <Icon name="add-circle-stroke" />
                    </button>
                    <button className="btn-stroke ml-3" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateChatBotPage;

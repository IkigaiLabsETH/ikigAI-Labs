"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
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
    const [name, setName] = useState<string>("");
    const [bot, setBot] = useState<any>(bots[0]);
    const [message, setMessage] = useState<string>("");
    const [prompt, setPrompt] = useState<string>("");

    return (
        <Layout>
            <div className="relative shrink-0 w-full h-[22.5rem] max-h-950:h-[18rem] max-h-850:h-[14rem] bg-n-2 lg:h-[14rem] md:h-44 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg-7.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative -mt-[4.75rem] px-10 md:mt-0 md:px-0">
                <div className="max-w-[70.5rem] mx-auto p-16 border border-n-3 rounded-[1.25rem] bg-n-1 lg:p-12 md:border-0 md:rounded-none md:p-5 md:pb-8 dark:bg-n-6 dark:border-n-5">
                    <div className="max-w-[45rem] mx-auto">
                        <div className="flex justify-between items-center mb-5 md:-mx-5 md:mb-8 md:px-5 md:pb-5 md:border-b md:border-n-3 dark:md:border-n-5">
                            <div className="text-h2 lg:text-h3 md:text-h6">
                                Create a chat bot
                            </div>
                            <PreviewChatBot />
                        </div>
                        <div className="mb-12 text-body-1 text-n-4 md:text-body-2 md:mb-8">
                            Create an assistant chatbot that helps you answer
                            every client&apos;s website queries quickly
                        </div>
                        <form
                            action=""
                            className=""
                            onSubmit={() => console.log("Submit")}
                        >
                            <div className="flex -mx-1.5 mb-12 md:block md:mx-0 md:mb-8">
                                <Field
                                    className="w-[calc(50%-0.75rem)] mx-1.5 md:w-full md:mx-0 md:mb-3"
                                    label="Bot name"
                                    placeholder="I.g. UI8 Marketplace"
                                    value={name}
                                    onChange={(e: any) =>
                                        setName(e.target.value)
                                    }
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
                                    800x800 PNG, JPG is recommended. Maximum
                                    file size: 2Mb
                                </div>
                            </div>
                            <div className="mb-12 md:mb-8">
                                <div className="flex mb-2 text-base-2 font-semibold text-n-4">
                                    Cover image (optional)
                                </div>
                                <div className="relative flex justify-center items-center h-32 border-2 border-n-3 border-dashed rounded-2xl dark:border-n-5">
                                    <input
                                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                        type="file"
                                    />
                                    <Icon
                                        className="w-6 h-6 fill-n-7 dark:fill-n-2"
                                        name="add-circle-stroke"
                                    />
                                </div>
                            </div>
                            <Field
                                className="mb-12 md:mb-8"
                                label="Intro message"
                                placeholder="Enter message"
                                note="Enter each message in a new line."
                                value={message}
                                onChange={(e: any) =>
                                    setMessage(e.target.value)
                                }
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
                                <button
                                    className="btn-gradient md:grow"
                                    type="submit"
                                >
                                    <span>Create chatbot</span>
                                    <Icon name="add-circle-stroke" />
                                </button>
                                <button
                                    className="btn-stroke ml-3"
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateChatBotPage;

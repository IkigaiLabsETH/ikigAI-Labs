"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import RemoveChatBot from "./RemoveChatBot";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import Embed from "./Embed";

const CreateChatBotPage = () => {
    const [type, setType] = useState<"settings" | "dashboard" | "embed">(
        "settings"
    );

    const typeTasks = [
        {
            title: "Settings",
            icon: "settings-1",
            active: type === "settings",
            onClick: () => setType("settings"),
        },
        {
            title: "Dashboard",
            icon: "chart-breakout-circle",
            active: type === "dashboard",
            onClick: () => setType("dashboard"),
        },
        {
            title: "Embed",
            icon: "file-plus",
            active: type === "embed",
            onClick: () => setType("embed"),
        },
    ];

    return (
        <Layout>
            <div className="relative shrink-0 w-full h-32 bg-n-2 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg-7.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative -mt-[4.75rem] px-10 md:mt-0 md:px-0">
                <div className="flex max-w-[81.5rem] mx-auto border border-n-3 rounded-[1.25rem] bg-n-1 lg:block lg:p-10 md:p-5 md:pb-8 dark:bg-n-6 dark:border-n-5">
                    <div className="shrink-0 w-80 border-r border-n-3 lg:flex lg:w-auto lg:mb-12 lg:border-r-0 md:-mx-5 md:mb-5 md:px-5 md:pb-5 md:border-b md:border-n-3 dark:border-n-5">
                        <div className="flex flex-col pt-20 px-12 pb-10 xl:px-10 lg:p-0 lg:flex-row lg:grow">
                            {typeTasks.map((item, index) => (
                                <button
                                    className={`group flex items-center h-12 mb-4 px-8 border-2 border-n-3 rounded-full text-base-2 font-bold text-n-4 outline-none tap-highlight-color transition-colors hover:text-n-7 last:mb-0 lg:mr-auto lg:mb-0 lg:px-10 lg:text-0 md:h-11 md:px-[1.625rem] dark:border-n-5 dark:hover:text-n-1 ${
                                        item.active
                                            ? "border-n-7 text-n-7 dark:!border-n-2 dark:text-n-2"
                                            : ""
                                    }`}
                                    onClick={item.onClick}
                                    key={index}
                                >
                                    <Icon
                                        className={`mr-2 fill-n-4 transition-colors group-hover:fill-n-7 lg:mr-0 dark:group-hover:fill-n-1 ${
                                            item.active
                                                ? "fill-n-7 dark:fill-n-2"
                                                : ""
                                        }`}
                                        name={item.icon}
                                    />
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        <div className="px-12 py-10 border-t border-n-3 xl:px-10 lg:p-0 lg:border-0 dark:border-n-5">
                            <RemoveChatBot />
                        </div>
                    </div>
                    <div className="w-[calc(100%-20rem)] px-32 py-20 2xl:px-20 xl:px-10 lg:w-full lg:p-0">
                        {type === "settings" && <Settings />}
                        {type === "dashboard" && <Dashboard />}
                        {type === "embed" && <Embed />}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateChatBotPage;

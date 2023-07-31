import { useState } from "react";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import Search from "./Search";
import Upgrade from "./Upgrade";
import VideoActions from "./VideoActions";
import PhotoEditorActions from "./PhotoEditorActions";
import AudioActions from "./AudioActions";
import PhotoGeneratorActions from "./PhotoGeneratorActions";
import SocialActions from "./SocialActions";
import CreateNewAction from "./CreateNewAction";

import { chatActions } from "@/mocks/chats";
import { twMerge } from "tailwind-merge";

type RightSidebarProps = {
    typeChat?: string;
    visible: boolean;
    onClick: () => void;
};

const RightSidebar = ({ typeChat, visible, onClick }: RightSidebarProps) => {
    const [search, setSearch] = useState<string>("");
    const [type, setType] = useState<"built-in" | "custom">("built-in");

    const typeTasks = [
        {
            title: "Built-in",
            active: type === "built-in",
            onClick: () => setType("built-in"),
        },
        {
            title: "Custom",
            active: type === "custom",
            onClick: () => setType("custom"),
        },
    ];

    return (
        <div
            className={twMerge(
                `absolute top-0 right-0 bottom-0 flex w-80 pt-16 border-l border-n-3 transition-transform xl:translate-x-full xl:bg-n-1 xl:z-5 md:fixed md:z-50 dark:border-n-5 dark:xl:bg-n-6 ${
                    visible ? "" : "translate-x-full xl:translate-x-0"
                }`
            )}
        >
            <Search
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                onSubmit={() => console.log("Submit")}
            />
            <button
                className="group absolute top-4 left-6 w-8 h-8 text-0 before:absolute before:top-1/2 before:left-1/2 before:w-4.5 before:h-4.5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-n-4/10"
                onClick={onClick}
            >
                <Icon
                    className="relative z-1 w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-3"
                    name="arrow-square-right"
                />
            </button>
            <div className="flex flex-col grow p-4 overflow-y-auto scroll-smooth scrollbar-none">
                <Tabs className="shrink-0 mb-4" items={typeTasks} medium />
                <div className="mb-auto">
                    {typeChat === "video" ? (
                        <VideoActions />
                    ) : typeChat === "photo-editor" ? (
                        <PhotoEditorActions />
                    ) : typeChat === "audio" ? (
                        <AudioActions />
                    ) : typeChat === "photo-generator" ? (
                        <PhotoGeneratorActions />
                    ) : typeChat === "social" ? (
                        <SocialActions />
                    ) : (
                        <>
                            {chatActions.map((item) => (
                                <button
                                    className="flex items-center w-full mb-1 p-2 text-base-2 font-semibold text-n-5 transition-colors hover:!text-primary-3 last:mb-0 dark:text-n-3"
                                    key={item.id}
                                >
                                    <div className="flex justify-center items-center w-8 h-8 mr-4 rounded-lg bg-n-2 dark:bg-n-7">
                                        <Icon
                                            className="w-4 h-4 fill-n-5 dark:fill-n-1"
                                            name="cube"
                                        />
                                    </div>
                                    {item.title}
                                </button>
                            ))}
                            <CreateNewAction />
                        </>
                    )}
                </div>
                <Upgrade />
            </div>
        </div>
    );
};

export default RightSidebar;

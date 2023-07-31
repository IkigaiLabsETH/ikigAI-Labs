import { useState } from "react";
import { Tooltip } from "react-tooltip";
import Icon from "@/components/Icon";
import Tabs from "@/components/Tabs";
import Menu from "./Menu";

import { directions } from "@/mocks/chats";

type NewChatProps = {};

const NewChat = ({}: NewChatProps) => {
    const [type, setType] = useState<"super" | "high" | "medium" | "low">(
        "high"
    );

    const typeTasks = [
        {
            title: "Super",
            active: type === "super",
            onClick: () => setType("super"),
        },
        {
            title: "High",
            active: type === "high",
            onClick: () => setType("high"),
        },
        {
            title: "Medium",
            active: type === "medium",
            onClick: () => setType("medium"),
        },
        {
            title: "Low",
            active: type === "low",
            onClick: () => setType("low"),
        },
    ];

    return (
        <div className="p-16 lg:p-8 md:px-5">
            <div className="max-w-[37.5rem] mx-auto 4xl:max-w-[34.5rem]">
                <div className="mb-12 text-center md:mb-8">
                    <div className="mb-2 text-h2 lg:text-h3 md:max-w-[16rem] md:mx-auto">
                        Unlock the power of AI
                    </div>
                    <div className="text-body-1 text-n-4">
                        Meet the synapse of our ai chat app revolutionizing
                        conversations
                    </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <div className="text-base-2 font-semibold text-n-4">
                        Chat creativity
                    </div>
                    <div
                        className="group cursor-pointer"
                        data-tooltip-place="left"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Choose high for creative tasks like generate image for better results"
                    >
                        <Icon
                            className="w-4 h-4 fill-n-4 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-1"
                            name="info-circle"
                        />
                    </div>
                </div>
                <Tooltip id="my-tooltip" />
                <Tabs className="mb-5" items={typeTasks} />
                <Menu
                    items={directions.filter((item: any) => item.type === type)}
                />
            </div>
        </div>
    );
};

export default NewChat;

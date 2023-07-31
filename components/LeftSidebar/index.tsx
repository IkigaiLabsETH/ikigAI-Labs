import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import ToggleTheme from "./ToggleTheme";

import { chats } from "@/constants/navigation";

type LeftSidebarProps = {
    onClick: () => void;
    visible: boolean;
};

const LeftSidebar = ({ onClick, visible }: LeftSidebarProps) => {
    const [activeId, setActiveId] = useState<any>("0");
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (id: string) => {
        router.push("/new-chat");
        setActiveId(id);
    };

    return (
        <div
            className={`fixed top-0 left-0 bottom-0 flex flex-col pt-30 pb-20 transition-[width] overflow-hidden 2xl:z-20 2xl:transition-all md:top-16 md:pt-10 md:bg-n-1 dark:md:bg-n-6 dark:md:shadow-[inset_-0.0625rem_0_0_0_#393E44] ${
                visible
                    ? "w-64 2xl:shadow-2 2xl:bg-n-1 md:w-[19rem] md:translate-x-0 dark:2xl:bg-n-7"
                    : "w-20 md:w-[19rem] md:-translate-x-full"
            }`}
        >
            <button
                className={`absolute top-8.5 left-4.5 flex flex-col justify-center items-center w-11 h-11 rounded-full shadow-2 before:w-4 before:h-0.5 before:bg-n-5 before:my-0.5 before:rounded-sm before:transition-all after:w-4 after:h-0.5 after:bg-n-5 after:my-0.5 after:rounded-sm after:transition-all hover:before:!bg-primary-4 hover:after:!bg-primary-4 dark:bg-n-6 dark:before:bg-n-3 dark:after:bg-n-3 md:hidden ${
                    visible
                        ? "before:rotate-45 before:translate-y-[0.1875rem] after:-rotate-45 after:-translate-y-[0.1875rem]"
                        : ""
                }`}
                onClick={onClick}
            ></button>
            <div className="grow px-4 overflow-y-auto scroll-smooth scrollbar-none">
                <div className="">
                    {chats.map((chat) => (
                        <button
                            className={`flex items-center w-full mb-2 p-1 border-2 border-transparent rounded-full transition-colors hover:border-primary-4 ${
                                activeId === chat.id &&
                                pathname !== "/custom-chatbot"
                                    ? "!border-primary-4"
                                    : ""
                            }`}
                            key={chat.id}
                            onClick={() => handleClick(chat.id)}
                        >
                            <div
                                className="flex justify-center items-center w-9 h-9 rounded-full shrink-0"
                                style={{ backgroundColor: chat.color }}
                            >
                                <Image
                                    className="w-5"
                                    src={chat.image}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`ml-4 text-base-2 font-semibold whitespace-nowrap truncate transition-opacity 2xl:transition-none ${
                                    visible
                                        ? "opacity-100"
                                        : "opacity-0 md:opacity-100"
                                }`}
                            >
                                {chat.title}
                            </div>
                        </button>
                    ))}
                </div>
                <Link
                    className={`flex items-center mb-auto p-2.5 border-2 border-transparent rounded-full text-base-2 font-semibold transition-colors hover:border-primary-4 ${
                        pathname === "/chatbot/create"
                            ? "!border-primary-4"
                            : ""
                    }`}
                    href="/chatbot/create"
                    onClick={() => setActiveId(null)}
                >
                    <Icon
                        className="shrink-0 w-6 h-6 dark:fill-n-2"
                        name="add-circle"
                    />
                    <div
                        className={`ml-5.5 whitespace-nowrap transition-opacity 2xl:transition-none ${
                            visible ? "opacity-100" : "opacity-0 md:opacity-100"
                        }`}
                    >
                        Create chat bot
                    </div>
                </Link>
            </div>
            <ToggleTheme visible={visible} />
        </div>
    );
};

export default LeftSidebar;

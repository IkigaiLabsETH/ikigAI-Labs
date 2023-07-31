import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type ChatListProps = {
    items: any;
};

const ChatList = ({ items }: ChatListProps) => {
    const [activeId, setActiveId] = useState<string>("2");

    return (
        <>
            <div className="flex overflow-auto scroll-smooth scrollbar-none md:hidden">
                {items.map((button: any) => (
                    <div className="relative group shrink-0" key={button.id}>
                        <button
                            className={`relative flex items-center h-9 pl-2.5 pr-6.5 mr-0.5 border-2 border-transparent rounded-lg text-small font-semibold text-n-4 transition-colors after:absolute after:top-1 after:-right-0.5 after:bottom-1 after:w-0.5 after:bg-n-3 after:transition-opacity group-hover:border-n-3 hover:after:opacity-0 dark:after:bg-n-5 dark:group-hover:border-n-5 ${
                                activeId === button.id
                                    ? "bg-n-2 !border-transparent after:opacity-0 dark:bg-n-7 dark:text-n-1"
                                    : ""
                            }`}
                            onClick={() => setActiveId(button.id)}
                        >
                            <div className="shrink-0 w-5 mr-2">
                                <Image
                                    className="w-full"
                                    src={button.image}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                            {button.title}
                        </button>
                        <button className="group absolute top-2 right-1.5 w-5 h-5 text-0 opacity-0 fill-n-4 transition-opacity group-hover:opacity-100 hover:fill-color-5">
                            <Icon
                                className="w-3 h-3 fill-inherit transition-colors"
                                name="close"
                            />
                        </button>
                    </div>
                ))}
            </div>
            <button className="group shrink-0 w-9 h-9 ml-1 mr-6 xl:ml-2 md:hidden">
                <Icon
                    className="fill-n-7 transition-colors group-hover:!fill-primary-4 dark:fill-n-3"
                    name="plus"
                />
            </button>
        </>
    );
};

export default ChatList;

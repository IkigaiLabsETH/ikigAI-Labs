import Icon from "@/components/Icon";
import { useState } from "react";

type ActionsProps = {
    items?: any;
    cell?: boolean;
};

const Actions = ({ items, cell }: ActionsProps) => {
    const [activeId, setActiveId] = useState<string>("");

    return (
        <div className="flex flex-wrap mt-3 -mx-1.5">
            {items.map((item: any) => (
                <button
                    className={`relative mt-3 mx-1.5 pl-4 pr-12 py-2 border border-n-3 rounded-[1.25rem] text-left truncate text-base-2 font-semibold transition-colors hover:!border-primary-3 dark:border-n-5 ${
                        cell
                            ? "w-[calc(50%-0.75rem)] md:w-[calc(100%-0.75rem)]"
                            : "w-[calc(100%-0.75rem)]"
                    } ${
                        activeId === item.id
                            ? "bg-primary-3 !border-primary-3 text-n-1 dark:bg-primary-4 dark:!border-primary-4 dark:text-n-7"
                            : "fill-n-5"
                    }`}
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                >
                    {item.content}
                    <Icon
                        className={`absolute top-1/2 right-4 -translate-y-1/2 ${
                            activeId === item.id
                                ? "fill-n-1 dark:fill-n-7"
                                : "fill-n-5 dark:fill-n-3"
                        }`}
                        name={activeId === item.id ? "check" : "arrow-right"}
                    />
                </button>
            ))}
        </div>
    );
};

export default Actions;

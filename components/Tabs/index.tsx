type TabType = {
    title: string;
    active: boolean;
    onClick?: () => void;
};

type TabsProps = {
    className?: string;
    items: TabType[];
    medium?: boolean;
};

const Tabs = ({ className, items, medium }: TabsProps) => {
    return (
        <div
            className={`p-0.75 border border-n-3 bg-n-2 overflow-hidden shadow-[inset_0_0_0_0.0625rem_rgba(255,255,255,0.5)] rounded-xl dark:bg-n-7 dark:border-n-5 dark:shadow-[inset_0_0_0_0.0625rem_rgba(255,255,255,0.1)] ${
                className || ""
            }`}
        >
            <div
                className={`relative flex before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-n-1 before:rounded-lg before:shadow-2 before:pointer-events-none before:transition-transform dark:before:bg-n-6 ${
                    items.length === 3
                        ? "before:w-1/3"
                        : items.length === 4
                        ? "before:w-1/4"
                        : "before:w-1/2"
                } ${
                    items[1].active
                        ? "before:translate-x-[100%]"
                        : items[2]?.active
                        ? "before:translate-x-[200%]"
                        : items[3]?.active
                        ? "before:translate-x-[300%]"
                        : ""
                }`}
            >
                {items.map((item, index) => (
                    <button
                        className={`flex-1 px-2 rounded-lg text-base-2 font-semibold text-n-7 outline-none tap-highlight-color transition-colors hover:text-primary-3 dark:text-n-1 dark:hover:text-primary-4 ${
                            medium ? "h-8" : "h-10"
                        } ${item.active ? "!text-n-7 dark:!text-n-1" : ""}`}
                        onClick={item.onClick}
                        key={index}
                        type="button"
                    >
                        <span className="relative z-1">{item.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;

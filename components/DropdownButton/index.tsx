import Link from "next/link";
import Icon from "@/components/Icon";

type DropdownButtonProps = {
    item?: any;
};

const DropdownButton = ({ item }: DropdownButtonProps) => {
    return item.url ? (
        <Link
            className="group flex items-center w-full p-2 rounded-xl text-base-2 font-semibold text-n-5 transition-colors hover:bg-n-2 dark:text-n-3 dark:hover:bg-n-6 dark:hover:text-n-1"
            style={{ color: item.color }}
            href={item.url}
        >
            <div className="flex justify-center items-center shrink-0 w-8 h-8 mr-4 rounded-lg bg-n-2 transition-colors group-hover:bg-primary-3 dark:bg-n-6">
                <Icon
                    className="w-4 h-4 fill-n-5 transition-colors group-hover:fill-n-1 dark:fill-n-1"
                    name={item.icon}
                    fill={item.color}
                />
            </div>
            {item.title}
        </Link>
    ) : (
        <button
            className="group flex items-center w-full p-2 rounded-xl text-base-2 font-semibold text-n-5 transition-colors hover:bg-n-2 dark:text-n-3 dark:hover:bg-n-6 dark:hover:text-n-1"
            style={{ color: item.color }}
            onClick={item.onClick}
        >
            <div className="flex justify-center items-center shrink-0 w-8 h-8 mr-4 rounded-lg bg-n-2 transition-colors group-hover:bg-primary-3 dark:bg-n-6">
                <Icon
                    className="w-4 h-4 fill-n-5 transition-colors group-hover:fill-n-1 dark:fill-n-1"
                    name={item.icon}
                    fill={item.color}
                />
            </div>
            {item.title}
        </button>
    );
};

export default DropdownButton;

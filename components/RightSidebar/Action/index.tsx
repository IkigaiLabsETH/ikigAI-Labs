import Icon from "@/components/Icon";

type ActionProps = {
    icon: string;
    title: string;
    onClick: () => void;
};

const Action = ({ icon, title, onClick }: ActionProps) => (
    <button
        className="group flex items-center w-full p-2 rounded-[0.625rem] text-base-2 font-semibold text-n-5 transition-colors hover:bg-n-2 dark:text-n-3 dark:hover:bg-n-7"
        onClick={onClick}
    >
        <div className="flex justify-center items-center shrink-0 w-8 h-8 mr-4 rounded-lg bg-n-2 transition-colors group-hover:bg-primary-3 dark:bg-n-7">
            <Icon
                className="w-4 h-4 fill-n-5 transition-colors group-hover:fill-n-1 dark:fill-n-3"
                name={icon}
            />
        </div>
        {title}
    </button>
);

export default Action;

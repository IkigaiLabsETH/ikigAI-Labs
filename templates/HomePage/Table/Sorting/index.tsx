import Icon from "@/components/Icon";

type SortingProps = {
    title: string;
};

const Sorting = ({ title }: SortingProps) => (
    <button className="inline-flex items-center text-base-2 font-semibold text-n-4 transition-colors hover:text-n-7 dark:hover:text-n-1">
        {title}
        <Icon className="w-4 h-4 ml-2 fill-n-4" name="arrows-sorting" />
    </button>
);

export default Sorting;

import Icon from "@/components/Icon";
import { twMerge } from "tailwind-merge";

type SearchProps = {
    className?: string;
    value: string;
    onChange: any;
    onSubmit: any;
};

const Search = ({ className, value, onChange, onSubmit }: SearchProps) => (
    <form
        className={twMerge(`relative ${className || ""}`)}
        action=""
        onSubmit={onSubmit}
    >
        <button className="group absolute top-3 left-4 text-0" type="submit">
            <Icon
                className="absolute z-1 w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-4"
                name="search"
            />
        </button>
        <input
            className="w-full h-12 pl-12 pr-4 bg-transparent border-2 border-n-3 rounded-xl text-base-1 font-semibold text-n-7 transition-colors placeholder:text-n-4 outline-none focus:border-primary-5 dark:text-n-1 dark:border-n-5 dark:focus:border-primary-5"
            type="text"
            name="search"
            placeholder="Search chat"
            value={value}
            onChange={onChange}
            required
        />
    </form>
);

export default Search;

import Icon from "@/components/Icon";

type SearchProps = {
    value: string;
    onChange: any;
    onSubmit: any;
};

const Search = ({ value, onChange, onSubmit }: SearchProps) => (
    <form
        className="absolute top-0 left-0 right-0 border-b border-n-3 dark:border-n-5"
        action=""
        onSubmit={onSubmit}
    >
        <input
            className="w-full h-16 pl-18 pr-5 bg-transparent text-base-2 text-n-7 placeholder:text-n-4 outline-none dark:text-n-1"
            type="text"
            name="search"
            placeholder="Search action"
            value={value}
            onChange={onChange}
            required
        />
    </form>
);

export default Search;

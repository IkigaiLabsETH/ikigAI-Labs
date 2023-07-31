import Icon from "@/components/Icon";

type CheckboxProps = {
    className?: string;
    label?: string;
    value: any;
    onChange: any;
    reverse?: boolean;
};

const Checkbox = ({
    className,
    label,
    value,
    onChange,
    reverse,
}: CheckboxProps) => (
    <label
        className={`group relative flex items-start select-none cursor-pointer tap-highlight-color ${
            reverse && "flex-row-reverse"
        } ${className || ""}`}
    >
        <input
            className="absolute top-0 left-0 opacity-0 invisible"
            type="checkbox"
            value={value}
            onChange={onChange}
            checked={value}
        />
        <span
            className={`relative flex justify-center items-center shrink-0 w-6 h-6 rounded border-2 border-n-3 transition-colors group-hover:border-color-2 dark:border-n-5 ${
                value ? "bg-color-2 !border-color-2" : "bg-transparent"
            }`}
        >
            <Icon
                className={`fill-n-1 transition-opacity ${
                    value ? "opacity-100" : "opacity-0"
                }`}
                name="check"
            />
        </span>
        {label && (
            <span
                className={`text-base-2 font-semibold text-n-5 dark:text-n-3 ${
                    reverse ? "mr-auto pr-3" : "pl-3"
                }`}
            >
                {label}
            </span>
        )}
    </label>
);

export default Checkbox;

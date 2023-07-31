import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type FieldProps = {
    className?: string;
    classInput?: string;
    label?: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
    icon?: string;
    optional?: boolean;
    note?: string;
};

const Field = ({
    className,
    classInput,
    label,
    textarea,
    type,
    value,
    onChange,
    placeholder,
    required,
    icon,
    optional,
    note,
}: FieldProps) => {
    return (
        <div className={`${className || ""}`}>
            <div className="">
                {label && (
                    <div className="flex mb-2 text-base-2 font-semibold text-n-4">
                        {label}
                        {optional && (
                            <div className="shrink-0 ml-auto pl-5 opacity-50">
                                Optional
                            </div>
                        )}
                    </div>
                )}
                <div className={`relative ${textarea ? "text-0" : ""}`}>
                    {textarea ? (
                        <textarea
                            className={`w-full h-32 px-3.5 py-2.5 bg-transparent border-2 border-n-3 rounded-xl text-base-1 text-n-7 outline-none transition-colors placeholder:text-n-4/50 resize-none focus:!border-primary-5 dark:border-n-5 dark:text-n-1 ${
                                icon ? "pl-11" : ""
                            } ${classInput}`}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            required={required}
                        ></textarea>
                    ) : (
                        <input
                            className={twMerge(
                                `w-full h-12 px-3.5 bg-transparent border-2 border-n-3 rounded-xl text-base-1 text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:!border-primary-5 dark:border-n-5 dark:text-n-1 ${
                                    icon ? "pl-11" : ""
                                } ${classInput}`
                            )}
                            type={type || "text"}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            required={required}
                        />
                    )}
                    <Icon
                        className={`absolute top-3.5 left-4 fill-n-4 pointer-events-none transition-colors ${
                            value !== "" ? "fill-n-7 dark:fill-n-1" : ""
                        }`}
                        name={icon}
                    />
                </div>
                {note && <div className="mt-2 text-small text-n-4">{note}</div>}
                {/* <div className="mt-1 text-small text-color-5">
                    Email is incorrect
                </div> */}
            </div>
        </div>
    );
};

export default Field;

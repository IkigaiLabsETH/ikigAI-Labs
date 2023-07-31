import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type SelectProps = {
    label?: string;
    iconHead: string;
    iconDropdown?: string;
    className?: string;
    items: any;
    value: any;
    onChange: any;
};

const Select = ({
    label,
    iconHead,
    iconDropdown,
    className,
    items,
    value,
    onChange,
}: SelectProps) => (
    <div className={`relative z-1 ${className || ""}`}>
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <Listbox.Button
                        className={twMerge(
                            `flex items-center w-full p-1.5 border-2 border-transparent rounded-[0.625rem] transition-colors hover:border-primary-4 ${
                                open ? "border-primary-4" : ""
                            }`
                        )}
                    >
                        <div className="flex justify-center items-center shrink-0 w-8 h-8 rounded-lg bg-n-2 transition-colors dark:bg-n-7">
                            <Icon
                                className="shrink-0 w-4 h-4 fill-n-5 dark:fill-n-3"
                                name={iconHead}
                            />
                        </div>
                        <div className="w-[calc(100%-3.25rem)] px-4 text-left">
                            <div className="truncate text-smaller text-n-4">
                                {label}
                            </div>
                            <div className="truncate text-base-2 font-semibold dark:text-n-3">
                                {value.title}
                            </div>
                        </div>
                        <Icon
                            className={`fill-n-4 transition-transform ${
                                open ? "rotate-180" : ""
                            }`}
                            name="arrow-down"
                        />
                    </Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Listbox.Options
                            className={twMerge(
                                `absolute t-full left-0 right-0 z-5 mt-2 p-2 bg-n-1 rounded-2xl shadow-modal dark:bg-n-6 ${
                                    open ? "z-10" : ""
                                }`
                            )}
                        >
                            {items.map((item: any) => (
                                <Listbox.Option
                                    className="flex items-center p-2 rounded-xl text-base-2 font-semibold transition-colors hover:bg-n-2 cursor-pointer ui-selected:!bg-n-7 ui-selected:text-n-1 dark:hover:bg-n-5 dark:ui-selected:!bg-n-2 dark:ui-selected:text-n-6"
                                    key={item.id}
                                    value={item}
                                >
                                    {iconDropdown && (
                                        <div className="flex justify-center items-center w-8 h-8 mr-4">
                                            <Icon
                                                className="w-4 h-4 fill-n-5 transition-colors ui-selected:fill-n-1 dark:fill-n-3 dark:ui-selected:fill-n-6"
                                                name={iconDropdown}
                                            />
                                        </div>
                                    )}
                                    <div className="mr-auto">{item.title}</div>
                                    <Icon
                                        className="hidden shrink-0 w-6 h-6 ml-4 mr-1 fill-color-3 ui-selected:block"
                                        name="check"
                                    />
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </>
            )}
        </Listbox>
    </div>
);

export default Select;

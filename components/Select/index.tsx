import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type SelectProps = {
    label?: string;
    className?: string;
    classButton?: string;
    classArrow?: string;
    classOptions?: string;
    items: any;
    value: any;
    onChange: any;
    up?: boolean;
};

const Select = ({
    label,
    className,
    classButton,
    classArrow,
    classOptions,
    items,
    value,
    onChange,
    up,
}: SelectProps) => (
    <div className={`relative z-1 ${className || ""}`}>
        {label && (
            <div className="flex mb-2 text-base-2 font-semibold text-n-4">
                {label}
            </div>
        )}
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <Listbox.Button
                        className={twMerge(
                            `flex items-center w-full h-12 px-3.5 py-2.5 bg-transparent border-2 border-n-3 rounded-xl text-base-1 font-semibold text-n-7 transition-colors hover:!border-primary-5 tap-highlight-color dark:border-n-5 dark:text-n-1 ${
                                open ? "!border-primary-5" : ""
                            } ${classButton}`
                        )}
                    >
                        {value?.image && (
                            <div className="shrink-0 mr-3">
                                <Image
                                    className="w-6"
                                    src={value.image}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>
                        )}
                        {value?.icon && (
                            <Icon
                                className="mr-3 dark:fill-n-1"
                                name={value.icon}
                            />
                        )}
                        <div className="grow mr-auto text-left truncate">
                            {value.title}
                        </div>
                        <Icon
                            className={`shrink-0 w-6 h-6 ml-2 fill-n-7 transition-transform dark:fill-n-3 ${
                                open ? "rotate-180" : ""
                            } ${classArrow}`}
                            name="arrow-down"
                        />
                    </Listbox.Button>
                    <Transition
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className={twMerge(
                                `absolute t-full left-0 right-0 z-5 mt-2 p-2 bg-n-1 rounded-2xl shadow-modal dark:bg-n-7 ${
                                    open ? "z-10" : ""
                                } ${
                                    up ? "top-auto bottom-full mt-0 mb-2" : ""
                                } ${classOptions}`
                            )}
                        >
                            {items.map((item: any) => (
                                <Listbox.Option
                                    className="flex items-center p-2 rounded-xl text-base-2 font-semibold transition-colors hover:bg-n-2 cursor-pointer ui-selected:!bg-n-7 ui-selected:text-n-1 tap-highlight-color dark:hover:bg-n-6 dark:ui-selected:!bg-n-1 dark:ui-selected:!text-n-7"
                                    key={item.id}
                                    value={item}
                                >
                                    {item.image && (
                                        <div className="shrink-0 mr-3">
                                            <Image
                                                className="w-6"
                                                src={item.image}
                                                width={24}
                                                height={24}
                                                alt=""
                                            />
                                        </div>
                                    )}
                                    {item.icon && (
                                        <Icon
                                            className={`w-5 h-5 mt-0.5 mr-3 ui-selected:fill-n-1 dark:fill-n-1 transition-colors dark:ui-selected:fill-n-7`}
                                            name={item.icon}
                                        />
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

import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type SelectDarkProps = {
    items: any;
    value: any;
    onChange: any;
};

const SelectDark = ({ items, value, onChange }: SelectDarkProps) => (
    <div className="hidden md:block">
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <Listbox.Button className="h-12 pl-6 pr-4 bg-n-6 border-r border-n-5 text-base-2 font-semibold text-n-1 tap-highlight-color">
                        {value.title}
                        <Icon
                            className={`shrink-0 ml-3 fill-n-1 transition-transform ${
                                open ? "rotate-180" : ""
                            }`}
                            name="arrow-down"
                        />
                    </Listbox.Button>
                    <Transition
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute t-full left-0 right-0 z-5 bg-n-6 shadow-modal">
                            {items.map((item: any) => (
                                <Listbox.Option
                                    className="flex items-center border-b border-n-5 px-6 py-3 text-base-2 font-semibold text-n-4 transition-colors cursor-pointer ui-selected:!text-n-1 last:border-0"
                                    key={item.id}
                                    value={item}
                                >
                                    <div className="mr-auto">{item.title}</div>
                                    <Icon
                                        className="hidden shrink-0 w-6 h-6 ml-4 -mr-1 fill-n-1 ui-selected:block"
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

export default SelectDark;

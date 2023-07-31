import { Menu, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";
import DropdownButton from "@/components/DropdownButton";

type DropdownProps = {
    className?: string;
    items: any;
};

const Dropdown = ({ className, items }: DropdownProps) => {
    return (
        <div className={`relative z-10 ml-auto ${className || ""}`}>
            <Menu>
                <Menu.Button className="group w-9 h-9 rounded-lg transition-colors text-0 hover:bg-n-2 ui-open:!bg-n-3 dark:hover:bg-n-7 dark:ui-open:!bg-n-7">
                    <Icon
                        className="fill-n-5 transition-colors group-hover:fill-n-7 dark:fill-n-3 dark:group-hover:fill-n-1"
                        name="dots"
                    />
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className="absolute top-full -right-4 w-[14.6875rem] mt-3 p-5 bg-n-1 rounded-2xl shadow-modal outline-none dark:bg-n-7">
                        {items.map((item: any, index: number) => (
                            <Menu.Item
                                className="mb-1 last:mb-0"
                                key={index}
                                as="div"
                            >
                                <DropdownButton item={item} />
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default Dropdown;

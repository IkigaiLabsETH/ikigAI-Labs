import { Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

import { historyChat } from "@/mocks/chats";

type MenuСhatProps = {
    className?: string;
    buttonIcon?: boolean;
};

const MenuСhat = ({ className, buttonIcon }: MenuСhatProps) => {
    const pathname = usePathname();

    return (
        <div className={className}>
            <Menu>
                {buttonIcon ? (
                    <Menu.Button className="flex justify-center items-center w-11 h-11">
                        <Icon
                            className="w-6 h-6 fill-n-5 transition-colors ui-open:fill-primary-3 dark:fill-n-3"
                            name="message"
                        />
                    </Menu.Button>
                ) : (
                    <Menu.Button className="flex items-center max-w-full text-left text-h6 transition-colors md:text-body-1 hover:text-primary-3 tap-highlight-color">
                        {historyChat
                            .filter((x: any) => pathname === x.url)
                            .map((item) => (
                                <div
                                    className="relative pl-15 py-2 truncate md:pl-0"
                                    key={item.id}
                                >
                                    <div
                                        className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-center items-center shrink-0 w-10 h-10 mr-5 rounded-xl md:hidden"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <Icon
                                            className="w-6 h-6 fill-n-1"
                                            name="chart-breakout-square"
                                        />
                                    </div>
                                    {item.title}
                                </div>
                            ))}
                        <Icon
                            className="shrink-0 ml-4 fill-n-5 dark:fill-n-3"
                            name="arrows-sorting"
                        />
                    </Menu.Button>
                )}
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-75 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Menu.Items className="absolute top-full left-3 right-3 -mt-1 p-3 bg-n-1 rounded-2xl shadow-modal outline-none dark:bg-n-7">
                        <div className="max-h-[24rem] overflow-auto scroll-smooth max-h-850:max-h-[18rem] md:max-h-[24rem]">
                            {historyChat.map((item: any) => (
                                <Menu.Item
                                    className={`flex items-center p-3 rounded-xl text-base-1 font-semibold transition-colors hover:bg-n-2 dark:hover:bg-n-6/70 tap-highlight-color ${
                                        item.url === pathname
                                            ? "!bg-n-7 !text-n-1 dark:!bg-n-6"
                                            : ""
                                    }`}
                                    key={item.id}
                                    as="a"
                                    href={item.url}
                                >
                                    <div
                                        className="flex justify-center items-center w-6 h-6 mr-7 rounded-md md:mr-4"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <Icon
                                            className="w-4 h-4 fill-n-1"
                                            name="chart-breakout-square"
                                        />
                                    </div>
                                    <div className="w-[calc(100%-3.25rem)] md:w-[calc(100%-2.5rem)] truncate">
                                        {item.title}
                                    </div>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default MenuСhat;

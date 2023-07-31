import { Menu, Transition } from "@headlessui/react";
import Image from "@/components/Image";
import DropdownButton from "@/components/DropdownButton";

type ProfileProps = {};

const Profile = ({}: ProfileProps) => {
    const menu = [
        {
            title: "Settings",
            icon: "settings",
            url: "/settings",
        },
        {
            title: "Manage subscription",
            icon: "manage",
            url: "/pricing-and-payment",
        },
        {
            title: "Log out",
            icon: "logout",
            onClick: () => console.log("Log out"),
        },
    ];

    return (
        <div className="relative z-10 ml-auto md:ml-2">
            <Menu>
                <Menu.Button className="relative shrink-0 w-9 h-9">
                    <Image
                        className="w-full h-full object-cover rounded-full opacity-100"
                        src="/images/avatar.jpg"
                        width={36}
                        height={36}
                        alt="Avatar"
                        priority
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-n-1 bg-color-5 rounded-full dark:border-n-6"></div>
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className="absolute top-full -right-0.5 w-[18.125rem] mt-2 p-5 bg-n-1 rounded-2xl shadow-modal outline-none md:right-0 dark:bg-n-7">
                        {menu.map((item: any, index) => (
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

export default Profile;

"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Select from "@/components/Select";
import Menu from "./Menu";
import EditProfile from "./EditProfile";
import Password from "./Password";
import Notifications from "./Notifications";
import ChatExport from "./ChatExport";
import Sessions from "./Sessions";
import Applications from "./Applications";
import Team from "./Team";
import DeleteAccount from "./DeleteAccount";

import { settings } from "@/constants/settings";

const SettingsPage = () => {
    const [active, setActive] = useState<any>(settings[0]);

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isTablet = useMediaQuery({
        query: "(max-width: 1023px)",
    });

    return (
        <Layout>
            <div className="relative shrink-0 w-full h-64 max-h-950:h-48 max-h-850:h-40 bg-n-2 lg:h-[12.5rem] md:h-32 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg-8.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative -mt-[4.75rem] px-10 pb-10 md:mt-0 md:px-0 md:pb-0">
                <div className="flex border border-n-3 rounded-[1.25rem] bg-n-1 lg:block lg:px-10 lg:py-12 md:px-5 md:py-8 md:border-0 md:rounded-none dark:border-n-5 dark:bg-n-6">
                    <div className="shrink-0 w-[22.5rem] p-12 pt-20 border-r border-n-3 xl:w-[17rem] xl:py-12 xl:px-8 lg:w-full lg:p-0 lg:border-r-0 dark:border-n-5">
                        <Select
                            className="hidden mb-8 lg:block"
                            items={settings}
                            value={active}
                            onChange={setActive}
                        />
                        <Menu
                            value={active}
                            setValue={setActive}
                            buttons={settings}
                        />
                    </div>
                    <div className="grow pt-20 px-12 pb-12 xl:pt-12 xl:px-10 lg:p-0">
                        <div className="max-w-[43rem] mx-auto">
                            {active.id === "edit-profile" && <EditProfile />}
                            {active.id === "password" && <Password />}
                            {active.id === "notifications" && <Notifications />}
                            {active.id === "chat-export" && <ChatExport />}
                            {active.id === "sessions" && <Sessions />}
                            {active.id === "applications" && <Applications />}
                            {active.id === "team" && <Team />}
                            {active.id === "delete-account" && (
                                <DeleteAccount />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SettingsPage;

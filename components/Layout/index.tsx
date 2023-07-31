import { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Header from "@/components/Header";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div
            className={`pr-6 pl-20 transition-[padding] md:p-0 ${
                visible ? "pl-64 2xl:pl-20 md:pl-0" : "pl-20 md:pl-0"
            }`}
        >
            <LeftSidebar
                visible={visible}
                onClick={() => setVisible(!visible)}
            />
            <div className="flex py-6 h-screen h-screen-ios md:py-0">
                <div className="relative flex flex-col grow max-w-full pt-16 bg-n-1 rounded-xl dark:bg-n-6 overflow-y-auto scroll-smooth scrollbar-none md:rounded-none">
                    <Header
                        visible={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <div className="flex flex-col grow overflow-y-auto scroll-smooth scrollbar-none">
                        {children}
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-10 bg-n-7/90 opacity-0 invisible transition-all ${
                    visible ? "md:opacity-100 md:visible" : ""
                }`}
                onClick={() => setVisible(false)}
            ></div>
        </div>
    );
};

export default Layout;

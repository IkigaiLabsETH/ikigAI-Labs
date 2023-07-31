"use client";

import { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Slider from "./Slider";
import SignIn from "./SignIn";
import Create from "./Create";

const itemsEntry = [
    {
        content:
            "The potential to enhance customer service and improve business efficiency",
        image: "/images/slider-pic-1.jpg",
    },
    {
        content: "Revolutionize your chats with AI-powered conversations.",
        image: "/images/slider-pic-2.jpg",
    },
    {
        content:
            "The potential to enhance customer service and improve business efficiency",
        image: "/images/slider-pic-1.jpg",
    },
];

const EntryPage = () => {
    const [create, setCreate] = useState<boolean>(true);

    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    return (
        <div className="flex lg:block">
            <div className="shrink-0 flex w-[50%] px-8 4xl:w-[50rem] 2xl:w-[50%] lg:hidden">
                <Slider items={itemsEntry} />
            </div>
            <div className="relative flex flex-col grow p-8 lg:min-h-screen lg:min-h-screen-ios md:px-5">
                <button
                    className="btn-stroke relative z-2 ml-auto -mb-12"
                    onClick={() => setCreate(!create)}
                >
                    <span>{create ? "Sign in" : "New account"}</span>
                    <Icon name="entry" />
                </button>
                <div className="max-w-[25rem] m-auto py-14 md:pt-20 md:pb-0">
                    <div className="mb-8 text-center text-h3">
                        {create ? "Welcome to Synapse" : "Sign in"}
                    </div>
                    <div className="">
                        <button className="btn border-2 border-n-3 w-full rounded-xl mb-3 hover:bg-n-3 dark:border-n-5 dark:hover:bg-n-5">
                            <Image
                                src="/images/google.svg"
                                width={24}
                                height={24}
                                alt=""
                            />
                            <span className="ml-4">Continue with Google</span>
                        </button>
                        <button className="btn border-2 border-n-3 w-full rounded-xl hover:bg-n-3 dark:border-n-5 dark:hover:bg-n-5">
                            <Image
                                src={
                                    isDarkMode
                                        ? "/images/apple-light.svg"
                                        : "/images/apple-dark.svg"
                                }
                                width={24}
                                height={24}
                                alt=""
                            />
                            <span className="ml-4">Continue with Apple</span>
                        </button>
                    </div>
                    <div className="flex items-center my-5">
                        <span className="grow h-0.25 bg-n-3 dark:bg-n-5"></span>
                        <span className="shrink-0 mx-6 text-small text-n-4">
                            Or
                        </span>
                        <span className="grow h-0.25 bg-n-3 dark:bg-n-5"></span>
                    </div>
                    {create ? <Create /> : <SignIn />}
                </div>
            </div>
        </div>
    );
};

export default EntryPage;

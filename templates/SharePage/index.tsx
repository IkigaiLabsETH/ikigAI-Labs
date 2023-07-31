"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Audio from "@/components/Audio";

const SharePage = () => {
    const isRegistration = false;

    return (
        <div className="dark:bg-n-6 md:pb-8">
            <div className="flex justify-between items-center pl-2 pr-4 py-2">
                <Logo />
                <Link
                    className="btn-stroke btn-medium"
                    href={isRegistration ? "/new-chat" : "/entry"}
                >
                    {isRegistration ? "New chat" : "Join now"}
                </Link>
            </div>
            <div className="relative h-64 max-h-950:h-48 max-h-850:h-44 bg-n-2 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg-4.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="-mt-[4.8rem] px-10 pb-10 md:mt-0 md:px-0 md:pb-0">
                <div className="relative max-w-[77rem] mx-auto rounded-[1.25rem] bg-n-1 border border-n-3 md:border-0 md:rounded-none dark:border-n-5 dark:bg-n-6">
                    <div className="flex items-center px-7 py-4.5 md:px-5">
                        <div
                            className="flex justify-center items-center shrink-0 w-10 h-10 mr-5 rounded-xl"
                            style={{ backgroundColor: "#BE87FF" }}
                        >
                            <Icon
                                className="w-6 h-6 fill-n-1"
                                name="chart-breakout-square"
                            />
                        </div>
                        <div className="w-[calc(100%-2.5rem)] truncate text-h6">
                            Text-to-speech voice
                        </div>
                    </div>
                    <div className="">
                        <Question
                            content={
                                <>
                                    Text-to-speech voice: <br></br> <br></br>
                                    Synapse is an AI chat app UI Kit designed by
                                    the UI8 Team. It boasts a stunning design
                                    and powerful features, making it an ideal
                                    choice for developers looking to build chat
                                    applications with ease. With Synapse, you
                                    can quickly create chat interfaces that are
                                    both intuitive and visually appealing,
                                    thanks to its comprehensive set of
                                    pre-designed components and customizable
                                    elements. Whether you&apos;re building a
                                    messaging app, a customer support platform,
                                    or any other kind of chat-based application,
                                    Synapse has everything you need to get
                                    started.
                                </>
                            }
                        />
                        <Answer
                            content="Based on the content you provided, I have already applied a confident tone to the audio. Feel free to select the audio and use the actions in the right sidebar to make adjustments."
                            message="Generating answers for you…"
                            loading="Intergrading male voice and adjusting the tone"
                        >
                            <Audio />
                        </Answer>
                    </div>
                </div>
                {!isRegistration && (
                    <Link
                        className="flex btn-gradient w-full max-w-[77rem] mx-auto mt-10 md:m-5 md:mb-0 md:w-[calc(100%-2.5rem)]"
                        href="/entry"
                    >
                        Try Synapse today
                    </Link>
                )}
            </div>
        </div>
    );
};

export default SharePage;

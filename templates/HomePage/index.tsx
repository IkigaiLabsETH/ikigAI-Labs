"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Users from "@/components/Users";
import Search from "./Search";
import Table from "./Table";

import { chatRequest } from "@/mocks/chats";

const HomePage = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout>
            <div className="relative shrink-0 w-full h-[25rem] max-h-950:h-[20rem] max-h-850:h-[14rem] bg-n-2 lg:h-52 md:h-44 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative max-w-[72rem] w-full -mt-16 mx-auto px-12 pb-16 2xl:pb-12 xl:px-8 xl:pb-8 md:-mt-10 md:px-5 md:pb-5">
                <div className="flex justify-center items-center w-32 h-32 mb-8 gradient rounded-[1.75rem] shadow-[0_0_0_0.5rem_rgba(252,253,254,.9)] md:w-20 md:h-20 md:rounded-2xl md:ml-2 dark:shadow-[0_0_0_0.5rem_rgba(41,45,50,.9)]">
                    <Image
                        className="w-16 md:w-10"
                        src="/images/logo-1.svg"
                        width={64}
                        height={64}
                        alt=""
                    />
                </div>
                <div className="flex justify-between mb-8 md:block">
                    <div className="text-h2 md:mb-5 md:text-h4">ChatGPT 4</div>
                    <Link className="btn-purple mt-1" href="/new-chat">
                        <span>Create new chat</span>
                        <Icon name="plus" />
                    </Link>
                </div>
                <div className="flex mb-13 lg:relative lg:block lg:pb-20">
                    <div className="grow">
                        <div className="mb-5 text-base-2 text-n-4">
                            OpenAI has created a model that surpasses ChatGPT in
                            several areas, like math and physics equations,
                            creative writing, and other difficult tasks.
                        </div>
                        <Users
                            className="mb-8"
                            items={[
                                "/images/avatar-1.jpg",
                                "/images/avatar-2.jpg",
                                "/images/avatar-3.jpg",
                                "/images/avatar-4.jpg",
                                "/images/avatar-5.jpg",
                                "/images/avatar-6.jpg",
                            ]}
                            addUser
                        />
                        <Search
                            className="lg:absolute lg:left-0 lg:right-0 lg:bottom-0"
                            value={search}
                            onChange={(e: any) => setSearch(e.target.value)}
                            onSubmit={() => console.log("Submit")}
                        />
                    </div>
                    <div className="shrink-0 w-[18.5rem] ml-20 xl:ml-16 lg:w-full lg:ml-0 lg:mt-9">
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-n-3 dark:border-n-5">
                            <div className="text-base-2 text-n-4">Version</div>
                            <div className="px-2 rounded-md bg-n-7 text-base-2 font-semibold text-n-1">
                                1.5.2
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-n-3 dark:border-n-5">
                            <div className="text-base-2 text-n-4">
                                Developers
                            </div>
                            <div className="flex items-center text-base-2 font-semibold">
                                OpenAI
                                <div className="ml-3 p-1 rounded-md bg-n-7 text-0">
                                    <Image
                                        className="w-3"
                                        src="/images/logo-1.svg"
                                        width={12}
                                        height={12}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-base-2 text-n-4">
                                Extensions
                            </div>
                            <div className="flex items-center text-base-2 font-semibold">
                                Yes
                                <Icon
                                    className="ml-3 fill-color-3"
                                    name="check-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Table items={chatRequest} />
            </div>
        </Layout>
    );
};

export default HomePage;

"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Tabs from "@/components/Tabs";
import Package from "./Package";
import Faq from "./Faq";

import { price } from "@/mocks/price";

const CreateChatBotPage = () => {
    const [plan, setPan] = useState<"monthly" | "anualy">("monthly");

    const typeTasks = [
        {
            title: "Monthly",
            active: plan === "monthly",
            onClick: () => setPan("monthly"),
        },
        {
            title: "Anualy (-20%)",
            active: plan === "anualy",
            onClick: () => setPan("anualy"),
        },
    ];

    return (
        <Layout>
            <div className="relative shrink-0 w-full h-64 max-h-850:h-56 bg-n-2 md:h-40 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg-8.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative -mt-[4.75rem] px-10 md:mt-0 md:px-0">
                <div className="py-20 px-12 border border-n-3 rounded-[1.25rem] bg-n-1 xl:px-10 xl:py-12 md:border-0 md:rounded-none md:px-5 md:py-8 dark:bg-n-6 dark:border-n-5">
                    <div className="max-w-[76.5rem] mx-auto">
                        <div className="mb-15 text-center xl:mb-8">
                            <div className="mb-2 text-h1 xl:text-h2 lg:text-h3">
                                Unlock the power of AI
                            </div>
                            <div className="mb-15 text-body-1 text-n-4 xl:mb-8">
                                Meet the synapse of our ai chat app
                                revolutionizing conversations
                            </div>
                            <Tabs
                                className="max-w-[18rem] mx-auto"
                                items={typeTasks}
                                medium
                            />
                        </div>
                        <div className="pt-8 pb-28 lg:flex lg:overflow-auto lg:scroll-smooth lg:scrollbar-none lg:-mx-10 lg:before:w-10 lg:before:shrink-0 lg:after:w-10 lg:after:shrink-0 md:-mx-5 md:before:w-5 md:after:w-5">
                            <div className="flex border border-n-3 rounded-3xl dark:border-n-5">
                                {price.map((x) => (
                                    <Package item={x} plan={plan} key={x.id} />
                                ))}
                            </div>
                        </div>
                        <Faq />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateChatBotPage;

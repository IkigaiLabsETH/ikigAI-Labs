// we set up the OpenAI API client and implemented the necessary methods (getChats, sendChatRequest). 
// we will need to replace OpenAIAPI with our actual OpenAI API client implementation.

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Users from "@/components/Users";
import Search from "./Search";
import Table from "./Table";
import axios from "axios";
import { fetchOpenAIResponse } from "app/api/openai/openai";

// import { chatRequest } from "@/mocks/chats";
// import { OpenAIAPI } from "app/api/openai";

// const openai = new sendChatRequest();

// const handleSearchSubmit = async () => {
//    try {
//        const response = await openai.sendChatRequest(search);
//        // Handle the response
//        console.log("Chat response:", response);
//    } catch (error) {
//        console.error("Error sending chat request:", error);
//    }
// };

const HomePage = () => {
    const [replicateData, setReplicateData] = useState<any>(null);
    const [openAIData, setOpenAIData] = useState<any>(null);
    // const [chats, setChats] = useState([]);
    const [search, setSearch] = useState<string>("");

// Make API calls to the Replicate and OpenAI APIs
useEffect(() => {
    // Define the user input or query to be sent to the APIs
    const userInput = "User input or query goes here"; // Replace this with the actual user input or query

    // Make the API call to the Replicate API
    axios
      .post("app/api/route", {
        query: userInput,
      })
      .then((response) => {
        // Handle the response data from the Replicate API
        setReplicateData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Replicate API:", error);
      });

    // Make the API call to the OpenAI API
    axios
      .post("app/api/route", {
        query: userInput,
      })
      .then((response) => {
        // Handle the response data from the OpenAI API
        setOpenAIData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from OpenAI API:", error);
      });
  }, []);
      

    return (
        <Layout>
            <div className="relative shrink-0 w-full h-[25rem] max-h-950:h-[20rem] max-h-850:h-[14rem] bg-n-2 lg:h-52 md:h-44 dark:bg-n-7">
                <Image
                    className="object-cover"
                    src="/images/bg.jpg"
                    fill
                    alt="ikigAI Labs XYZ background"
                />
            </div>
            <div className="relative max-w-[72rem] w-full -mt-16 mx-auto px-12 pb-16 2xl:pb-12 xl:px-8 xl:pb-8 md:-mt-10 md:px-5 md:pb-5">
                <div className="flex justify-center items-center w-32 h-32 mb-8 gradient rounded-[1.75rem] shadow-[0_0_0_0.5rem_rgba(252,253,254,.9)] md:w-20 md:h-20 md:rounded-2xl md:ml-2 dark:shadow-[0_0_0_0.5rem_rgba(41,45,50,.9)]">
                    <Image
                        className="w-16 md:w-10"
                        src="/images/logo-1.svg"
                        width={64}
                        height={64}
                        alt="ikigAI Labs XYZ logo"
                    />
                </div>
                <div className="flex justify-between mb-8 md:block">
                    <div className="text-h2 md:mb-5 md:text-h4">ChatGPT 4.20</div>
                    <Link className="btn-purple mt-1" href="/new-chat">
                        <span>Create new chat</span>
                        <Icon name="plus" />
                    </Link>
                </div>
                <div className="flex mb-13 lg:relative lg:block lg:pb-20">
                    <div className="grow">
                        <div className="mb-5 text-base-2 text-n-4">
                            ikigAI assistant is training a bespoke ML model that surpasses any generic ChatGPT in
                            several areas, like creative coding, design,
                            content, and above all, context. Constructing AI as an art collective.
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
                            value={search}
                            onChange={(e: any) => setSearch(e.target.value)}
                            onSubmit={(e: React.FormEvent) => {
                                e.preventDefault();
                                // fetchFromOpenAI();
                            }}
                        />



                    </div>
                    <div className="shrink-0 w-[18.5rem] ml-20 xl:ml-16 lg:w-full lg:ml-0 lg:mt-9">
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-n-3 dark:border-n-5">
                            <div className="text-base-2 text-n-4">Version</div>
                            <div className="px-2 rounded-md bg-n-7 text-base-2 font-semibold text-n-1">
                                1.6.9
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
                <Table items={search} />
                {/* Display the output from the Replicate API */}
                {replicateData && <div>{replicateData.output}</div>}
                {/* Display the output from the OpenAI API */}
                {openAIData && <div>{openAIData.output}</div>}
            </div>
        </Layout>
    );
};

export default HomePage;
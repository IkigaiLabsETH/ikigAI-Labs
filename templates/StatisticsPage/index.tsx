"use client";

import { useState } from 'react';
import { Statistics } from '@/interfaces/statistics';

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import PreviewPost from "@/components/PreviewPost";
import Answer from "@/components/Answer";
import StatisticsItem from "@/components/StatisticsItem";
import Chart from "@/components/Chart";

const StatisticsPage = () => {
    const [statisticsData, setStatisticsData] = useState<Statistics[]>([
        {
            className: "flex-1 p-10 gradient-1 rounded-[1.25rem] 2xl:p-6 lg:px-4 md:px-8 md:py-5",
            image: "/images/eye.svg",
            title: "Valuation",
            value: "2.7M"
        },
        // ... more data
    ]);

    return (
        <Layout>
            <Chat background="/images/bg-4.jpg">
                <Question
                    content={
                        <>
                            Hey, I'll give you a link to my portfolio.
                            Your mission is to provide me with the stats of this
                            address:&nbsp;
                            <a
                                className="font-semibold text-primary-3 break-all"
                                href="https://etherscan.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://etherscan.io
                            </a>
                        </>
                    }
                >
                    <PreviewPost
                        title="Etherscan Data"
                        content="Etherscan Porfolio Overview"
                        image="/images/dribbble-post-1.jpg"
                    />
                </Question>
                <Answer
                    content="These are the statistics for that portfolio."
                    message="Generating answers for you…"
                >
                    <div className="flex space-x-6 2xl:space-x-4 md:block md:space-x-0 md:space-y-3">
                        {statisticsData.map((item, index) => (
                            <StatisticsItem
                                key={index}
                                className={item.className}
                                image={item.image}
                                title={item.title}
                                value={item.value}
                            />
                        ))}
                    </div>
                    <Chart className="-ml-7 py-6 md:py-3" items={statisticsData} />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default StatisticsPage;

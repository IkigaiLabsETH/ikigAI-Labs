import { useState } from "react";
import Select from "@/components/Select";
import StatisticsItem from "@/components/StatisticsItem";
import Chart from "@/components/Chart";

import { statistics } from "@/mocks/statistics";

const durations = [
    {
        id: "0",
        title: "Last 30 days",
    },
    {
        id: "1",
        title: "Last 20 days",
    },
    {
        id: "2",
        title: "Last 10 days",
    },
];

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
    const [duration, setDuration] = useState<any>(durations[0]);

    return (
        <>
            <div className="flex items-center mb-12 2xl:block md:-mx-5 md:mb-5 md:px-5 md:pb-5 md:border-b md:border-n-3 dark:md:border-n-5">
                <div className="mr-auto text-h3 2xl:mr-0 2xl:mb-4 md:text-h5">
                    Dashboard
                </div>
                <div className="flex items-center">
                    <Select
                        className="min-w-[11rem] mr-3"
                        items={durations}
                        value={duration}
                        onChange={setDuration}
                    />
                    <button className="btn-stroke shrink-0">
                        Download CSV
                    </button>
                </div>
            </div>
            <div className="flex mb-12 space-x-4 md:block md:mb-8 md:space-x-0 md:space-y-3">
                <StatisticsItem
                    className="flex-1 p-10 gradient-1 rounded-[1.25rem] md:px-8 md:py-5"
                    image="/images/eye.svg"
                    title="Conversations"
                    value="3.8M"
                />
                <StatisticsItem
                    className="flex-1 p-10 gradient-3 rounded-[1.25rem] md:px-8 md:py-5"
                    image="/images/annotation-check.svg"
                    title="Clients"
                    value="18,000"
                />
            </div>
            <Chart className="-ml-7" items={statistics} />
        </>
    );
};

export default Dashboard;

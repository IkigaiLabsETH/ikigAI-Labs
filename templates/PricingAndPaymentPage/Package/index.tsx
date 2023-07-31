import { useState } from "react";
import Icon from "@/components/Icon";
import Checkout from "../Checkout";

type PackageProps = {
    item: any;
    plan: string;
};

const Package = ({ item, plan }: PackageProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div
                className={`relative flex flex-col w-1/3 p-8 border-r border-n-3 last:border-0 xl:px-6 lg:shrink-0 lg:w-[24rem] md:w-[18rem] dark:border-n-5 ${
                    item.popular
                        ? "before:absolute before:-top-8 before:-bottom-8 before:-left-0.5 before:-right-0.5 before:bg-n-1 before:border before:border-n-3 before:rounded-3xl before:shadow-2 dark:before:bg-n-6 dark:before:border-n-5"
                        : ""
                }`}
            >
                <div className="relative flex flex-col grow z-2">
                    <div className="flex items-center mb-1">
                        <div
                            className={`text-h4 xl:text-h5 lg:text-h4 ${
                                item.id === "standard"
                                    ? "text-color-3"
                                    : item.id === "pro"
                                    ? "text-primary-3"
                                    : "text-n-7 dark:text-n-1"
                            }`}
                        >
                            {item.title}
                        </div>
                        {item.popular && (
                            <div className="ml-auto px-3 bg-color-3 rounded text-small text-n-1">
                                Popular
                            </div>
                        )}
                    </div>
                    <div className="mb-6 text-base-1">{item.description}</div>
                    <div className="mb-2">
                        <span className="relative -top-3.5 mr-1 text-h4 text-n-4">
                            $
                        </span>
                        <span className="text-h2">
                            {plan === "monthly"
                                ? item.priceMonth
                                : item.priceYear}
                        </span>
                        <span className="ml-2 text-h4 text-n-4">/ mo</span>
                    </div>
                    <div className="text-base-2 text-n-4">{item.note}</div>
                    <div className="grow mt-6 mb-8 pt-6 border-t border-n-3 dark:border-n-5">
                        {item.details.map((x: any, index: number) => (
                            <div
                                className="flex mb-4 text-base-2 last:mb-0"
                                key={index}
                            >
                                <Icon
                                    className={`shrink-0 w-6 h-6 mr-3 ${
                                        x.disabled ? "fill-n-4/50" : "fill-n-4"
                                    }`}
                                    name="check-circle"
                                />
                                {x.title}
                            </div>
                        ))}
                    </div>
                    <button
                        className={`${
                            item.popular ? "btn-gradient" : "btn-stroke"
                        } ${
                            item.current ? "opacity-70 pointer-events-none" : ""
                        } w-full`}
                        onClick={() => setVisibleModal(true)}
                    >
                        {item.current ? "Current plan" : "Get started"}
                    </button>
                </div>
            </div>
            <Checkout
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            />
        </>
    );
};

export default Package;

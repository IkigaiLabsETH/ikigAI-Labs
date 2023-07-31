import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import { useState } from "react";

type UpgradeProps = {};

const Upgrade = ({}: UpgradeProps) => {
    const [hidden, setHidden] = useState<boolean>(false);

    return (
        <div className={`mt-12 text-center ${hidden ? "hidden" : ""}`}>
            <div className="relative py-8 px-4 pb-4 bg-primary-6 rounded-3xl">
                <button
                    className="group absolute top-4 right-4 w-10 h-10 rounded-ful bg-n-1 rounded-full text-0 dark:bg-n-6"
                    onClick={() => setHidden(true)}
                >
                    <Icon
                        className="fill-n-5 transition-colors group-hover:fill-color-5 dark:fill-n-3"
                        name="close"
                    />
                </button>
                <div className="max-w-[10rem] mx-auto mb-8">
                    <Image
                        className="w-full"
                        src="/images/empty-chat.png"
                        width={160}
                        height={160}
                        alt=""
                    />
                </div>
                <Link
                    className="btn-blue-dark w-full text-base-1 font-bold"
                    href="/pricing-and-payment"
                >
                    <span>Upgrade to Pro</span>
                    <Icon className="w-6 h-6" name="stars" />
                </Link>
            </div>
            <Link
                className="inline-flex mt-3 text-base-2 font-semibold text-n-5 transition-colors hover:text-primary-3 dark:text-n-3 dark:hover:text-primary-4"
                href="/entry"
            >
                Follow us on
            </Link>
        </div>
    );
};

export default Upgrade;

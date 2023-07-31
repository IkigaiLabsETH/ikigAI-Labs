import Icon from "@/components/Icon";
import Device from "./Device";

const devices = [
    {
        id: "0",
        title: "Safari on Macbook Pro",
        image: "/images/safari.svg",
        address: "222.225.225.222",
        date: "Signed in Nov 17, 2023",
    },
    {
        id: "1",
        title: "Safari on Mac Pro",
        image: "/images/safari.svg",
        address: "222.225.225.222",
        date: "Signed in Nov 17, 2023",
    },
    {
        id: "2",
        title: "Chrome on Macbook Pro",
        image: "/images/chrome.svg",
        address: "222.225.225.222",
        date: "Signed in Nov 17, 2023",
    },
    {
        id: "3",
        title: "Chrome on iPhone",
        image: "/images/chrome.svg",
        address: "222.225.225.222",
        date: "Signed in Nov 17, 2023",
    },
];

type SessionsProps = {};

const Sessions = ({}: SessionsProps) => (
    <>
        <div className="mb-12 pb-12 border-b border-n-3 lg:mb-8 lg:pb-8 dark:border-n-5">
            <div className="mb-2 text-h3">Your sessions</div>
            <div className="text-base-1 text-n-4">
                Revoke any sessions that you do not recognize from the list of
                devices that have logged into your account.
            </div>
        </div>
        <div className="flex items-center mb-12 p-3 rounded-lg bg-color-2/10 text-base-1 font-semibold lg:mb-8">
            <Icon
                className="shrink-0 w-6 h-6 mr-7 dark:fill-n-1"
                name="info-circle-thin"
            />
            You logged in to two devices using two different web browsers.
        </div>
        <div className="">
            {devices.map((device) => (
                <Device item={device} key={device.id} />
            ))}
        </div>
        <button className="btn-gradient mt-12 lg:mt-8 md:w-full md:mt-4">
            <span>Sign out all devices</span>
            <Icon name="logout" />
        </button>
    </>
);

export default Sessions;

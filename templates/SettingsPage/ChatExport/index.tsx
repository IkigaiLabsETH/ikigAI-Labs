import { useState } from "react";
import Switch from "@/components/Switch";
import Icon from "@/components/Icon";
import Select from "@/components/Select";
import Image from "@/components/Image";

const formats = [
    {
        id: "0",
        title: "Google docs",
    },
    {
        id: "1",
        title: "PDF",
    },
    {
        id: "2",
        title: "JPG",
    },
];

type ChatExportProps = {};

const ChatExport = ({}: ChatExportProps) => {
    const [exportChat, setExportChat] = useState<boolean>(false);
    const [format, setFormat] = useState<any>(formats[0]);

    const [checkboxes, setCheckboxes] = useState([
        {
            id: "0",
            title: "ChatGPT 4",
            conversations: 256,
            image: "/images/logo-1.svg",
            color: "#735FFA",
            isChecked: false,
        },
        {
            id: "1",
            title: "ChatGPT 3",
            conversations: 128,
            image: "/images/logo-1.svg",
            color: "#4BAB71",
            isChecked: true,
        },
        {
            id: "2",
            title: "Coverso",
            conversations: 64,
            image: "/images/logo-1.svg",
            color: "#FF66C2",
            isChecked: true,
        },
        {
            id: "3",
            title: "Botman",
            conversations: 32,
            image: "/images/logo-1.svg",
            color: "#0C018C",
            isChecked: false,
        },
        {
            id: "4",
            title: "Talky",
            conversations: 80,
            image: "/images/logo-4.svg",
            color: "#FFC224",
            isChecked: true,
        },
        {
            id: "5",
            title: "UI8 Marketplace (Custom)",
            conversations: 512,
            image: "/images/logo-1.svg",
            color: "#FF6C3E",
            isChecked: false,
        },
        {
            id: "6",
            title: "ChatGPT 4.1",
            conversations: 1024,
            image: "/images/logo-1.svg",
            color: "#735FFA",
            isChecked: false,
        },
    ]);

    const handleCheckboxChange = (checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const checkboxIndex = updatedCheckboxes.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[checkboxIndex].isChecked =
            !updatedCheckboxes[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleNotificationsChange = (value: boolean) => {
        setExportChat(value);
        const updatedCheckboxes = [...checkboxes];
        for (let checkbox of checkboxes) {
            checkbox.isChecked = value;
        }
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <div className="flex justify-between items-center mb-12 pb-12 border-b border-n-3 lg:mb-8 lg:pb-8 dark:border-n-5">
                <div className="text-h3">Chat export</div>
                <Switch
                    value={exportChat}
                    setValue={handleNotificationsChange}
                />
            </div>
            <div className="mb-12 lg:mb-8">
                {checkboxes.map((checkbox) => (
                    <label
                        className={`flex items-center px-4 py-3 mb-4 rounded-full transition-colors cursor-pointer hover:bg-n-2 last:mb-0 dark:hover:bg-n-7 ${
                            checkbox.isChecked ? "bg-n-2 dark:bg-n-7" : ""
                        }`}
                        key={checkbox.id}
                    >
                        <input
                            className="absolute top-0 left-0 opacity-0 invisible"
                            type="checkbox"
                            checked={checkbox.isChecked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                        <div
                            className="flex justify-center items-center shrink-0 w-12 h-12 mr-4 rounded-full"
                            style={{ backgroundColor: checkbox.color }}
                        >
                            <Image
                                className="w-5"
                                src={checkbox.image}
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                        <div className="grow">
                            <div className="mb-1 text-base-2 font-semibold">
                                {checkbox.title}
                            </div>
                            <div
                                className={`inline-flex px-2 py-0.5 rounded text-smaller font-semibold transition-colors ${
                                    checkbox.isChecked
                                        ? "bg-n-7 text-n-1 dark:bg-n-2 dark:text-n-6"
                                        : "bg-n-3 text-n-5 dark:bg-n-5 dark:text-n-3"
                                }`}
                            >
                                {checkbox.conversations} conversations
                            </div>
                        </div>
                        <Icon
                            className={`shrink-0 w-6 h-6 ml-auto fill-n-7 opacity-0 transition-opacity dark:fill-n-2 ${
                                checkbox.isChecked && "opacity-100"
                            }`}
                            name="check"
                        />
                    </label>
                ))}
            </div>
            <div className="inline-flex px-6 bg-gradient-to-b from-[#9A77FF] to-[#735FFA] rounded-full">
                <button className="mr-3 text-base-1 font-bold text-n-1">
                    Export
                </button>
                <div className="self-center w-0.5 h-3 bg-primary-5"></div>
                <Select
                    classButton="h-12 pr-0 border-0 rounded-l-none rounded-r-full bg-transparent text-base-2 text-n-1 font-bold"
                    classArrow="fill-n-1"
                    classOptions="right-0 min-w-[10rem]"
                    items={formats}
                    value={format}
                    onChange={setFormat}
                    up
                />
            </div>
        </form>
    );
};

export default ChatExport;

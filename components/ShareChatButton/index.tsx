import { useState } from "react";
import { toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import Icon from "@/components/Icon";
import Notify from "@/components/Notify";

type ShareChatButtonProps = {};

const ShareChatButton = ({}: ShareChatButtonProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleClick = () => {
        setVisible(!visible);
        toast((t) => (
            <Notify className="block w-[23.5rem] p-6 rounded-3xl md:w-[21.5rem]">
                <div className="flex items-center mb-6 text-base-1 font-semibold">
                    <Icon className="w-6 h-6 mr-2 fill-n-1" name="check" />2
                    messages selected
                </div>
                <div className="flex">
                    <CopyToClipboard text="Link share page">
                        <button className="btn-gradient btn-medium grow mr-4">
                            <span>Copy share link</span>
                            <Icon name="copy" />
                        </button>
                    </CopyToClipboard>
                    <Link
                        className="btn-light btn-medium btn-square rounded-full"
                        href="/share"
                        onClick={() => toast.dismiss(t.id)}
                        target="_blank"
                    >
                        <Icon name="share" />
                    </Link>
                </div>
            </Notify>
        ));
    };

    return (
        <button
            className={`absolute z-1 inset-0 border-2 rounded-full transition-colors hover:!border-color-3 ${
                visible
                    ? "bg-color-3 border-color-3"
                    : "bg-n-1 border-n-3 dark:border-n-5 dark:bg-n-6"
            }`}
            onClick={handleClick}
        >
            <Icon
                className={`w-6 h-6 fill-n-1 ${
                    visible ? "fill-n-1" : "fill-transparent"
                }`}
                name="check"
            />
        </button>
    );
};

export default ShareChatButton;

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "@/components/Icon";

type ButtonCopyProps = {
    text: any;
};

const ButtonCopy = ({ text }: ButtonCopyProps) => {
    const [copied, setCopied] = useState<boolean>(false);

    const onCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return copied ? (
        <div className="flex items-center px-5 text-base-2 font-semibold text-n-1">
            <Icon className="w-4 h-4 mr-1 fill-n-1" name="check" />
            Copied!
        </div>
    ) : (
        <CopyToClipboard text={text} onCopy={onCopy}>
            <button className="group flex items-center h-12 ml-auto px-6 text-base-2 font-semibold text-n-1 transition-colors hover:text-primary-4">
                <Icon
                    className="w-4 h-4 mr-2 fill-n-3 transition-colors group-hover:fill-primary-4"
                    name="copy-fill"
                />
                <span>Copy</span>
            </button>
        </CopyToClipboard>
    );
};

export default ButtonCopy;

import { useContext } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import ShareChatButton from "@/components/ShareChatButton";
import Actions from "./Actions";

import { ShareChatContext } from "@/components/Chat";

type AnswerProps = {
    content?: any;
    message: string;
    loading?: string;
    children: React.ReactNode;
    result?: string;
    hideActions?: boolean;
};

const Answer = ({
    content,
    message,
    loading,
    children,
    result,
    hideActions,
}: AnswerProps) => {
    const { shareVisible }: any = useContext(ShareChatContext);

    return (
        <div className="p-8 border-t border-n-3 md:px-5 dark:border-n-5">
            <div className="flex items-center mb-4 text-body-2 text-n-4">
                <div className="flex justify-center items-center w-8 h-8 mr-6 md:mr-4">
                    <Icon className="w-6 h-6 fill-color-3" name="check" />
                </div>
                Scanning the data...
            </div>
            <div className="flex items-center mb-4 text-body-2 text-n-4">
                <div className="flex justify-center items-center w-8 h-8 mr-6 md:mr-4">
                    <Icon className="w-6 h-6 fill-primary-4" name="stars-two" />
                </div>
                {message}
            </div>
            {loading && (
                <div className="flex items-center mb-4 text-body-2 text-n-4">
                    <div className="flex justify-center items-center w-8 h-8 mr-6 md:mr-4">
                        <Loading />
                    </div>
                    {loading}
                </div>
            )}
            <div className="flex">
                <div className="relative shrink-0 w-8 h-8 p-1.5 bg-n-7 rounded-full">
                    <Image
                        className="w-full opacity-100"
                        src="/images/logo-1.svg"
                        width={20}
                        height={20}
                        alt="Avatar"
                    />
                    {shareVisible && <ShareChatButton />}
                </div>
                <div className="w-[calc(100%-2rem)] pl-6 space-y-6 md:pl-4">
                    {content && (
                        <div className="pt-1 text-body-2 text-n-6 dark:text-n-1">
                            {content}
                        </div>
                    )}
                    {children}
                    {!hideActions && <Actions />}
                </div>
            </div>
            {result && (
                <div className="flex items-center mt-4 text-body-2 text-n-4">
                    <div className="flex justify-center items-center w-8 h-8 mr-6 md:mr-4">
                        <Icon className="w-6 h-6 fill-color-3" name="check" />
                    </div>
                    {result}
                </div>
            )}
        </div>
    );
};

export default Answer;

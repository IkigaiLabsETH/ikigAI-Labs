import { useContext } from "react";
import Image from "@/components/Image";
import ShareChatButton from "@/components/ShareChatButton";
import Files from "./Files";

import { ShareChatContext } from "@/components/Chat";

type QuestionProps = {
    content: any;
    image?: string;
    files?: any;
    children?: React.ReactNode;
};

const Question = ({ content, image, files, children }: QuestionProps) => {
    const { shareVisible }: any = useContext(ShareChatContext);

    return (
        <div className="flex p-8 border-t border-n-3 md:px-5 dark:border-n-5">
            <div className="relative shrink-0 w-8 h-8">
                <Image
                    className="object-cover rounded-full opacity-100"
                    src="/images/avatar.jpg"
                    fill
                    alt="Avatar"
                />
                {shareVisible && <ShareChatButton />}
            </div>
            <div className="w-[calc(100%-2rem)] pl-6 space-y-6 md:pl-4">
                <div className="pt-1 text-body-2 text-n-6 dark:text-n-1">
                    {content}
                </div>
                {image && (
                    <div className="relative max-w-[37.5rem] aspect-square">
                        <Image
                            className="rounded-2xl object-cover"
                            src={image}
                            fill
                            alt=""
                        />
                    </div>
                )}
                {files && <Files items={files} />}
                {children}
            </div>
        </div>
    );
};

export default Question;

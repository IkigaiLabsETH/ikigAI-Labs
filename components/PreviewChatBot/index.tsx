import { useState } from "react";
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Message from "@/components/Message";
import Item from "./Item";

type PreviewChatBotProps = {};

const PreviewChatBot = ({}: PreviewChatBotProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    return (
        <>
            <button
                className="btn-stroke md:h-10"
                onClick={() => setVisibleModal(true)}
            >
                Preview
            </button>
            <Modal
                classWrap="overflow-hidden"
                classButtonClose="top-4 right-4 bg-n-1 dark:bg-n-7"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <div className="h-64 p-4 bg-primary-3 md:h-44">
                    <div className="inline-flex items-center px-2 py-0.5 rounded-lg bg-n-6 text-small font-semibold text-n-1">
                        <Icon className="w-3 h-3 mr-2 fill-n-1" name="eye" />
                        Preview mode
                    </div>
                </div>
                <div className="relative -mt-10 mb-16 px-10 md:px-5 md:mb-10">
                    <div className="flex justify-center items-center shrink-0 w-20 h-20 mb-6 bg-n-7 rounded-[1.25rem]">
                        <Image
                            className="w-5"
                            src="/images/logo-2.svg"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                    <div className="mb-6 text-h4">UI8 Marketplace</div>
                    <div className="h-0.25 mb-8 -mx-10 bg-n-3 md:-mx-5 md:mb-5 dark:bg-n-5"></div>
                    <div className="flex">
                        <div className="relative shrink-0 w-8 h-8 p-1.5 bg-n-7 rounded-full">
                            <Image
                                className="w-full"
                                src="/images/logo-1.svg"
                                width={20}
                                height={20}
                                alt="Avatar"
                            />
                        </div>
                        <div className="w-[calc(100%-2rem)] pl-6">
                            <div className="mb-6 text-n-6 dark:text-n-1">
                                Hello, I’m Synapse a large language model
                                designed to answer questions and provide
                                information on a wide range of topics. How can I
                                assist you today?
                            </div>
                            <div className="mb-6 text-n-6 font-semibold dark:text-n-1">
                                Here is a few of what I can do for you
                            </div>
                            <div className="flex overflow-auto scroll-smooth scrollbar-none -mr-10 after:shrink-0 after:w-10 md:-mr-5 md:after:w-5">
                                <Item
                                    className="shrink-0 w-60 mr-6 p-6 rounded-2xl gradient-3 md:mr-3"
                                    title="Video maker"
                                    status="Pro only"
                                    image="/images/video-recorder.svg"
                                />
                                <Item
                                    className="shrink-0 w-60 mr-6 p-6 rounded-2xl gradient-2 md:mr-3"
                                    title="Question answering"
                                    status="New"
                                    image="/images/message-question-circle.svg"
                                />
                                <Item
                                    className="shrink-0 w-60 p-6 rounded-2xl gradient-1"
                                    title="Photo generator"
                                    status="New"
                                    image="/images/image.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Message
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    hideButtonAdd
                />
            </Modal>
        </>
    );
};

export default PreviewChatBot;

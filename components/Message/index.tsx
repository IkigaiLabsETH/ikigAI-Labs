import { ChangeEventHandler } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import AddFile from "./AddFile";
import Files from "./Files";

type MessageProps = {
    className?: string;
    value: any;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    generationMessage?: boolean;
    image?: string;
    files?: any;
    hideButtonAdd?: boolean;
};

const Message = ({
    className,
    value,
    onChange,
    placeholder,
    generationMessage,
    image,
    files,
    hideButtonAdd,
}: MessageProps) => {
    return (
        <div
            className={twMerge(
                `relative shrink-0 z-5 max-w-[66.5rem] w-full mx-auto px-10 pb-8 before:absolute before:left-0 before:right-0 before:bottom-full before:h-8 before:bg-gradient-to-b before:to-n-1 before:from-n-1/0 before:pointer-events-none md:px-5 md:pb-5 md:before:h-6 dark:before:to-n-6 dark:before:from-n-6/0 ${
                    className || ""
                }`
            )}
        >
            <div className="relative z-2 rounded-xl bg-gradient-to-r from-[#72BBFF] to-[#C390FF] before:absolute before:inset-0.25 before:bg-n-1 before:rounded-[0.6875rem] dark:before:bg-n-6">
                {(image || files) && <Files image={image} files={files} />}
                <div
                    className={`relative flex items-center min-h-[4rem] pl-16 text-0 md:pl-15 ${
                        generationMessage
                            ? "pr-4"
                            : hideButtonAdd
                            ? "pr-14"
                            : "pr-32 md:pr-24"
                    }`}
                >
                    <div
                        className="absolute left-4 bottom-4 flex justify-center items-center w-8 h-8 bg-n-7 rounded-[0.625rem]"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Chat GPT-4"
                    >
                        <Image
                            className="w-5 opacity-100"
                            src={
                                generationMessage
                                    ? "/images/stars.svg"
                                    : "/images/logo-1.svg"
                            }
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                    <Tooltip id="my-tooltip" />
                    {generationMessage ? (
                        <>
                            <div className="grow text-body-2 font-semibold">
                                Generating
                                <span className="md:hidden">
                                    {" "}
                                    answers for you
                                </span>
                                …
                            </div>
                            <div className="shrink-0 ml-4 text-base-2 font-semibold lg:hidden">
                                So slow?{" "}
                                <Link
                                    className="text-primary-3 transition-colors hover:text-primary-4"
                                    href="/pricing-and-payment"
                                >
                                    Go Pro
                                </Link>
                            </div>
                            <button className="btn-gradient-stroke btn-medium rounded-xl shrink-0 ml-4">
                                <span>
                                    Stop
                                    <span className="md:hidden">
                                        {" "}
                                        generating
                                    </span>
                                </span>
                                <Icon className="w-6 h-6" name="close" />
                            </button>
                        </>
                    ) : (
                        <>
                            <TextareaAutosize
                                className="w-full h-12 py-3 bg-transparent text-body-2 text-n-7 outline-none resize-none placeholder:text-n-4 dark:text-n-1 dark:placeholder:text-n-4"
                                maxRows={5}
                                autoFocus
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder || "Ask me anything"}
                            />
                            {!hideButtonAdd && <AddFile />}
                            {value === "" ? (
                                <button className="group absolute right-4 bottom-3 w-10 h-10 outline-none md:right-2">
                                    <Icon
                                        className="w-6 h-6 fill-n-7 transition-colors group-hover:fill-primary-4 dark:fill-n-2"
                                        name="microphone"
                                    />
                                </button>
                            ) : (
                                <button className="btn-gradient-stroke btn-square btn-medium absolute right-4 bottom-3 md:right-2">
                                    <Icon
                                        className="w-6 h-6 fill-n-1"
                                        name="arrow-right"
                                    />
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
            {/* <div className="relative mt-2 px-5 py-1 bg-n-3 rounded-xl text-0 text-center dark:bg-n-7">
                <Image
                    className="max-w-full"
                    src="/images/audio-1.svg"
                    width={614}
                    height={39}
                    alt="Audio"
                />
            </div> */}
            {/* <div className="relative mt-2 px-4.5 py-1.5 rounded-xl border-2 border-color-5 text-base-2 text-color-5 md:py-1">
                Sorry, voice recognition failed. Please try again or contact
                support.
            </div> */}
        </div>
    );
};

export default Message;

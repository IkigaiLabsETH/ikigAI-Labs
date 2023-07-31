import { useState } from "react";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Image from "@/components/Image";
import Play from "@/components/Play";
import Details from "./Details";
import Format from "./Format";
import Share from "./Share";
import Upload from "./Upload";

type ExportProps = {
    className?: string;
    type?: string;
    details?: any;
    image?: any;
};

const Export = ({ className, type, details, image }: ExportProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <button
                className={`btn-dark w-full ${className || ""}`}
                onClick={() => setVisibleModal(true)}
            >
                <span>
                    Export{" "}
                    {type === "video"
                        ? "video"
                        : type === "audio"
                        ? "audio"
                        : "photo"}
                </span>
                <Icon name="download" />
            </button>
            <Modal
                classWrap={`p-6 pt-8 md:p-5 ${
                    type === "audio" ? "max-w-[20rem]" : ""
                }`}
                classButtonClose="top-6 right-6 md:top-3 md:right-3"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <div className="mb-7 text-h6 md:mb-5">
                    Exporting 1{" "}
                    {type === "video"
                        ? "video"
                        : type === "audio"
                        ? "audio"
                        : "photo"}
                </div>
                <div className="flex md:block">
                    {type !== "audio" && (
                        <div className="grow md:mb-5">
                            <div className="relative aspect-[1.48]">
                                <Image
                                    className="object-cover rounded-2xl"
                                    src={image}
                                    fill
                                    alt=""
                                />
                                {type === "video" && (
                                    <Play
                                        className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-10"
                                        classIcon="md:w-4 md:h-4"
                                    />
                                )}
                            </div>
                            <Details items={details} />
                        </div>
                    )}
                    <div
                        className={
                            type === "audio"
                                ? "w-full"
                                : "w-[13.5rem] ml-6 md:w-full md:ml-0"
                        }
                    >
                        <div className="">
                            <div className="px-3 py-1 text-small text-n-4">
                                Export
                            </div>
                            <Format type={type} />
                        </div>
                        <div className="mt-3 border-t border-n-3 dark:border-n-5">
                            <div className="px-3 py-1 text-small text-n-4">
                                Share
                            </div>
                            <Share />
                        </div>
                        <div className="mt-3 border-t border-n-3 dark:border-n-5">
                            <div className="px-3 py-1 text-small text-n-4">
                                Upload
                            </div>
                            <Upload />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Export;

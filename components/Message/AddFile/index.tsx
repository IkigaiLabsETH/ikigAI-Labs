import { useState } from "react";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Modal from "@/components/Modal";

type AddFileProps = {};

const AddFile = ({}: AddFileProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div className="absolute right-18 bottom-3 z-1 md:right-13">
                <button
                    className={`group relative w-10 h-10 outline-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#9A77FF] before:to-[#735FFA] before:border before:border-primary-2 before:rounded-xl before:shadow-[inset_0_0_0_0.0625rem_rgba(255,255,255,0.5)] before:opacity-0 before:transition-all ${
                        visible ? "before:!opacity-100" : ""
                    }`}
                    onClick={() => setVisible(!visible)}
                >
                    <Icon
                        className={`relative z-1 w-6 h-6 fill-n-7 transition-colors group-hover:fill-primary-4 dark:fill-n-2 ${
                            visible ? "!fill-n-1" : ""
                        }`}
                        name="add-circle-stroke"
                    />
                </button>
                <div
                    className={`absolute bottom-[calc(100%+1rem)] -right-4 w-80 p-6 bg-n-1 shadow-modal rounded-2xl invisible opacity-0 transition-opacity cursor-pointer md:-right-11 dark:bg-n-7 ${
                        visible ? "!visible !opacity-100" : ""
                    }`}
                    onClick={() => setVisibleModal(true)}
                >
                    <div className="flex items-center mb-2 text-base-1 font-bold text-n-6 dark:text-n-1">
                        <div className="mr-3">
                            <Image
                                className="w-7"
                                src="/images/upload.svg"
                                width={28}
                                height={28}
                                alt=""
                            />
                        </div>
                        Upload a file
                    </div>
                    <div className="text-small font-semibold text-n-4">
                        <p>PNG, JPG, PDF, XML, CSV, ...</p>
                        <p>Maximum 5Gb</p>
                    </div>
                </div>
            </div>
            <Modal
                classWrap="max-w-[36.25rem] rounded-4xl bg-transparent"
                classButtonClose="hidden"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <div className="relative p-2 bg-primary-3 rounded-4xl">
                    <input className="absolute inset-0 opacity-0" type="file" />
                    <div className="px-6 py-16 border-2 border-dashed border-n-1 rounded-[1.75rem] text-center text-n-1">
                        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-8 bg-n-1 rounded-full shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.25)]">
                            <Icon className="w-8 h-8" name="upload" />
                        </div>
                        <div className="mb-2 text-h3 md:text-h4">
                            Upload to Synapse
                        </div>
                        <div className="text-base-1">
                            You can add prompt before upload
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddFile;

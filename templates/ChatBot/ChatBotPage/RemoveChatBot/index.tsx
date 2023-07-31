import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Notify from "@/components/Notify";

type RemoveChatBotProps = {};

const RemoveChatBot = ({}: RemoveChatBotProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const handleClick = () => {
        setVisibleModal(false);
        toast((t) => (
            <Notify className="md:flex-wrap md:rounded-2xl" iconDelete>
                <div className="ml-3 mr-16 text-base-1 font-semibold md:w-[calc(100%-2rem)] md:m-0 md:pl-3">
                    Bot deleted
                </div>
                <Link
                    className="btn-light btn-medium md:w-full md:mt-4"
                    href="/chatbot/create"
                    onClick={() => toast.dismiss(t.id)}
                >
                    <span>Create new bot</span>
                    <Icon name="share" />
                </Link>
            </Notify>
        ));
    };

    return (
        <>
            <button
                className="group flex items-center w-full h-12 px-8 border-2 border-n-3 rounded-full text-base-2 font-bold text-color-5 outline-none tap-highlight-color transition-colors hover:!border-color-5 lg:px-10 md:h-11 md:px-[1.625rem] dark:border-n-5"
                onClick={() => setVisibleModal(true)}
            >
                <Icon
                    className="mr-2 fill-color-5 transition-colors lg:mr-0"
                    name="trash-1"
                />
                <span className="lg:hidden">Delete</span>
            </button>
            <Modal
                classWrap="max-w-[30.875rem] px-16 py-12 rounded-4xl text-center md:px-6 md:py-8"
                classButtonClose="hidden"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <div className="mb-2 text-h4 md:text-h5">
                    Are you sure you want to delete this chatbot?
                </div>
                <div className="mb-10 text-body-1 text-n-4 md:mb-6">
                    This action cannot be undone and all data will be
                    permanently lost.
                </div>
                <div className="flex space-x-3">
                    <button
                        className="btn-red flex-1 md:px-2"
                        onClick={handleClick}
                    >
                        <span>Yes, delete it</span>
                        <Icon name="trash" />
                    </button>
                    <button
                        className="btn-stroke flex-1 md:px-2"
                        onClick={() => setVisibleModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default RemoveChatBot;

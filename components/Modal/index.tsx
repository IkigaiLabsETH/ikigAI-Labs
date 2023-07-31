import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type ModalProps = {
    className?: string;
    classWrap?: string;
    classButtonClose?: string;
    visible: boolean;
    onClose: () => void;
    initialFocus?: any;
    children: React.ReactNode;
    video?: boolean;
    videoPlayer?: boolean;
};

const Modal = ({
    className,
    classWrap,
    classButtonClose,
    visible,
    onClose,
    initialFocus,
    children,
    video,
    videoPlayer,
}: ModalProps) => {
    return (
        <Transition show={visible} as={Fragment}>
            <Dialog
                initialFocus={initialFocus}
                className={`fixed inset-0 z-50 flex p-6 overflow-auto scroll-smooth md:px-4 ${className}`}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-n-7/90 dark:bg-n-7/95"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel
                        className={twMerge(
                            `relative z-10 max-w-[48rem] w-full m-auto bg-n-1 rounded-[1.25rem] shadow-modal md:rounded-xl dark:bg-n-6 ${
                                video
                                    ? "max-w-[64rem] aspect-video bg-n-7 overflow-hidden"
                                    : ""
                            } ${
                                videoPlayer
                                    ? "max-w-[64rem] bg-n-7 overflow-hidden"
                                    : ""
                            } ${classWrap}`
                        )}
                    >
                        {children}
                        <button
                            className={twMerge(
                                `absolute top-3 right-3 w-10 h-10 text-0 rounded-full fill-n-7 hover:!fill-color-5 dark:fill-n-3 ${classButtonClose}`
                            )}
                            onClick={onClose}
                        >
                            <Icon
                                className="fill-inherit transition-colors"
                                name="close"
                            />
                        </button>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Modal;

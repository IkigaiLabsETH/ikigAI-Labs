import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Form from "./Form";

type CheckoutProps = {
    visible: boolean;
    onClose: () => void;
};

const Checkout = ({ visible, onClose }: CheckoutProps) => {
    return (
        <Transition show={visible} as={Fragment}>
            <Dialog
                className="fixed inset-0 z-50 flex p-4 overflow-auto scroll-smooth md:p-0"
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
                        className="fixed inset-0 bg-n-7/90"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="linear duration-300"
                    enterFrom="opacity-0 -translate-x-[5%]"
                    enterTo="opacity-100 translate-x-0"
                    leave="linear duration-200"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-[5%]"
                >
                    <Dialog.Panel className="relative z-10 shrink-0 flex flex-col w-[37.25rem] min-h-full m-auto mr-0 -translate-x-[5%] bg-n-1 rounded-3xl md:w-full md:rounded-none md:min-h-screen-ios dark:bg-n-6">
                        <div className="relative h-64 p-8 text-center md:h-56">
                            <Image
                                className="object-cover rounded-t-3xl md:rounded-none"
                                src="/images/bg-checkout.jpg"
                                fill
                                alt=""
                            />
                            <div className="relative z-1w-[5.75rem] mx-auto">
                                <Image
                                    src="/images/logo-vertical.svg"
                                    width={92}
                                    height={66}
                                    alt=""
                                />
                            </div>
                            <button
                                className="absolute z-2 top-4 right-4 w-8 h-8 text-0 rounded-full bg-n-1 fill-n-7 hover:!fill-color-5 md:top-5 md:right-5 dark:bg-n-6 dark:fill-n-3"
                                onClick={onClose}
                            >
                                <Icon
                                    className="fill-inherit transition-colors"
                                    name="close"
                                />
                            </button>
                        </div>
                        <div className="relative flex grow -mt-[3.25rem] px-15 pb-12 md:px-5 md:pb-8">
                            <Form />
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Checkout;

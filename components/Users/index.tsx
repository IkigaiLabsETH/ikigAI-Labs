import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Field from "@/components/Field";

type UsersProps = {
    className?: string;
    classUsersItem?: string;
    items: any;
    addUser?: boolean;
};

const Users = ({ className, classUsersItem, items, addUser }: UsersProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [email1, setEmail1] = useState<string>("");

    return (
        <div className={`flex ${className}`}>
            {items.map((item: any, index: number) => (
                <div
                    className={`relative shrink-0 w-8 h-8 -ml-2 shadow-[0_0_0_0.1875rem_#FCFDFE] rounded-full overflow-hidden first:ml-0 dark:shadow-[0_0_0_0.1875rem_#292D32] ${classUsersItem}`}
                    key={index}
                >
                    <Image className="object-cover" src={item} fill alt="" />
                </div>
            ))}
            {addUser && (
                <>
                    <button
                        className="group relative w-8 h-8 -ml-2 shadow-[0_0_0_0.1875rem_#FCFDFE] rounded-full bg-n-7 text-0 transition-colors hover:bg-primary-3 dark:shadow-[0_0_0_0.1875rem_#292D32] dark:bg-n-2 dark:hover:bg-primary-3"
                        onClick={() => setVisibleModal(true)}
                    >
                        <Icon
                            className="w-6 h-6 fill-n-1 dark:transition-colors dark:fill-n-6 dark:group-hover:fill-n-1"
                            name="plus"
                        />
                    </button>
                    <Modal
                        classWrap="max-w-[30.875rem] py-12 px-16 rounded-3xl md:px-5 md:pb-8"
                        visible={visibleModal}
                        onClose={() => setVisibleModal(false)}
                    >
                        <form
                            className=""
                            action=""
                            onSubmit={() => console.log("Submit")}
                        >
                            <div className="mb-10 text-center">
                                <div className="mb-2 text-h4">
                                    Invite team members
                                </div>
                                <div className="text-body-1 text-n-4 md:max-w-[20rem] md:mx-auto">
                                    Invite team member to chat with ChatGPT-4
                                </div>
                            </div>
                            <Field
                                className="mb-4"
                                label="Email address"
                                placeholder="I.g. tam@ui8.net"
                                type="email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                required
                            />
                            <Field
                                className="mb-4"
                                label="Email address"
                                placeholder="I.g. tam@ui8.net"
                                type="email"
                                value={email1}
                                onChange={(e: any) => setEmail1(e.target.value)}
                                required
                            />
                            <button
                                className="btn-stroke w-full mb-10"
                                type="button"
                            >
                                <span>Add additional email addresses</span>
                                <Icon name="plus" />
                            </button>
                            <button
                                className="btn-gradient btn-medium w-full"
                                type="submit"
                            >
                                <span>Send invite</span>
                                <Icon className="w-4 h-4" name="send" />
                            </button>
                        </form>
                    </Modal>
                </>
            )}
        </div>
    );
};

export default Users;

import { useState } from "react";
import { Tooltip } from "react-tooltip";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Field from "@/components/Field";
import Tabs from "@/components/Tabs";

type CreateNewActionProps = {};

const CreateNewAction = ({}: CreateNewActionProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [prompt, setPrompt] = useState<string>(
        "Translate {selected text} to Vietnamese"
    );
    const [type, setType] = useState<"super" | "high" | "medium" | "low">(
        "high"
    );

    const typeTasks = [
        {
            title: "Super",
            active: type === "super",
            onClick: () => setType("super"),
        },
        {
            title: "High",
            active: type === "high",
            onClick: () => setType("high"),
        },
        {
            title: "Medium",
            active: type === "medium",
            onClick: () => setType("medium"),
        },
        {
            title: "Low",
            active: type === "low",
            onClick: () => setType("low"),
        },
    ];

    return (
        <>
            <button
                className="btn-dark w-full mt-4 dark:bg-n-7 dark:text-n-2 dark:fill-n-2 dark:hover:text-primary-4 dark:hover:fill-primary-4"
                onClick={() => setVisibleModal(true)}
            >
                <span>Create new action</span>
                <Icon name="plus" />
            </button>
            <Modal
                classWrap="max-w-[40rem] p-12 md:p-5"
                classButtonClose="top-12 right-9 md:top-5 md:right-5"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <form
                    className=""
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <div className="mb-8 text-h4 md:mb-6">New action</div>
                    <Field
                        className="mb-8 md:mb-6"
                        label="Action title"
                        placeholder="I.g. Translate to Vietnamese"
                        value={title}
                        onChange={(e: any) => setTitle(e.target.value)}
                        required
                    />
                    <Field
                        className="mb-1"
                        label="Prompt"
                        placeholder=""
                        value={prompt}
                        onChange={(e: any) => setPrompt(e.target.value)}
                        required
                        textarea
                    />
                    <button className="mb-7 text-small text-primary-3 font-medium transition-colors hover:text-primary-4 md:mb-6 dark:text-primary-4 dark:hover:text-primary-5">
                        Watch video tutorial
                    </button>
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-base-2 font-semibold text-n-4">
                            Chat creativity
                        </div>
                        <div
                            className="group cursor-pointer"
                            data-tooltip-place="left"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Choose high for creative tasks like generate image for better results"
                        >
                            <Icon
                                className="w-4 h-4 fill-n-4 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-1"
                                name="info-circle"
                            />
                        </div>
                    </div>
                    <Tooltip id="my-tooltip" />
                    <Tabs className="mb-8 md:mb-6" items={typeTasks} />
                    <div className="flex">
                        <button className="btn-gradient">
                            <span>Create action</span>
                            <Icon name="check" />
                        </button>
                        <button
                            className="btn-stroke ml-3"
                            onClick={() => setVisibleModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default CreateNewAction;

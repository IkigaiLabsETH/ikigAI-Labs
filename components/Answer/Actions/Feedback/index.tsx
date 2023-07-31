import { useState } from "react";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

const feedbackVariants = [
    {
        id: "0",
        title: "Irrelevant",
    },
    {
        id: "1",
        title: "Offensive",
    },
    {
        id: "2",
        title: "Not correct",
    },
];

type FeedbackProps = {
    onClose: () => void;
};

const Feedback = ({ onClose }: FeedbackProps) => {
    const [activeId, setActiveId] = useState<string>("0");
    const [feedback, setFeedback] = useState<string>("");

    return (
        <div className="mt-6 pt-6 border-t border-n-3 dark:border-n-5">
            <div className="flex justify-between items-center mb-5">
                <div className="text-h6">Why don’t you like this response?</div>
                <button
                    className="group shrink-0 w-10 h-10 ml-6 text-0"
                    onClick={onClose}
                >
                    <Icon
                        className="transition-colors group-hover:fill-color-5 dark:fill-n-3"
                        name="close"
                    />
                </button>
            </div>
            <div className="flex -mx-1.5 mb-5 overflow-x-auto scroll-smooth scrollbar-none md:-mr-5 md:after:w-5 md:after:shrink-0">
                {feedbackVariants.map((item) => (
                    <button
                        className={`shrink-0 btn-stroke mx-1.5 ${
                            activeId === item.id
                                ? "!border-n-7 !text-n-7 dark:!border-n-2 dark:!text-n-2"
                                : ""
                        }`}
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <Field
                label="Provide your feedback"
                placeholder="I.g. Explain why you don’t like it"
                value={feedback}
                onChange={(e: any) => setFeedback(e.target.value)}
                required
                textarea
            />
        </div>
    );
};

export default Feedback;

import { useState } from "react";
import { toast } from "react-hot-toast";
import Icon from "@/components/Icon";
import SchedulePost from "@/components/SchedulePost";
import Notify from "@/components/Notify";
import Action from "../Action";
import Select from "../Select";

const socials = [
    {
        id: "0",
        title: "Buffer account",
    },
    {
        id: "1",
        title: "Dribbble",
    },
];

type SocialActionsProps = {};

const SocialActions = ({}: SocialActionsProps) => {
    const [social, setSocial] = useState<any>(socials[0]);

    return (
        <>
            <div className="space-y-1">
                <Action
                    title="Make longer"
                    icon="add-circle-stroke"
                    onClick={() => console.log("Make longer")}
                />
                <Action
                    title="Add more hashtag"
                    icon="add-circle-stroke"
                    onClick={() => console.log("Add more hashtag")}
                />
                <Action
                    title="Improve writing"
                    icon="cube"
                    onClick={() => console.log("Improve writing")}
                />
                <Action
                    title="Fix spelling and grammar"
                    icon="text-input"
                    onClick={() => console.log("Fix spelling and grammar")}
                />
            </div>
            <div className="mt-4 pt-4 border-t border-n-3 dark:border-n-5">
                <Select
                    label="Share with"
                    iconHead="recording"
                    iconDropdown="recording-1"
                    items={socials}
                    value={social}
                    onChange={setSocial}
                />
                <button
                    className="btn-dark w-full mt-3"
                    onClick={() =>
                        toast((t) => (
                            <Notify
                                className="md:flex-wrap md:rounded-2xl"
                                iconCheck
                            >
                                <div className="ml-3 mr-6 text-base-1 font-semibold md:w-[calc(100%-2rem)] md:m-0 md:pl-3">
                                    Your post has been scheduled through Buffer
                                </div>
                                <button
                                    className="btn-light btn-medium md:w-full md:mt-4"
                                    onClick={() => toast.dismiss(t.id)}
                                >
                                    <span>View</span>
                                    <Icon name="share" />
                                </button>
                            </Notify>
                        ))
                    }
                >
                    <span>Share now</span>
                    <Icon name="share" />
                </button>
                <SchedulePost />
            </div>
        </>
    );
};

export default SocialActions;

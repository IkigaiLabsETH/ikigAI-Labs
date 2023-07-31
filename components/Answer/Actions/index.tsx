import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Icon from "@/components/Icon";
import Notify from "@/components/Notify";
import Feedback from "./Feedback";

type ActionsProps = {};

const Actions = ({}: ActionsProps) => {
    const [like, setLike] = useState<boolean>(false);
    const [dislike, setDislike] = useState<boolean>(false);

    const handleClickLike = () => {
        setLike(!like);
        setDislike(false);
    };

    const handleClickDislike = () => {
        setDislike(!dislike);
        setLike(false);
    };

    return (
        <>
            <div className="flex">
                <button
                    className={`btn-stroke btn-square btn-medium mr-3 ${
                        like ? "!border-primary-3 !bg-primary-3 !fill-n-1" : ""
                    }`}
                    onClick={handleClickLike}
                >
                    <Icon name="like" />
                </button>
                <button
                    className={`btn-stroke btn-square btn-medium mr-3 ${
                        dislike
                            ? "!border-primary-3 !bg-primary-3 !fill-n-1"
                            : ""
                    }`}
                    onClick={handleClickDislike}
                >
                    <Icon name="dislike" />
                </button>
                <button
                    className="btn-stroke btn-square btn-medium mr-3"
                    onClick={() =>
                        toast((t) => (
                            <Notify className="block w-[23.5rem] p-6 rounded-3xl md:w-[21.5rem]">
                                <div className="flex items-center mb-6 text-base-1 font-semibold">
                                    <Icon
                                        className="w-6 h-6 mr-2 fill-n-1"
                                        name="check"
                                    />
                                    Message selected
                                </div>
                                <div className="flex">
                                    <CopyToClipboard text="Link share page">
                                        <button className="btn-gradient btn-medium grow mr-4">
                                            <span>Copy share link</span>
                                            <Icon name="copy" />
                                        </button>
                                    </CopyToClipboard>
                                    <Link
                                        className="btn-light btn-medium btn-square rounded-full"
                                        href="/share"
                                        onClick={() => toast.dismiss(t.id)}
                                        target="_blank"
                                    >
                                        <Icon name="share" />
                                    </Link>
                                </div>
                            </Notify>
                        ))
                    }
                >
                    <Icon name="send" />
                </button>
                <CopyToClipboard text="Copy content">
                    <button className="btn-stroke btn-square btn-medium mr-auto">
                        <Icon name="copy" />
                    </button>
                </CopyToClipboard>
                <button className="btn-stroke btn-square btn-medium">
                    <Icon name="repeat" />
                </button>
            </div>
            {dislike && <Feedback onClose={() => setDislike(false)} />}
        </>
    );
};

export default Actions;

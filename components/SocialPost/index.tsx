import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import SelectDark from "@/components/SelectDark";
import SuggestedMedia from "./SuggestedMedia";

const socials = [
    {
        id: "0",
        title: "Twitter",
    },
    {
        id: "1",
        title: "Facebook",
    },
    {
        id: "2",
        title: "LinkedIn",
    },
];

type SocialPostProps = {};

const SocialPost = ({}: SocialPostProps) => {
    const [social, setSocial] = useState<any>(socials[0]);
    const [edit, setEdit] = useState<boolean>(true);

    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className="relative rounded-xl bg-n-6 border border-n-5">
            <div className="flex bg-n-7 rounded-t-xl shadow-[inset_0_-0.0625rem_0_0_#393E44]">
                <SelectDark
                    items={socials}
                    value={social}
                    onChange={setSocial}
                />
                <div className="flex md:hidden">
                    {socials.map((item) => (
                        <button
                            className={`h-12 px-6 border-r border-n-5 text-base-2 font-semibold text-n-4 transition-colors hover:text-n-1 first:rounded-tl-xl ${
                                social === item ? "bg-n-6 !text-n-1" : ""
                            }`}
                            key={item.id}
                            onClick={() => setSocial(item)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <button className="group flex items-center h-12 ml-auto px-6 text-base-2 font-semibold text-n-1 transition-colors hover:text-primary-4">
                    <Icon
                        className="w-4 h-4 mr-2 fill-n-3 transition-colors group-hover:fill-primary-4"
                        name="copy-fill"
                    />
                    <span>Copy</span>
                </button>
            </div>
            <div className="flex p-3 md:block">
                <div className="flex justify-center items-center shrink-0 w-18 h-18 mr-4 md:w-12 md:h-12 md:ml-3 md:mr-0 md:mb-3">
                    <Image
                        className="w-12"
                        src="/images/twitter.svg"
                        width={48}
                        height={48}
                        alt=""
                    />
                </div>
                <div className="w-[calc(100%-5.5rem)] md:w-full">
                    <div
                        className={`p-3 rounded-xl border ${
                            edit ? "border-primary-4" : "border-transparent"
                        }`}
                    >
                        <div className="text-n-1">
                            Designers, it’s time to level up! 🤩 I just used
                            Google Bard AI assistant and Cinema 4D/Redshift
                            render to create a stunning hero header concept.
                            Check it out and see how AI tech can be used to help
                            you level up your designs! 📈{" "}
                            <span className="text-primary-4">
                                #design #ai #cinema4d #redshift
                            </span>
                        </div>
                        {edit && (
                            <div className="flex mt-4">
                                <button
                                    className="btn-gradient"
                                    onClick={() => setEdit(false)}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn-stroke-light ml-2"
                                    onClick={() => setEdit(false)}
                                >
                                    Discard
                                </button>
                            </div>
                        )}
                    </div>
                    <SuggestedMedia />
                </div>
            </div>
        </div>
    );
};

export default SocialPost;

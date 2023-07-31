import { useState } from "react";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import SelectDark from "@/components/SelectDark";

const tones = [
    {
        id: "0",
        title: "Confident",
    },
    {
        id: "1",
        title: "Professional",
    },
    {
        id: "2",
        title: "Friendly",
    },
];

type AudioProps = {};

const Audio = ({}: AudioProps) => {
    const [tone, setTone] = useState<any>(tones[0]);
    const [play, setPlay] = useState<boolean>(true);
    const [save, setSave] = useState<boolean>(true);

    return (
        <div className="relative rounded-xl bg-n-6 border border-n-5">
            <div className="flex bg-n-7 rounded-t-xl shadow-[inset_0_-0.0625rem_0_0_#393E44]">
                <SelectDark items={tones} value={tone} onChange={setTone} />
                <div className="flex md:hidden">
                    {tones.map((item, index) => (
                        <button
                            className={`h-12 px-6 border-r border-n-5 text-base-2 font-semibold text-n-4 transition-colors hover:text-n-1 first:rounded-tl-xl ${
                                tone === item ? "bg-n-6 !text-n-1" : ""
                            }`}
                            key={index}
                            onClick={() => setTone(item)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <button className="group flex items-center h-12 ml-auto px-6 text-base-2 font-semibold text-n-1 transition-colors hover:text-primary-4">
                    <Icon
                        className="w-4 h-4 mr-2 fill-n-3 transition-colors group-hover:fill-primary-4 lg:mr-0 md:mr-2"
                        name="download"
                    />
                    <span className="lg:hidden md:block md:capitalize">
                        <span className="md:hidden">Quick </span>export
                    </span>
                </button>
            </div>
            <div className="flex items-center px-6 py-5">
                <button
                    className="group shrink-0 w-10 h-10 mr-3 rounded-full bg-n-1 text-0"
                    onClick={() => setPlay(!play)}
                >
                    <Icon
                        className={`w-4 h-4 fill-n-5 transition-colors group-hover:fill-primary-3 ${
                            play ? "w-4 h-4" : "w-6 h-6"
                        }`}
                        name={play ? "play" : "pause"}
                    />
                </button>
                <div className="grow text-center">
                    <Image
                        className="w-full h-10 object-cover object-left"
                        src="/images/sound-lines.svg"
                        width={892}
                        height={40}
                        alt=""
                    />
                </div>
            </div>
            {save && (
                <div className="p-3 bg-n-7 rounded-b-xl">
                    <div className="border border-n-5 rounded-xl">
                        <div className="p-3 text-n-1">
                            <span className="text-primary-4">
                                Synapse is an AI chat app UI Kit designed by the
                                UI8 Team. It boasts a stunning design and
                                powerful features, making it an ideal choice for
                                developers looking to build chat applications
                                with ease|
                            </span>
                            . With Synapse, you can quickly create chat
                            interfaces that are both intuitive and visually
                            appealing, thanks to its comprehensive set of
                            pre-designed components and customizable elements.
                            Whether you&apos;re building a messaging app, a
                            customer support platform, or any other kind of
                            chat-based application, Synapse has everything you
                            need to get started.
                        </div>
                        <div className="flex justify-between items-center p-3 border-t border-n-5 md:block">
                            <div className="text-small text-n-4">
                                <p>
                                    Word count:{" "}
                                    <span className="text-n-1">67</span>
                                </p>
                                <p>
                                    Character count (including spaces):{" "}
                                    <span className="text-n-1">358</span>
                                </p>
                            </div>
                            <button
                                className="btn-light md:w-full md:mt-2"
                                onClick={() => setSave(false)}
                            >
                                Save audio
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Audio;

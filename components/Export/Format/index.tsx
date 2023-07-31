import Image from "@/components/Image";

type FormatProps = {
    type?: string;
};

const Format = ({ type }: FormatProps) => {
    const formatsVideo = [
        {
            title: "MP4 Small",
            note: "For web",
            image: "/images/jpg-small.svg",
            onClick: () => console.log("Export MP4 Small"),
        },
        {
            title: "MP4 Large",
            note: "Original + Settings",
            image: "/images/jpg-large.svg",
            onClick: () => console.log("Export MP4 Large"),
        },
    ];

    const formatsAudio = [
        {
            title: ".MP3",
            note: "Small - 320kbps",
            image: "/images/audio-mp3.svg",
            onClick: () => console.log("Export MP3"),
        },
        {
            title: ".WAV",
            note: "Large - 44.1 kHz",
            image: "/images/audio-wav.svg",
            onClick: () => console.log("Export WAV"),
        },
    ];

    const formatsImage = [
        {
            title: "JPG Small",
            note: "For web",
            image: "/images/jpg-small.svg",
            onClick: () => console.log("Export JPG Small"),
        },
        {
            title: "JPG Large",
            note: "Original + Settings",
            image: "/images/jpg-large.svg",
            onClick: () => console.log("Export JPG Large"),
        },
    ];

    const formats =
        type === "video"
            ? formatsVideo
            : type === "audio"
            ? formatsAudio
            : formatsImage;

    return (
        <div>
            {formats.map((format, index) => (
                <button
                    className="flex items-center w-full px-3 py-2 rounded-xl transition-colors hover:bg-color-2/15"
                    key={index}
                    onClick={format.onClick}
                >
                    <div className="w-10 mr-4">
                        <Image
                            className="w-full"
                            src={format.image}
                            width={40}
                            height={40}
                            alt=""
                        />
                    </div>
                    <div className="grow text-left">
                        <div className="text-base-2 font-semibold">
                            {format.title}
                        </div>
                        <div className="text-smaller text-n-4">
                            {format.note}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Format;

import { useState } from "react";
import Export from "@/components/Export";
import Action from "../Action";
import Select from "../Select";

const voices = [
    {
        id: "0",
        title: "John Smith",
    },
    {
        id: "1",
        title: "Sarah Johnson",
    },
    {
        id: "2",
        title: "Matthew Wilson",
    },
    {
        id: "3",
        title: "Emily Brown",
    },
    {
        id: "4",
        title: "William Thompson",
    },
];

const tones = [
    {
        id: "0",
        title: "Professional",
    },
    {
        id: "1",
        title: "Semi-professional",
    },
    {
        id: "2",
        title: "Amateur",
    },
];

const detailsVideo = [
    {
        label: "Tracks",
        value: "H.264 (×264), 30 FPS PFR AAC, Stereo  ",
    },
    {
        label: "Filters",
        value: "Comb Detect, Decomb",
    },
    {
        label: "Size",
        value: "1920x1080",
    },
];

type VideoActionsProps = {};

const VideoActions = ({}: VideoActionsProps) => {
    const [voice, setVoice] = useState<any>(voices[2]);
    const [tone, setTone] = useState<any>(tones[0]);

    return (
        <>
            <div className="space-y-1">
                <Action
                    title="Remove background"
                    icon="trash"
                    onClick={() => console.log("Remove background")}
                />
                <Select
                    className="z-2"
                    label="Change voice"
                    iconHead="recording"
                    iconDropdown="profile"
                    items={voices}
                    value={voice}
                    onChange={setVoice}
                />
                <Select
                    label="Change tone"
                    iconHead="recording"
                    iconDropdown="profile"
                    items={tones}
                    value={tone}
                    onChange={setTone}
                />
                <Action
                    title="English (United State)"
                    icon="translate"
                    onClick={() => console.log("English (United State)")}
                />
                <Action
                    title="Fix spelling and grammar"
                    icon="text-input"
                    onClick={() => console.log("Fix spelling and grammar")}
                />
                <Action
                    title="Improve speaking"
                    icon="recording-1"
                    onClick={() => console.log("Improve speaking")}
                />
            </div>
            <Export
                image="/images/video-pic.jpg"
                className="mt-4"
                type="video"
                details={detailsVideo}
            />
        </>
    );
};

export default VideoActions;

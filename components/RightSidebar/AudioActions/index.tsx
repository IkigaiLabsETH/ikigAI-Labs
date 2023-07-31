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

const speeds = [
    {
        id: "0",
        title: "Slowly: 0.5x",
    },
    {
        id: "1",
        title: "Normal: 1x",
    },
    {
        id: "2",
        title: "Quickly: 1.5x",
    },
];

const languages = [
    {
        id: "0",
        title: "English (United State)",
    },
    {
        id: "1",
        title: "French",
    },
    {
        id: "2",
        title: "Spanish",
    },
];

type AudioActionsProps = {};

const AudioActions = ({}: AudioActionsProps) => {
    const [voice, setVoice] = useState<any>(voices[2]);
    const [tone, setTone] = useState<any>(tones[0]);
    const [speed, setSpeed] = useState<any>(speeds[1]);
    const [language, setLanguage] = useState<any>(languages[0]);

    return (
        <>
            <div className="space-y-1">
                <Action
                    title="Edit"
                    icon="edit"
                    onClick={() => console.log("Edit")}
                />
                <Select
                    className="z-4"
                    label="Change voice"
                    iconHead="recording"
                    iconDropdown="profile"
                    items={voices}
                    value={voice}
                    onChange={setVoice}
                />
                <Select
                    className="z-3"
                    label="Change tone"
                    iconHead="recording"
                    iconDropdown="profile"
                    items={tones}
                    value={tone}
                    onChange={setTone}
                />
                <Select
                    className="z-2"
                    label="Speed"
                    iconHead="recording"
                    iconDropdown="recording-1"
                    items={speeds}
                    value={speed}
                    onChange={setSpeed}
                />
                <Select
                    label="Language"
                    iconHead="recording"
                    iconDropdown="recording-1"
                    items={languages}
                    value={language}
                    onChange={setLanguage}
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
            <Export className="mt-4" type="audio" />
        </>
    );
};

export default AudioActions;

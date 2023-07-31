import { useState } from "react";
import Export from "@/components/Export";
import Action from "../Action";
import Select from "../Select";

const models = [
    {
        id: "0",
        title: "Midjourney",
    },
    {
        id: "1",
        title: "Chat GPT",
    },
    {
        id: "2",
        title: "Google Bard AI ",
    },
];

const styles = [
    {
        id: "0",
        title: "3D illustration",
    },
    {
        id: "1",
        title: "Photo",
    },
    {
        id: "2",
        title: "Gradient",
    },
];

const detailsPhoto = [
    {
        label: "Image name",
        value: "3D Hi Fi Retro Futuristic Character",
    },
    {
        label: "AI model",
        value: "Midjourney v6",
    },
    {
        label: "Size",
        value: "2048x2048",
    },
];

type PhotoEditorActionsProps = {};

const PhotoEditorActions = ({}: PhotoEditorActionsProps) => {
    const [model, setModel] = useState<any>(models[0]);
    const [style, setStyle] = useState<any>(styles[0]);

    return (
        <>
            <div className="space-y-1">
                <Select
                    className="z-2"
                    label="AI model"
                    iconHead="recording"
                    iconDropdown="recording-1"
                    items={models}
                    value={model}
                    onChange={setModel}
                />
                <Select
                    label="Style"
                    iconHead="recording"
                    iconDropdown="recording-1"
                    items={styles}
                    value={style}
                    onChange={setStyle}
                />
                <Action
                    title="New variation"
                    icon="add-circle-stroke"
                    onClick={() => console.log("New variation")}
                />
                <Action
                    title="Upscale (max)"
                    icon="scale"
                    onClick={() => console.log("Upscale (max)")}
                />
            </div>
            <Export
                image="/images/image-export.jpg"
                className="mt-4"
                details={detailsPhoto}
            />
        </>
    );
};

export default PhotoEditorActions;

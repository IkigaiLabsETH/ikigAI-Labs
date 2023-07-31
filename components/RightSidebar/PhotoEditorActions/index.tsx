import { useState } from "react";
import Export from "@/components/Export";
import Modal from "@/components/Modal";
import Adjust from "@/components/Adjust";
import Action from "../Action";
import Select from "../Select";

const filters = [
    {
        id: "0",
        title: "Blur",
    },
    {
        id: "1",
        title: "Normal",
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
    const [filter, setFilter] = useState<any>(filters[1]);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div className="space-y-1">
                <Action
                    title="Adjust"
                    icon="add-circle-stroke"
                    onClick={() => setVisibleModal(true)}
                />
                <Action
                    title="New variation"
                    icon="add-circle-stroke"
                    onClick={() => console.log("New variation")}
                />
                <Action
                    title="Re-generate"
                    icon="add-circle-stroke"
                    onClick={() => console.log("Re-generate")}
                />
                <Action
                    title="Remove background"
                    icon="trash"
                    onClick={() => console.log("Remove background")}
                />
                <Select
                    label="Filter"
                    iconHead="recording"
                    iconDropdown="recording-1"
                    items={filters}
                    value={filter}
                    onChange={setFilter}
                />
                <Action
                    title="Upscale (max)"
                    icon="scale"
                    onClick={() => console.log("Upscale (max)")}
                />
                <Action
                    title="Create talking video"
                    icon="scale"
                    onClick={() => console.log("Create talking video")}
                />
            </div>
            <Export
                image="/images/photo-3.jpg"
                className="mt-4"
                details={detailsPhoto}
            />
            <Modal
                classWrap="p-8 pt-9 md:p-5"
                classButtonClose="top-8 right-8 w-8 h-8 md:top-4 md:right-3"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <Adjust />
            </Modal>
        </>
    );
};

export default PhotoEditorActions;

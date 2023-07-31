import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

type EditProfileProps = {};

const EditProfile = ({}: EditProfileProps) => {
    const [objectURL, setObjectURL] = useState<any>("/images/avatar.jpg");
    const [name, setName] = useState<string>("Tran Mau Tri Tam");
    const [location, setLocation] = useState<string>("Saigon, Vietnam");
    const [bio, setBio] = useState<string>("");

    const handleUpload = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // setImage(file);
            setObjectURL(URL.createObjectURL(file));
        }
    };

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <div className="mb-12 text-h3 lg:mb-8">Edit profile</div>
            <div className="mb-4 text-base-2 font-semibold text-n-4">
                Avatar
            </div>
            <div className="flex items-center mb-10 lg:mb-8">
                <div className="relative flex justify-center items-center shrink-0 w-32 h-32 mr-8 rounded-full overflow-hidden bg-n-2 dark:bg-n-6 md:w-28 md:h-28 md:mr-5">
                    {objectURL !== null ? (
                        <Image
                            className="object-cover rounded-full"
                            src={objectURL}
                            fill
                            alt="Avatar"
                        />
                    ) : (
                        <Icon
                            className="w-8 h-8 dark:fill-n-1"
                            name="profile"
                        />
                    )}
                </div>
                <div className="grow">
                    <div className="relative inline-flex mb-6 md:mb-3">
                        <input
                            className="peer absolute inset-0 opacity-0 cursor-pointer"
                            type="file"
                            onChange={handleUpload}
                        />
                        <button className="btn-stroke peer-hover:bg-n-3 dark:peer-hover:bg-n-5 md:px-5">
                            <span>Upload new image</span>
                            <Icon name="upload-fat" />
                        </button>
                    </div>
                    <div className="text-base-2 text-n-4 md:text-small">
                        800x800 PNG, JPG is recommended. Maximum file size: 2Mb
                    </div>
                </div>
            </div>
            <Field
                className="mb-10 lg:mb-8"
                label="Name"
                placeholder="Username"
                icon="profile"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
                optional
            />
            <Field
                className="mb-10 lg:mb-8"
                label="Location"
                placeholder="Location"
                icon="map"
                value={location}
                onChange={(e: any) => setLocation(e.target.value)}
                required
                optional
            />
            <Field
                className="mb-10 lg:mb-8"
                label="Bio"
                placeholder="I.g. What is Synapse UI kit"
                note="Enter each message in a new line."
                value={bio}
                onChange={(e: any) => setBio(e.target.value)}
                textarea
                required
            />
            <div className="flex">
                <button className="btn-gradient md:grow" type="submit">
                    <span>Save change</span>
                    <Icon name="check" />
                </button>
                <button className="btn-stroke ml-3" type="button">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditProfile;

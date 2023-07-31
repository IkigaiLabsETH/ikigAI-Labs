import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type PhotoGeneratorProps = {
    content?: string;
    images?: any;
    image?: any;
};

const PhotoGenerator = ({ content, images, image }: PhotoGeneratorProps) => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <div>
            {content && (
                <div className="p-4 bg-n-2 rounded-xl text-body-1 font-semibold dark:bg-n-7">
                    {content}
                </div>
            )}
            {images && (
                <div className="flex flex-wrap mt-2 -ml-2 mr-10 first:-mt-4 lg:-mr-2">
                    {images.map((image: any) => (
                        <div
                            className={`relative w-[calc(50%-1rem)] mt-4 mx-2 aspect-square cursor-pointer after:absolute after:inset-0 after:border-2 after:border-n-7 after:rounded-3xl after:opacity-0 after:transition-opacity ${
                                activeId === image.id
                                    ? "after:!opacity-100"
                                    : ""
                            }`}
                            onClick={() => setActiveId(image.id)}
                            key={image.id}
                        >
                            <Image
                                className="object-cover rounded-3xl"
                                src={image.image}
                                fill
                                alt=""
                            />
                            <div
                                className={`absolute right-4 bottom-4 flex justify-center items-center w-10 h-10 rounded-full bg-primary-3 opacity-0 transition-opacity ${
                                    activeId === image.id ? "!opacity-100" : ""
                                }`}
                            >
                                <Icon className="fill-n-1" name="check" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {image && (
                <div className="mt-6 first:mt-0">
                    <Image
                        className="w-full object-cover rounded-3xl"
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt=""
                    />
                </div>
            )}
        </div>
    );
};

export default PhotoGenerator;

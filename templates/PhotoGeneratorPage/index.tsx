"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import PhotoGenerator from "@/components/PhotoGenerator";

const images = [
    {
        id: "0",
        image: "/images/image-1.jpg",
    },
    {
        id: "1",
        image: "/images/image-2.jpg",
    },
    {
        id: "2",
        image: "/images/image-3.jpg",
    },
    {
        id: "3",
        image: "/images/image-4.jpg",
    },
];

const PhotoGeneratorPage = () => {
    return (
        <Layout>
            <Chat background="/images/bg-3.jpg" typeChat="photo-generator">
                <Question content="3D Hi Fi Retro Futuristic Character, Blender, Dribbble, Behance, --ar 1:1 --q 2 --s 750" />
                <Answer
                    content="Boom! Your image is generated with Midjourney with prompt:"
                    message="Generating images for you…"
                >
                    <PhotoGenerator
                        content="3D Hi Fi Retro Futuristic Character, Blender, Dribbble, Behance, --ar 1:1 --q 2 --s 750"
                        images={images}
                    />
                </Answer>
                <Answer
                    content="Boom! Your image is generated with Midjourney with prompt:"
                    message="Generating images for you…"
                >
                    <PhotoGenerator content="New variations" images={images} />
                </Answer>
                <Answer
                    content="3D Hi Fi Retro Futuristic Character, Blender, Dribbble, Behance, --ar 1:1 --q 2 --s 75"
                    message="Generating image for you…"
                >
                    <PhotoGenerator
                        content="Upscaled"
                        image={{
                            src: "/images/image-1.jpg",
                            width: 864,
                            height: 760,
                        }}
                    />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default PhotoGeneratorPage;

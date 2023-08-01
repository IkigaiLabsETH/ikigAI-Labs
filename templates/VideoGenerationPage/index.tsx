"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Video from "@/components/Video";

const VideoGenerationPage = () => {
    return (
        <Layout>
            <Chat background="/images/bg-2.jpg" typeChat="video">
                <Question
                    content={
                        <>
                            Create a talking avatar for this script: <br></br>{" "}
                            <br></br>
                            the Talking Avatar Video Creator. 
                            You can easily create videos featuring a virtual
                            avatar or NFT that delivers your message in a
                            personalized and natural way. Whether you&apos;re
                            chatting about art, sharing information about your
                            collection, or delivering an AMA...
                        </>
                    }
                    image="/images/file-name.jpg"
                />
                <Answer
                    content="Based on the gender identified in the uploaded image, the video has been automatically generated with a male voice. However, you have the option to customize your video by selecting from the available options below."
                    message="Generating video for you..."
                    result="Background removed"
                >
                    <Video />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default VideoGenerationPage;

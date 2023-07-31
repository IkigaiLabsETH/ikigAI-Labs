"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import PhotoEditor from "@/components/PhotoEditor";

const PhotoEditorPage = () => {
    return (
        <Layout>
            <Chat
                background="/images/bg-3.jpg"
                typeChat="photo-editor"
                generationMessage
            >
                <Question
                    content="Retouch this photo"
                    image="/images/photo-1.jpg"
                />
                <Answer
                    content="I automatically adjust colors, remove blemishes, and enhance details. See the result"
                    message="Retouching this photo"
                >
                    <PhotoEditor
                        src="/images/photo-2.jpg"
                        width={864}
                        height={816}
                    />
                </Answer>
                <Question content="Take off character’s hat and adjust to a better posture." />
                <Answer content="Here you go!" message="Retouching this photo">
                    <PhotoEditor
                        src="/images/photo-3.jpg"
                        width={864}
                        height={600}
                    />
                </Answer>
                <Question content="Show full body" />
                <Answer message="Retouching this photo">
                    <PhotoEditor
                        src="/images/photo-4.jpg"
                        width={864}
                        height={1200}
                    />
                </Answer>
                <Answer message="Retouching this photo">
                    <PhotoEditor
                        src="/images/photo-5.jpg"
                        width={864}
                        height={1200}
                        edit
                    />
                </Answer>
                <Answer message="Retouching this photo">
                    <PhotoEditor
                        src="/images/photo-6.jpg"
                        width={864}
                        height={1200}
                    />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default PhotoEditorPage;

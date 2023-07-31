"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Feedback from "@/components/Feedback";

const EducationFeedbackPage = () => {
    return (
        <Layout>
            <Chat background="/images/bg-5.jpg">
                <Question
                    content="Review these tests and give me feedback to improve my English skills. Focus on fixing any spelling, grammar, and punctuation errors, as well as improving clarity and conciseness. Break up overly long sentences, reduce repetition, and prefer active voice and simple words. Make sure to keep the meaning and tone of voice the same."
                    files={["file-name.pdf", "file-name.pdf", "file-name.pdf"]}
                />
                <Answer message="Generating answers for you…">
                    <Feedback />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default EducationFeedbackPage;

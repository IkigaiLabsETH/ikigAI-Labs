"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import PreviewPost from "@/components/PreviewPost";
import Answer from "@/components/Answer";
import SocialPost from "@/components/SocialPost";

const SocialPage = () => {
    return (
        <Layout>
            <Chat background="/images/bg-4.jpg" typeChat="social">
                <Question
                    content={
                        <>
                            Create promotional content for this post to share on
                            social media with the link:&nbsp;
                            <a
                                className="text-body-1 font-semibold text-primary-3 break-all"
                                href="https://livethelife.tv/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://livethelife.tv/
                            </a>
                            &nbsp; with link and hashtag for Twitter, Facebook
                        </>
                    }
                >
                    <PreviewPost
                        title="LiveTheLifeTV"
                        content="GM"
                        image="/images/dribbble-post.jpg"
                    />
                </Question>
                <Answer message="Generating answers for you…">
                    <SocialPost />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default SocialPage;

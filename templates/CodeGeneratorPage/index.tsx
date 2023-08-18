"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { useEffect, useState } from "react";
import axios from "axios";

// import { itemsCode, code, actions } from "@/mocks/code"; // how do we import real data vs mocks?
// import realData from "@/data/realData"; // Replace with the path to your real data file

const CodeGeneratorPage = () => {
    const [apiData, setApiData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchFromOpenAI();
    }, []);

    const fetchFromOpenAI = async () => {
        setLoading(true);
        try {
            const response = await axios.post("/api/openai", {
                query: "I actually recommend that you try to come up with your own distortion techniques instead of relying on Perlin noise", // Replace with the desired prompt
            });
            setApiData(response.data);
        } catch (error) {
            console.error("Error fetching code from OpenAI:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <Chat background="/images/bg-6.jpg">
                <Question content="Write code for my generative art series" />
                <Answer
                    content="Hey Degen, here's an example of a gen art series script that uses the flow fields algorithm:"
                    message="GM Anon, I started coding …"
                    loading="Producing interesting curves with Flow Fields"
                >

                    <Code
                        items={apiData?.items}
                        content={apiData?.content}
                        actions={apiData?.actions}
                    />
                </Answer>
                {loading && <div>Loading...</div>}
                {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
            </Chat>
        </Layout>
    );
};

export default CodeGeneratorPage;

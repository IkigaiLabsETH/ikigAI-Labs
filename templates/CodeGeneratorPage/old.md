"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { useEffect, useState } from "react";
import axios from "axios";

import { itemsCode, code, actions } from "@/mocks/code"; // how do we import real data vs mocks?

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
                    <Code code={code} />
                </Answer>
                <Question content="Write a flow fields algorithm for my gen art series" />
                <Answer
                    content="Sure, here's an example of a flow fields algorithm that is somewhat inspired by Fidenza:"
                    message="Starting to code in P5js for you…"
                >
                    <Code
                        items={itemsCode}
                        content={
                            <>
                                This form allows the user to select a file from
                                their device and upload it to the server. The
                                form element contains a label element and an
                                input element of type &quot;file&quot;, which is
                                used to select the file to upload. The button
                                element triggers the upload when clicked.
                                <br></br>The CSS styles the form to make it look
                                presentable and easy to use. The JS code listens
                                for the form&apos;s submit event, prevents the
                                default form submission behavior, creates a new
                                FormData object, appends the selected file to
                                the form data, and sends the form data to the
                                server using a fetch request. Finally, the
                                response from the server is logged to the
                                console.
                            </>
                        }
                        actions={actions}
                    />
                </Answer>
                <Question content="Is there a way to render the drawing" />
                <Answer
                    content={
                        <>
                            Yes, you can render the drawing in
                            P5js. Here&apos;s an updated version of the
                            previous code with a{" "}
                            <span className="font-semibold text-primary-3">
                                P5js script
                            </span>
                            :
                        </>
                    }
                    message="Give me a few seconds to think ser…"
                >
                    <Code
                        items={itemsCode}
                        content={
                            <>
                                In the P5js code, an
                                object is created to handle the
                                light renders. The upload event is listened to for
                                progress updates, and the progress bar is
                                rendered onchain. Finally, the load event is
                                listened to for the server&apos;s response,
                                which is logged to the console.
                                <br></br>.
                            </>
                        }
                        actions={actions}
                        actionsCell
                    />
                </Answer>
                {loading && <div>Loading...</div>}
                {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
            </Chat>
        </Layout>
    );
};

export default CodeGeneratorPage;
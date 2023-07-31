"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { itemsCode, code, actions } from "@/mocks/code";

const CodeGeneratorPage = () => {
    return (
        <Layout>
            <Chat background="/images/bg-6.jpg">
                <Question content="Write a recursive python function for the fibonacci sequence" />
                <Answer
                    content="Sure, here's an example of a recursive Python function that calculates the nth number in the Fibonacci sequence:"
                    message="Generating answers for you…"
                    loading="Intergrading male voice and adjusting the tone"
                >
                    <Code code={code} />
                </Answer>
                <Question content="Write a upload form in HTML, CSS and JS" />
                <Answer
                    content="Sure, here's an example of a recursive Python function that calculates the nth number in the Fibonacci sequence:"
                    message="Generating answers for you…"
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
                <Question content="Is there a way to display a progress bar during the upload?" />
                <Answer
                    content={
                        <>
                            Yes, you can display a progress bar during the
                            upload using the XMLHttpRequest object in
                            JavaScript. Here&apos;s an updated version of the
                            previous code with a{" "}
                            <span className="font-semibold text-primary-3">
                                progress bar
                            </span>
                            :
                        </>
                    }
                    message="Generating answers for you…"
                >
                    <Code
                        items={itemsCode}
                        content={
                            <>
                                The progress bar is added to the HTML with the
                                progress element. In the JS code, an
                                XMLHttpRequest object is created to handle the
                                upload. The upload event is listened to for
                                progress updates, and the progress bar is
                                updated accordingly. Finally, the load event is
                                listened to for the server&apos;s response,
                                which is logged to the console.
                                <br></br>Note that the progress bar will only
                                display if the server supports sending progress
                                updates during the upload. If the server does
                                not support this feature, the progress bar will
                                not update.
                            </>
                        }
                        actions={actions}
                        actionsCell
                    />
                </Answer>
            </Chat>
        </Layout>
    );
};

export default CodeGeneratorPage;

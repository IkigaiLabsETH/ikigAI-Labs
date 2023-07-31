import Code from "@/components/Code";

const htmlCode = `<div id="chatbot"></div>

<script>
    window.SynapseConfig = {
        chatbotId: "<YOUR_CHATBOT_ID>",
        position: "right",
        icon: "bubble",
        color: "#4CAF50"
    };
    var chatbot = new Synapse(SynapseConfig);
</script>
<script src="https://app.synapse.ai/sdk/synapse.js" id="<YOUR_CHATBOT_ID>" defer></script>`;

const code = {
    title: "HTML",
    language: "html",
    value: htmlCode,
};

type EmbedProps = {};

const Embed = ({}: EmbedProps) => (
    <>
        <div className="mb-6 text-h3 md:text-h5">
            Add Your Synapse Chatbot to Your Website with Ease
        </div>
        <div className="mb-12 text-n-4 md:mb-8">
            With Synapse&apos;s custom chatbot, you can provide personalized
            customer support and engage with your website visitors in real-time.
            Embedding your chatbot on your website is easy - simply copy and
            paste the following code into your HTML, replacing
            &#60;YOUR_CHATBOT_ID&#62; with your actual chatbot ID:
        </div>
        <Code code={code} />
    </>
);

export default Embed;

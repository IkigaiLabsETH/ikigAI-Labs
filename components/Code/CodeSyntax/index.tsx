import SyntaxHighlighter from "react-syntax-highlighter";
import { srcery } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeSyntaxProps = {
    language: string;
    value: any;
};

const CodeSyntax = ({ language, value }: CodeSyntaxProps) => (
    <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={srcery}
        customStyle={{
            background: "transparent",
            maxWidth: "100%",
            padding: "1rem 1.3rem 1.5rem",
        }}
        lineNumberStyle={{
            textAlign: "left",
            color: "#7C878E",
        }}
    >
        {value}
    </SyntaxHighlighter>
);

export default CodeSyntax;

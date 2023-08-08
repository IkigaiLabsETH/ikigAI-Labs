import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";
import { Archivo, Inter, Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";

const archivo = Archivo({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-archivo",
});

const inter = Inter({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const sourceCodePro = Source_Code_Pro({
    weight: ["500"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-source-code-pro",
});

export const metadata = {
    title: "ikigAI",
    description: "ikigAI - Labs XYZ",
    icons: {
        icon: "./favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="description"
                    content="ikigAI Labs XYZ designed a bespoke AI-assistantto enhance the functionality of ChatGPT with context about the creating and curation of Digital Art, writing smart contracts, editorial content or code for the Ikigai Labs XYZ web3 app."
                />
                <meta name="product-name" content="ikigAI - Labs XYZ - 生" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ikigailabseth" />
                <meta name="twitter:title" content="ikigAI - Labs XYZ - 生" />
                <meta
                    name="twitter:description"
                    content="Let's find out how to be creative with AI, create dope AF gen art, publish content, design prompts and refactor our code with context."
                />
                <meta name="twitter:creator" content="@ikigailabseth" />
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />
                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="ikigAI - Labs XYZ" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ai-alpha-six.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Let's find out how to be creative with AI, create dope AF gen art, publish content, design prompts and refactor our code with context."
                />
                <meta property="og:site_name" content="ikigAI - Labs XYZ" />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="ikigAI - Labs XYZ" />
                <meta
                    property="og:url"
                    content="https://ai-alpha-six.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Let's find out how to be creative with AI, create dope AF gen art, publish content, design prompts and refactor our code with context."
                />
                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="ikigAI - Labs XYZ" />
                <meta
                    property="og:url"
                    content="https://ai-alpha-six.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Let's find out how to be creative with AI, create dope AF gen art, publish content, design prompts and refactor our code with context."
                />
            </head>
            <body
                className={`${archivo.variable} ${inter.variable} ${sourceCodePro.variable} bg-n-2 font-sans text-body-2 antialiased text-n-7 dark:bg-n-7 dark:text-n-1`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

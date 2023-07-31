import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "New chat",
        url: "/new-chat",
    },
    {
        title: "Video generation",
        url: "/video-generation",
    },
    {
        title: "Photo editor",
        url: "/photo-editor",
    },
    {
        title: "Audio generator",
        url: "/audio-generator",
    },
    {
        title: "Education feedback",
        url: "/education-feedback",
    },
    {
        title: "Photo generator",
        url: "/photo-generator",
    },
    {
        title: "Code generator",
        url: "/code-generator",
    },
    {
        title: "Social",
        url: "/social",
    },
    {
        title: "Statistics",
        url: "/statistics",
    },
    {
        title: "Create chat bot",
        url: "/chatbot/create",
    },
    {
        title: "Chat bot",
        url: "/chatbot",
    },
    {
        title: "Pricing and payment",
        url: "/pricing-and-payment",
    },
    {
        title: "Sign In / Sign Up",
        url: "/entry",
    },
    {
        title: "Share page",
        url: "/share",
    },
    {
        title: "Settings",
        url: "/settings",
    },
];

const PageListPage = () => {
    return (
        <div className="flex flex-col items-start px-12 py-8">
            {items.map((item, index) => (
                <Link
                    className="mb-1 text-n-7 transition-colors hover:text-primary-1 dark:text-n-1 last:mb-0"
                    href={item.url}
                    key={index}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default PageListPage;

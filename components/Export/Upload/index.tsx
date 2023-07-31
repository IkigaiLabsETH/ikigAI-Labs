import Image from "@/components/Image";
import Icon from "@/components/Icon";

type UploadProps = {
    type?: string;
};

const Upload = ({}: UploadProps) => {
    const links = [
        {
            title: "Facebook",
            image: "/images/facebook.svg",
            url: "https://www.facebook.com/ui8.net/",
        },
        {
            title: "Twitter",
            image: "/images/twitter.svg",
            url: "https://twitter.com/ui8",
        },
    ];

    return (
        <div>
            {links.map((link, index) => (
                <a
                    className="flex items-center w-full px-3 h-14 rounded-xl transition-colors hover:bg-color-2/15"
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-10 mr-4">
                        <Image
                            className="w-full"
                            src={link.image}
                            width={40}
                            height={40}
                            alt=""
                        />
                    </div>
                    <div className="text-base-2 font-semibold">
                        {link.title}
                    </div>
                </a>
            ))}
            <button className="flex items-center w-full px-3 h-14 rounded-xl transition-colors hover:bg-color-2/15">
                <div className="flex justify-center items-center w-10 h-10 mr-4">
                    <Icon className="w-6 h-6 dark:fill-n-1" name="dots" />
                </div>
                <div className="text-base-2 font-semibold">More</div>
            </button>
        </div>
    );
};

export default Upload;

import Icon from "@/components/Icon";

type ShareProps = {
    type?: string;
};

const Share = ({}: ShareProps) => {
    const share = [
        {
            title: "Get a link",
            icon: "link-1",
            onClick: () => console.log("Get a link"),
        },
        {
            title: "Invite teammates",
            icon: "invite",
            onClick: () => console.log("Invite teammates"),
        },
    ];

    return (
        <div>
            {share.map((item, index) => (
                <button
                    className="flex items-center w-full px-3 h-14 rounded-xl transition-colors hover:bg-color-2/15"
                    key={index}
                    onClick={item.onClick}
                >
                    <div className="flex justify-center items-center w-10 h-10 mr-4">
                        <Icon
                            className="w-6 h-6 dark:fill-n-1"
                            name={item.icon}
                        />
                    </div>
                    <div className="text-base-2 font-semibold">
                        {item.title}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Share;

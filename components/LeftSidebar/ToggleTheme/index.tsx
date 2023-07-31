import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@/components/Icon";

type ToggleThemeProps = {
    visible?: boolean;
};

const ToggleTheme = ({ visible }: ToggleThemeProps) => {
    const { colorMode, setColorMode } = useColorMode();

    const items = [
        {
            title: "Light theme",
            icon: "sun",
            active: colorMode === "light",
            onClick: () => setColorMode("light"),
        },
        {
            title: "Dark theme",
            icon: "moon",
            active: colorMode === "dark",
            onClick: () => setColorMode("dark"),
        },
    ];

    return (
        <div className="absolute left-4 bottom-4.5">
            {items.map((item, index) => (
                <button
                    className={`items-center h-12 px-3 ${
                        item.active ? "hidden" : "flex"
                    }`}
                    key={index}
                    onClick={item.onClick}
                >
                    <Icon
                        className="shrink-0 w-6 h-6 fill-n-7 transition-colors dark:fill-n-2"
                        name={item.icon}
                    />
                    <div
                        className={`ml-5.5 whitespace-nowrap text-base-2 font-semibold dark:text-n-2 transition-opacity 2xl:transition-none ${
                            visible ? "opacity-100" : "opacity-0 md:opacity-100"
                        }`}
                    >
                        {item.title}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ToggleTheme;

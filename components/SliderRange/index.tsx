import { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type RangeSliderProps = {
    className?: string;
    title: string;
};

const RangeSlider = ({ className, title }: RangeSliderProps) => {
    const [value, setValue] = useState<number>(0);
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    const handleChange = (newValue: any) => {
        setValue(newValue);
    };

    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-1 text-smaller">
                <div>{title}</div>
                <div>{value < 1 ? value : `+${value}`}</div>
            </div>
            <div className="relative">
                <div className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.125rem] h-[0.5rem] bg-n-5 pointer-events-none dark:bg-n-3"></div>
                <Slider
                    min={-50}
                    max={50}
                    startPoint={0}
                    value={value}
                    onChange={handleChange}
                    handleStyle={{
                        zIndex: 2,
                        width: "1rem",
                        height: "1rem",
                        marginTop: "-0.4rem",
                        boxShadow: "none",
                        backgroundColor: isDarkMode ? "#F1F5F9" : "#181B1F",
                        border: `0.125rem solid ${
                            isDarkMode ? "#292D32" : "#FCFDFE"
                        }`,
                        opacity: 1,
                    }}
                    trackStyle={{
                        backgroundColor: isDarkMode ? "#E3E9EE" : "#393E44",
                        borderRadius: "0",
                    }}
                    railStyle={{
                        height: "0.25rem",
                        backgroundColor: isDarkMode ? "#393E44" : "#E3E9EE",
                    }}
                    dotStyle={{ display: "none" }}
                />
            </div>
        </div>
    );
};

export default RangeSlider;

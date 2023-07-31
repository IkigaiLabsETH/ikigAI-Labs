import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type MenuProps = {
    buttons: any;
    value: any;
    setValue: any;
};

const Menu = ({ buttons, value, setValue }: MenuProps) => {
    const handleClick = (value: any) => {
        setValue(value);
    };

    return buttons.map((button: any, index: number) => (
        <div className="mb-4 last:mb-0 lg:hidden" key={index}>
            {button.id === "delete-account" && (
                <div className="h-0.25 -mx-12 my-10 bg-n-3 xl:-mx-8 dark:bg-n-5"></div>
            )}
            <button
                className={`group flex items-center w-full h-12 px-[1.875rem] rounded-full border-2 border-n-3 text-base-2 font-bold transition-colors hover:border-n-5 tap-highlight-color dark:border-n-5 dark:hover:border-n-2 ${
                    button.id === "delete-account"
                        ? `!text-color-5 hover:!border-color-5 ${
                              value === button ? "!border-color-5" : ""
                          }`
                        : `text-n-4 ${
                              value === button
                                  ? "!border-n-7 text-n-7 dark:!border-n-2 dark:text-n-2"
                                  : ""
                          }`
                }`}
                onClick={() => handleClick(button)}
            >
                <Icon
                    className={`mr-3 transition-colors ${
                        button.id === "delete-account"
                            ? `!fill-color-5`
                            : `fill-n-4 ${
                                  value === button
                                      ? "fill-n-7 dark:fill-n-2"
                                      : ""
                              }`
                    }`}
                    name={button.icon}
                />
                {button.title}
            </button>
        </div>
    ));
};

export default Menu;

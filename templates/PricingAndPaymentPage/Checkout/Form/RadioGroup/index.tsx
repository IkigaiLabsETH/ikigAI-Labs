import { RadioGroup } from "@headlessui/react";
import Icon from "@/components/Icon";

type RadioType = {
    id: string;
    title: string;
    value: number;
    save?: number;
};

type RadioProps = {
    items: RadioType[];
    value: any;
    setValue: any;
};

const Radio = ({ items, value, setValue }: RadioProps) => {
    return (
        <RadioGroup
            className="flex mb-8 space-x-3 md:block md:space-x-0 md:space-y-4"
            value={value}
            onChange={setValue}
            name="plan"
        >
            {items.map((item) => (
                <RadioGroup.Option
                    key={item.id}
                    value={item}
                    className="p-4.5 basis-1/2 bg-n-2 border-2 border-n-2 rounded-xl transition-colors ui-checked:border-primary-3 ui-checked:bg-transparent cursor-pointer tap-highlight-color dark:bg-n-7 dark:border-n-7 dark:ui-checked:bg-transparent dark:ui-checked:border-primary-4"
                >
                    <div className="flex mb-1">
                        <div className="text-base-2 dark:text-n-3">
                            Pay {item.title}
                        </div>
                        <Icon
                            className="ml-auto fill-primary-3 opacity-0 transition-opacity ui-checked:opacity-100 dark:fill-primary-4"
                            name="check"
                        />
                    </div>
                    <div className="flex items-center">
                        <div className="text-base-1 font-semibold">
                            ${item.value}/
                            {item.title === "monthly" ? "month" : "year"}
                        </div>
                        {item.save && (
                            <div className="ml-auto px-2 text-base-2 font-semibold bg-color-3/15 rounded text-color-3">
                                Save {item.save}%
                            </div>
                        )}
                    </div>
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    );
};

export default Radio;

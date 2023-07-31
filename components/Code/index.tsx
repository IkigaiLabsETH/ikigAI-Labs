import { useState } from "react";
import Icon from "@/components/Icon";
import SelectDark from "@/components/SelectDark";
import CodeSyntax from "./CodeSyntax";
import ButtonCopy from "./ButtonCopy";
import Actions from "./Actions";

type CodeProps = {
    items?: any;
    code?: any;
    content?: any;
    actions?: any;
    actionsCell?: boolean;
};

const Code = ({ items, code, content, actions, actionsCell }: CodeProps) => {
    const [value, setValue] = useState<any>(items && items[0]);

    return (
        <>
            <div className="relative rounded-xl bg-n-6 border border-n-5 dark:bg-n-7">
                <div className="flex justify-between bg-n-7 rounded-t-xl shadow-[inset_0_-0.0625rem_0_0_#393E44]">
                    {items ? (
                        <>
                            <SelectDark
                                items={items}
                                value={value}
                                onChange={setValue}
                            />
                            <div className="flex md:hidden">
                                {items.map((item: any) => (
                                    <button
                                        className={`h-12 px-6 border-r border-n-5 text-base-2 font-semibold text-n-4 transition-colors hover:text-n-1 first:rounded-tl-xl ${
                                            value === item
                                                ? "bg-n-6 !text-n-1"
                                                : ""
                                        }`}
                                        key={item.id}
                                        onClick={() => setValue(item)}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center h-12 px-5 text-base-2 text-n-1">
                            <Icon
                                className="mr-2 fill-primary-4"
                                name="code-circle"
                            />
                            {code.title}
                        </div>
                    )}
                    {items ? (
                        items
                            .filter((x: any) => x === value)
                            .map((item: any) => (
                                <ButtonCopy key={item.id} text={item.value} />
                            ))
                    ) : (
                        <ButtonCopy text={code.value} />
                    )}
                </div>
                <div className="max-h-[26.5rem] overflow-auto rounded-b-xl">
                    {items ? (
                        items
                            .filter((x: any) => x === value)
                            .map((item: any) => (
                                <CodeSyntax
                                    language={item.language}
                                    key={item.id}
                                    value={item.value}
                                />
                            ))
                    ) : (
                        <CodeSyntax
                            language={code.language}
                            value={code.value}
                        />
                    )}
                </div>
            </div>
            {content && (
                <div className="mt-6 text-n-6 dark:text-n-3">{content}</div>
            )}
            {actions && <Actions items={actions} cell={actionsCell} />}
        </>
    );
};

export default Code;

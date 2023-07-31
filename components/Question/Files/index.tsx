import Icon from "@/components/Icon";

import Image from "@/components/Image";

type FilesProps = {
    items?: any;
};

const Files = ({ items }: FilesProps) => (
    <div className="flex overflow-auto scroll-smooth scrollbar-none -mr-8 after:w-8 after:shrink-0 md:-mr-5 md:after:w-5">
        {items.map((file: any, index: number) => (
            <div className="shrink-0 w-32 mr-4 last:mr-0" key={index}>
                <div className="relative flex justify-center items-center h-34 mb-3 bg-n-2 rounded-2xl dark:bg-n-7">
                    <Image
                        className="w-12"
                        src="/images/pdf.svg"
                        width={48}
                        height={48}
                        alt=""
                    />
                    <button className="group absolute z-1 top-2 right-2 w-7 h-7 rounded-full bg-n-1 text-0 dark:bg-n-6">
                        <Icon
                            className="fill-n-4 transition-colors group-hover:fill-color-5"
                            name="close"
                        />
                    </button>
                </div>
                <div className="truncate text-base-1 font-semibold">{file}</div>
            </div>
        ))}
    </div>
);

export default Files;

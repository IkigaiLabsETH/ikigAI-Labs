import Image from "@/components/Image";
import Icon from "@/components/Icon";

type FilesProps = {
    image?: string;
    files?: any;
};

const Files = ({ image, files }: FilesProps) => (
    <div className="relative z-1 p-4 border-b border-primary-6">
        {image && (
            <div className="relative w-40 h-40 after:absolute after:inset-0 after:top-[35%] after:rounded-2xl after:bg-gradient-to-b after:from-n-7/0 after:to-n-7/[0.75] afterL">
                <Image
                    className="rounded-2xl object-cover"
                    src={image}
                    fill
                    alt=""
                />
                <button className="group absolute z-1 top-3 right-3 w-8 h-8 rounded-full bg-n-1 text-0 dark:bg-n-6">
                    <Icon
                        className="fill-n-7 transition-colors group-hover:fill-color-5 dark:fill-n-1"
                        name="close"
                    />
                </button>
                <div className="absolute z-1 left-4 right-4 bottom-4 truncate text-base-2 font-semibold text-n-1">
                    file-name.png
                </div>
            </div>
        )}
        {files && (
            <div className="flex -mx-[0.9375rem] before:shrink-0 before:w-[0.9375rem] after:shrink-0 after:w-[0.9375rem] overflow-auto scroll-smooth scrollbar-none">
                {files.map((file: any, index: number) => (
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
                        <div className="truncate text-base-1 font-semibold">
                            {file}
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default Files;

import Icon from "@/components/Icon";
import Image from "@/components/Image";

type PreviewPostProps = {
    title: string;
    content: string;
    image: string;
};

const PreviewPost = ({ title, content, image }: PreviewPostProps) => (
    <div className="relative max-w-[27rem] p-4 bg-n-2 rounded-[1.25rem] dark:bg-n-7">
        <div className="text-n-4">{title}</div>
        <div className="pr-16 truncate text-body-1 font-semibold text-n-6 dark:text-n-1">
            {content}
        </div>
        <button className="absolute top-4 right-4 w-10 h-10 bg-n-1 text-0 rounded-full fill-n-7 hover:!fill-color-5 dark:bg-n-6 dark:fill-n-3">
            <Icon className="fill-inherit transition-colors" name="close" />
        </button>
        <div className="relative aspect-[1.33] mt-4">
            <Image
                className="rounded-[1.25rem] object-cover"
                src={image}
                fill
                alt=""
            />
        </div>
    </div>
);

export default PreviewPost;

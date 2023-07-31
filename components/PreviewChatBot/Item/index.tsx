import Image from "@/components/Image";
import Icon from "@/components/Icon";

type ItemProps = {
    className?: string;
    image: string;
    title: string;
    status: string;
};

const Item = ({ className, image, title, status }: ItemProps) => (
    <div className={`relative ${className}`}>
        <div className="absolute top-2 right-2 flex items-center h-5 px-3 rounded-lg bg-n-6 text-small font-semibold text-n-1">
            {status === "Pro only" && (
                <Icon className="w-3 h-3 mr-2 fill-n-1" name="lock" />
            )}
            {status}
        </div>
        <div className="flex justify-center items-center w-10 h-10 mb-6 rounded-xl bg-n-1 shadow-2">
            <Image className="w-6" src={image} width={24} height={24} alt="" />
        </div>
        <div className="mb-1 text-base-1 font-semibold dark:text-n-7">
            {title}
        </div>
    </div>
);

export default Item;

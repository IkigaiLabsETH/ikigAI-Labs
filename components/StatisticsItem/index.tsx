import Image from "@/components/Image";

type StatisticsItemProps = {
    className?: string;
    image: string;
    title: string;
    value: string;
};

const StatisticsItem = ({
    className,
    image,
    title,
    value,
}: StatisticsItemProps) => (
    <div className={`md:flex dark:text-n-7 ${className || ""}`}>
        <div className="flex justify-center items-center w-10 h-10 mb-6 rounded-xl bg-n-1 shadow-2 md:shrink-0">
            <Image className="w-6" src={image} width={24} height={24} alt="" />
        </div>
        <div className="md:pl-6">
            <div className="mb-1 text-base-1 font-semibold">{title}</div>
            <div className="text-h2 2xl:text-h4 xl:text-h3 lg:text-h5 md:text-h4">
                {value}
            </div>
        </div>
    </div>
);

export default StatisticsItem;

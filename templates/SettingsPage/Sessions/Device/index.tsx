import Image from "@/components/Image";
import Icon from "@/components/Icon";

type DeviceProps = {
    item: any;
};

const Device = ({ item }: DeviceProps) => (
    <div className="flex items-start py-6 border-t border-n-3 md:flex-wrap dark:border-n-5">
        <div className="flex justify-center items-center shrink-0 w-12 h-12 px-2 bg-n-3 rounded-xl dark:bg-n-5">
            <Image
                className="w-full"
                src={item.image}
                width={32}
                height={32}
                alt=""
            />
        </div>
        <div className="grow pl-4 md:w-[calc(100%-3rem)]">
            <div className="mb-1 text-base-1 font-semibold text-n-7 dark:text-n-2">
                {item.title}
            </div>
            <div className="text-base-2 text-n-4">
                <p>{item.address}</p>
                <p>{item.date}</p>
            </div>
        </div>
        <button className="btn-stroke shrink-0 ml-4 md:w-full md:ml-0 md:mt-5">
            <span>Revoke</span>
            <Icon name="trash-1" />
        </button>
    </div>
);

export default Device;

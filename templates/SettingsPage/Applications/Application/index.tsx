import Image from "@/components/Image";
import Icon from "@/components/Icon";

type ApplicationProps = {
    item: any;
};

const Application = ({ item }: ApplicationProps) => (
    <div className="group flex items-center py-6 border-t border-n-3 cursor-pointer dark:border-n-5 md:flex-wrap">
        <div className="w-12 shrink-0">
            <Image
                className="w-full rounded-xl"
                src={item.image}
                width={48}
                height={48}
                alt=""
            />
        </div>
        <div className="grow px-4 md:w-[calc(100%-3rem)] md:pr-0">
            <div className="text-base-1 font-semibold">{item.title}</div>
            <div className="text-small text-n-4/75">{item.version}</div>
        </div>
        <button className="btn-stroke shrink-0 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 xl:visible xl:opacity-100 md:w-full md:mt-4">
            <span>Deauthorize</span>
            <Icon name="trash-1" />
        </button>
    </div>
);

export default Application;

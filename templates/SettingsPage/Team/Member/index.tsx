import Image from "@/components/Image";
import Icon from "@/components/Icon";

type MemberProps = {
    item: any;
};

const Member = ({ item }: MemberProps) => {
    return (
        <div className="group relative flex items-center py-6 border-t border-n-3 cursor-pointer xl:cursor-default dark:border-n-5 md:flex-wrap">
            <div className="relative w-12 h-12 shrink-0">
                <Image
                    className="rounded-full object-cover"
                    src={item.avatar}
                    fill
                    alt=""
                />
            </div>
            <div className="grow px-4 md:w-[calc(100%-3rem)] md:pr-0">
                <div className="text-base-1 font-semibold">{item.name}</div>
                <div className="text-small text-n-4/75">@{item.login}</div>
            </div>
            <button className="btn-stroke shrink-0 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 xl:visible xl:opacity-100 md:w-full md:mt-4">
                <span>Remove</span>
                <Icon name="trash-1" />
            </button>
        </div>
    );
};

export default Member;

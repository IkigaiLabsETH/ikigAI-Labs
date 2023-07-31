import Link from "next/link";

import Image from "@/components/Image";
import Icon from "@/components/Icon";

type MenuProps = {
    items: any;
};

const Menu = ({ items }: MenuProps) => (
    <div className="">
        {items.map((item: any) => (
            <Link
                className="group flex items-center mt-3 p-3 pr-6 rounded-2xl border border-n-3 font-semibold transition-all hover:border-transparent hover:shadow-2 dark:border-n-5 dark:hover:bg-n-7 dark:hover:shadow-4"
                href={item.url}
                key={item.id}
            >
                <div
                    className="flex justify-center items-center w-14 h-14 mr-5 rounded-[0.875rem]"
                    style={{ backgroundColor: item.color }}
                >
                    <Image
                        className="w-8"
                        src={item.image}
                        width={32}
                        height={32}
                        alt=""
                    />
                </div>
                <div className="mr-auto">{item.title}</div>
                <Icon
                    className="shrink-0 w-6 h-6 ml-5 fill-n-4 opacity-0 transition-opacity group-hover:opacity-100"
                    name="arrow-right"
                />
            </Link>
        ))}
    </div>
);

export default Menu;

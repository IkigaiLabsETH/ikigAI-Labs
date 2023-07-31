import Link from "next/link";
import Image from "@/components/Image";
import Users from "@/components/Users";
import Sorting from "./Sorting";

type TableProps = {
    items: any;
};

const Table = ({ items }: TableProps) => (
    <div className="border border-n-3 rounded-xl dark:border-n-5">
        <div className="flex px-8 py-5 border-b border-n-3 xl:px-4 xl:py-3 dark:border-n-5">
            <div className="grow">
                <Sorting title="Title" />
            </div>
            <div className="shrink-0 w-[8rem] mr-4 lg:mr-2 md:hidden">
                <Sorting title="Last modified" />
            </div>
            <div className="shrink-0 w-[8rem] mr-4 lg:hidden">
                <Sorting title="Created" />
            </div>
            <div className="shrink-0 w-[5.75rem]">
                <Sorting title="Members" />
            </div>
        </div>
        <div className="p-4 xl:px-2">
            {items.map((item: any) => (
                <Link
                    className="flex items-center px-4 py-5 rounded-xl transition-colors hover:bg-n-2 xl:px-2 xl:py-3 dark:hover:bg-n-7"
                    key={item.id}
                    href={item.url}
                >
                    <div className="flex items-center w-[calc(100%-23.75rem)] pr-4 text-base-1 font-semibold lg:w-[calc(100%-14.25rem)] md:w-[calc(100%-5.75rem)]">
                        <div
                            className="flex justify-center items-center shrink-0 w-10 h-10 mr-5 rounded-xl md:hidden"
                            style={{ backgroundColor: item.color }}
                        >
                            <Image
                                className="w-6"
                                src={item.image}
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div>
                        <div className="w-[calc(100%-4.5rem)] truncate md:w-full">
                            {item.title}
                        </div>
                    </div>
                    <div className="shrink-0 w-[8rem] mr-4 text-base-2 font-semibold text-n-4 lg:mr-2 md:hidden">
                        {item.lastModified}
                    </div>
                    <div className="shrink-0 w-[8rem] mr-4 text-base-2 font-semibold text-n-4 lg:hidden">
                        {item.created}
                    </div>
                    <div className="shrink-0 w-[5.75rem]">
                        <Users classUsersItem="-ml-3" items={item.members} />
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

export default Table;

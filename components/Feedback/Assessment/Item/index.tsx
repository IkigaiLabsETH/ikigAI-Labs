import Icon from "@/components/Icon";
import Play from "@/components/Play";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    return (
        <>
            <div className="table-row text-base-2 md:flex md:items-center">
                <div className="table-cell align-middle py-3 pl-10 border-t border-n-3 md:hidden dark:border-n-5">
                    {item.number}
                </div>
                <div className="table-cell align-middle py-3 pl-5 border-t border-n-3 text-color-5 md:shrink-0 md:w-1/2 md:pr-2 md:truncate dark:border-n-5">
                    {item.incorrect}
                </div>
                <div className="table-cell align-middle py-3 pl-5 border-t border-n-3 text-color-3 md:shrink-0 md:w-1/2 md:pl-0 md:pr-5 dark:border-n-5">
                    <div className="inline-flex items-center md:flex">
                        <Icon
                            className="shrink-0 w-5 h-5 mr-2 fill-color-3"
                            name="check-circle"
                        />
                        <div className="md:w-[calc(100%-1.25rem)] md:truncate">
                            {item.correct}
                        </div>
                    </div>
                </div>
                <div className="table-cell align-middle py-3 pl-5 pr-10 text-center border-t border-n-3 text-0 md:hidden dark:border-n-5">
                    <Play
                        className="w-6 h-6 bg-n-4/70 transition-colors hover:!bg-color-2 dark:bg-n-4/30"
                        classIcon="w-2 h-2 !fill-n-1"
                    />
                </div>
            </div>
        </>
    );
};

export default Item;

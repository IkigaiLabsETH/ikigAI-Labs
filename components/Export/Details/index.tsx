type DetailsProps = {
    items: any;
};

const Details = ({ items }: DetailsProps) => (
    <div className="flex flex-wrap mt-3">
        {items.map((item: any, index: number) => (
            <div
                className="basis-1/2 mt-3 pr-6 pt-3 border-t border-n-3 text-smaller first:basis-full dark:border-n-5"
                key={index}
            >
                <div className="text-n-4">{item.label}</div>
                <div className="font-bold">{item.value}</div>
            </div>
        ))}
    </div>
);

export default Details;

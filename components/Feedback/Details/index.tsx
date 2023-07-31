import Icon from "@/components/Icon";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className="flex justify-between mb-6 md:block">
        <div className="mr-5 md:mr-0">
            <div className="mb-4 text-h2 md:text-h3">Very good!</div>
            <div className="flex items-center">
                <div className="flex">
                    <Icon className="mr-2 fill-color-4" name="star" />
                    <Icon className="mr-2 fill-color-4" name="star" />
                    <Icon className="mr-2 fill-color-4" name="star" />
                    <Icon className="mr-2 fill-color-4" name="star" />
                    <Icon className="fill-n-4" name="star" />
                </div>
                <div className="ml-2 px-2 bg-n-3 rounded-lg text-base-2 font-semibold text-n-7 dark:bg-n-5 dark:text-n-2">
                    4.85
                </div>
            </div>
        </div>
        <button className="btn-dark mt-1 md:mt-4">
            <span>Download</span>
            <Icon className="" name="download" />
        </button>
    </div>
);

export default Details;

import Image from "@/components/Image";
import Item from "./Item";

const list = [
    {
        title: "Reading Comprehension",
        percent: 80,
    },
    {
        title: "Writing Skills",
        percent: 80,
    },
    {
        title: "Grammar and Vocabulary",
        percent: 80,
    },
];

const items = [
    {
        id: "0",
        number: 28,
        incorrect: "which",
        correct: "whose",
    },
    {
        id: "1",
        number: 42,
        incorrect: "getting annoyed",
        correct: "showing agreement",
    },
    {
        id: "2",
        number: 56,
        incorrect: "public",
        correct: "unknown",
    },
    {
        id: "3",
        number: 60,
        incorrect: "Newyork",
        correct: "Sydney",
    },
    {
        id: "4",
        number: 80,
        incorrect: "careless",
        correct: "reliable",
    },
];

type AssessmentProps = {};

const Assessment = ({}: AssessmentProps) => (
    <div className="mb-12 bg-n-2/50 rounded-[1.25rem] dark:bg-n-7/50">
        <div className="flex px-10 py-8 space-x-6 md:block md:px-5 md:space-x-0 md:space-y-6">
            {list.map((item, index) => (
                <div className="flex flex-col flex-1 md:flex-row" key={index}>
                    <div className="flex justify-center items-center w-10 h-10 mb-6 rounded-xl shadow-2 md:shrink-0 md:mb-0 md:mr-4 dark:bg-n-1">
                        <Image
                            className="w-6"
                            src="/images/annotation-check.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="mb-1 text-base-1 font-semibold md:text-base-2">
                            {item.title}
                        </div>
                        <div className="mt-auto text-h2 md:text-h3">
                            {item.percent}%
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="pb-3">
            <div className="table w-full md:block md:w-auto">
                <div className="table-row text-small text-n-4 md:flex">
                    <div className="table-cell pl-10 py-2 md:hidden">#</div>
                    <div className="table-cell pl-5 py-2">
                        Incorrect answer (5)
                    </div>
                    <div className="table-cell pl-5 py-2">Correct answer</div>
                    <div className="table-cell pl-5 pr-10 py-2 text-center md:hidden">
                        How
                    </div>
                </div>
                {items.map((x) => (
                    <Item item={x} key={x.id} />
                ))}
            </div>
        </div>
    </div>
);

export default Assessment;

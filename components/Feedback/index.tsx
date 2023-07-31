import Details from "./Details";
import Assessment from "./Assessment";

const comments = [
    {
        title: "Reading Comprehension",
        content:
            "Good at identifying main ideas and making inferences, but needs to pay more attention to details and expand vocabulary.",
    },
    {
        title: "Grammar and Vocabulary",
        content:
            "Good grasp of basic grammar and sentence structure, but needs to work on advanced grammar and vocabulary.",
    },
    {
        title: "Writing Skills",
        content:
            "Well-organized and coherent, but needs to improve grammar, vocabulary, and sentence structure.",
    },
    {
        title: "Suggestions for Improvement",
        content:
            "Practice using advanced grammar and vocabulary, proofread carefully for errors, and expand vocabulary through reading.",
    },
];

type FeedbackProps = {};

const Feedback = ({}: FeedbackProps) => (
    <div className="">
        <Details />
        <Assessment />
        <div className="mb-6 text-h4">Comment</div>
        <div className="flex flex-wrap -mt-6 -mx-3">
            {comments.map((comment, index) => (
                <div
                    className="w-[calc(50%-1.5rem)] mt-6 mx-3 lg:w-[calc(100%-1.5rem)]"
                    key={index}
                >
                    <div className="mb-2 text-h6">{comment.title}</div>
                    <div className="text-n-6 dark:text-n-1">
                        {comment.content}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Feedback;

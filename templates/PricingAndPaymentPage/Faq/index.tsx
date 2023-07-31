import Image from "@/components/Image";
import Item from "./Item";

import { faq } from "@/mocks/faq";

type FaqProps = {};

const Faq = ({}: FaqProps) => (
    <div className="max-w-[51.5rem] mx-auto">
        <div className="max-w-[20.2rem] mx-auto mb-12">
            <Image
                className="w-full"
                src="/images/illustration.png"
                width={363}
                height={300}
                alt=""
            />
        </div>
        <div className="mb-12 text-center text-h2 lg:text-h3">
            Frequently asked questions
        </div>
        <div>
            {faq.map((x) => (
                <Item item={x} key={x.id} />
            ))}
        </div>
    </div>
);

export default Faq;

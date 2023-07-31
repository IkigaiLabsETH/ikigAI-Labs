import Link from "next/link";
import Icon from "@/components/Icon";

type FootProps = {};

const Foot = ({}: FootProps) => (
    <div className="mt-auto">
        <div className="text-right">
            <div className="text-h4">Billed now: $29</div>
            <button
                className="mb-4 text-base-2 font-semibold text-primary-3 transition-colors hover:text-primary-4"
                type="button"
            >
                Apply promo code
            </button>
            <div className="mb-4 text-small text-n-4">
                By clicking &quot;Start Synapse Pro plan&quot;, you agree to be
                charged $399 every month, unless you cancel.
            </div>
            <button className="btn-gradient" type="submit">
                Start Synapse Pro plan
            </button>
        </div>
    </div>
);

export default Foot;

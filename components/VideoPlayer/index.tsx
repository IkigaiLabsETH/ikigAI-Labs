import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type VideoPlayerProps = {
    image?: any;
    logoHide?: boolean;
};

const VideoPlayer = ({ image, logoHide }: VideoPlayerProps) => (
    <div className="relative aspect-video overflow-hidden rounded-2xl md:aspect-[1.35]">
        {!logoHide && (
            <Link
                className="absolute top-5 left-5 z-1 inline-flex md:hidden"
                href="/"
            >
                <Image
                    src="/images/logo-dark.svg"
                    width={136}
                    height={42}
                    alt=""
                />
            </Link>
        )}
        <Image className="object-cover rounded-2xl" src={image} fill alt="" />
        <div className="absolute left-0 right-0 bottom-0 z-1 flex items-center px-6 py-4 bg-gradient-to-b from-n-7/0 to-n-7/30 md:px-4 md:py-3">
            <button className="group shrink-0 text-0 md:mr-auto">
                <Icon
                    className="w-6 h-6 fill-n-7 transition-colors group-hover:fill-primary-3"
                    name="pause"
                />
            </button>
            <div className="shrink-0 w-16 text-center text-small font-semibold md:hidden dark:text-n-7">
                2:56
            </div>
            <div className="relative grow h-1 rounded bg-n-7/25 md:hidden">
                <div
                    className="absolute top-0 left-0 bottom-0 rounded bg-primary-3"
                    style={{ width: "40%" }}
                ></div>
            </div>
            <div className="shrink-0 w-16 text-center text-small font-semibold md:hidden dark:text-n-7">
                4:30
            </div>
            <button className="group shrink-0 mr-5 text-0 md:hidden">
                <Icon
                    className="w-6 h-6 fill-n-7 transition-colors group-hover:fill-primary-3"
                    name="settings-fill"
                />
            </button>
            <button className="group shrink-0 mr-5 text-0 md:hidden">
                <Icon
                    className="w-6 h-6 fill-n-7 transition-colors group-hover:fill-primary-3"
                    name="volume"
                />
            </button>
            <button className="group shrink-0 text-0">
                <Icon
                    className="w-6 h-6 fill-n-7 transition-colors group-hover:fill-primary-3"
                    name="full-size"
                />
            </button>
        </div>
        <div className="absolute left-0 right-0 bottom-12 px-2 text-center lg:hidden">
            <div className="inline-block px-2 py-0.5 bg-n-1 rounded text-body-1 font-semibold dark:bg-n-6 dark:text-n-2">
                Synapse has created a new, innovative avatar creator.
            </div>
        </div>
    </div>
);

export default VideoPlayer;

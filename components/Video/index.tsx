import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Play from "@/components/Play";

type VideoProps = {};

const Video = ({}: VideoProps) => (
    <div className="relative aspect-video">
        <Image
            className="object-cover rounded-2xl"
            src="/images/video-pic.jpg"
            fill
            alt=""
        />
        <div className="absolute top-4 right-4 flex md:hidden">
            <div className="mr-2 px-4 py-2 bg-n-1 rounded-lg shadow-3 text-base-2 font-bold dark:bg-n-6">
                16:9
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-n-1 shadow-3 dark:bg-n-6">
                <div
                    className="w-6 h-6 rounded-md"
                    style={{ backgroundColor: "#E6E6EB" }}
                ></div>
            </div>
        </div>
        <Play
            className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-12 md:h-12"
            classIcon="md:w-4 md:h-4"
        />
        <button className="absolute right-4 bottom-4 w-10 h-10 gradient rounded-full md:hidden">
            <Icon className="fill-n-1" name="check" />
        </button>
    </div>
);

export default Video;

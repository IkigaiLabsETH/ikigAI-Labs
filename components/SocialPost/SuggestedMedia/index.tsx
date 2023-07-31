import Image from "@/components/Image";
import Icon from "@/components/Icon";

type SuggestedMediaProps = {};

const SuggestedMedia = ({}: SuggestedMediaProps) => (
    <div className="mt-2 p-3 border border-transparent">
        <div className="mb-6 text-base-1 font-bold text-n-1">
            Suggested media
        </div>
        <div className="flex overflow-auto scroll-smooth scrollbar-none -mr-6 after:w-6 after:shrink-0 md:-ml-6 md:before:w-6 md:before:shrink-0">
            <div className="relative shrink-0 w-[17rem] aspect-[1.33] mr-4 md:w-54">
                <Image
                    className="rounded-2xl object-cover"
                    src="/images/dribbble-post.jpg"
                    fill
                    alt=""
                />
            </div>
            <div className="relative flex flex-col justify-center items-center shrink-0 w-[17rem] bg-n-5 rounded-2xl md:w-54">
                <input
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                />
                <Icon className="w-8 h-8 fill-n-1" name="upload" />
                <div className="mt-3 text-base-2 font-semibold text-n-1">
                    Upload media
                </div>
            </div>
        </div>
        <div className="mt-6 text-small text-n-4">
            Accepted file types: JPG, MP4. Maximum file size: 50 MB.
        </div>
    </div>
);

export default SuggestedMedia;

import Image from "@/components/Image";
import SliderRange from "@/components/SliderRange";
import Icon from "@/components/Icon";

type AdjustProps = {};

const Adjust = ({}: AdjustProps) => {
    return (
        <>
            <div className="mb-9 text-base-1 font-semibold md:mb-6">Adjust</div>
            <div className="flex md:block">
                <div className="grow border border-n-3 rounded-xl overflow-hidden md:h-52">
                    <Image
                        className="w-full md:object-cover"
                        src="/images/photo-6.jpg"
                        width={400}
                        height={600}
                        alt=""
                    />
                </div>
                <div className="flex flex-col shrink-0 w-[17.5rem] ml-10 md:w-full md:mt-10 md:ml-0">
                    <div className="mb-auto space-y-5">
                        <SliderRange title="Exposure" />
                        <SliderRange title="Contrast" />
                        <SliderRange title="Highlights" />
                        <SliderRange title="Shadows" />
                        <SliderRange title="White" />
                        <SliderRange title="Blacks" />
                        <SliderRange title="Tint" />
                        <SliderRange title="Temperature" />
                    </div>
                    <div className="flex mt-6 space-x-3">
                        <button className="btn-gradient flex-1">Save</button>
                        <button className="btn-stroke flex-1">
                            <span>Reset</span>
                            <Icon name="send" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adjust;

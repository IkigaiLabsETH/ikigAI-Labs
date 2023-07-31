import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "@/components/Image";

type SliderProps = {
    items: any;
};

const Slider = ({ items }: SliderProps) => (
    <Splide
        className="slider-entry grow max-w-full"
        hasTrack={false}
        options={{
            arrows: false,
            gap: "1rem",
        }}
    >
        <SplideTrack className="flex grow min-h-full max-w-full">
            {items.map((item: any, index: number) => (
                <SplideSlide className="flex grow" key={index}>
                    <div className="flex w-full min-h-screen min-h-screen-ios py-8">
                        <div className="relative flex justify-center items-center grow p-8">
                            <Image
                                className="object-cover rounded-5xl"
                                src={item.image}
                                fill
                                alt=""
                            />
                            <div className="relative z-1 max-w-[30.25rem] w-full text-center text-h4 text-n-1">
                                {item.content}
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            ))}
        </SplideTrack>
        <ul className="splide__pagination splide__pagination_entry"></ul>
    </Splide>
);

export default Slider;

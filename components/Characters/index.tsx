import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { characters } from "@/mocks/characters";
import { useState } from "react";

type CharactersProps = {};

const Characters = ({}: CharactersProps) => {
    const [activeId, setActiveId] = useState<string>("1");

    return (
        <div className="relative">
            <div className="mb-6 text-h4 md:pt-1 md:text-h5">3D characters</div>
            <Splide
                className="!static"
                hasTrack={false}
                options={{
                    perPage: 4,
                    arrows: true,
                    pagination: false,
                    gap: "1.25rem",
                    breakpoints: {
                        1023: {
                            perPage: 2,
                        },
                        767: {
                            perPage: 1,
                        },
                    },
                }}
            >
                <SplideTrack>
                    {characters.map((character) => (
                        <SplideSlide key={character.id}>
                            <div
                                className={`relative aspect-square cursor-pointer after:absolute after:inset-0 after:border-4 after:border-primary-3 after:rounded-2xl after:opacity-0 after:transition-opacity ${
                                    activeId === character.id
                                        ? "after:!opacity-100"
                                        : ""
                                }`}
                                onClick={() => setActiveId(character.id)}
                            >
                                <Image
                                    className="object-cover rounded-2xl"
                                    src={character.image}
                                    fill
                                    alt=""
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </SplideTrack>
                <div className="splide__arrows splide__arrows_custom">
                    <button className="splide__arrow splide__arrow--prev">
                        <Icon name="arrow-right" />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <Icon name="arrow-right" />
                    </button>
                </div>
            </Splide>
        </div>
    );
};

export default Characters;

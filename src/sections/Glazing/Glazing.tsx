import {glazingTypes} from "../../data/glazingTypes";
import type {GlazingType} from "../../../types/glazing.ts";
import {useRef, useState, useEffect} from "react";

export const Glazing = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Проверка ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1300);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToIndex = (index: number) => {
        if (!carouselRef.current) return;
        const card = carouselRef.current.children[0] as HTMLElement;
        if (!card) return;

        const gap = 16;
        const scrollLeft = index * (card.offsetWidth + gap);

        carouselRef.current.scrollTo({left: scrollLeft, behavior: "smooth"});
        setScrollPosition(index);
    };

    // Прокрутка стрелками
    const scrollLeft = () => {
        if (scrollPosition > 0) {
            scrollToIndex(scrollPosition - 1);
        }
    };
    const scrollRight = () => {
        if (scrollPosition < glazingTypes.length - 1) {
            scrollToIndex(scrollPosition + 1);
        }
    };
    ;

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    Остекление балконов и лоджий
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <img src={"../../img/glazing/line.png"} alt=""/>
                </div>

                <div className="relative">
                    {/* Стрелка влево */}
                    {isMobile && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
                        >
                            <img
                                src="../../img/glazing/left_arrow.png"
                                alt="left"
                                className="w-4 h-6  sm:w-8 sm:h-8"
                            />
                        </button>
                    )}

                    {/* Карусель */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    >
                        {glazingTypes.map((type: GlazingType) => (
                            <div
                                key={type.id}
                                className="flex-shrink-0 w-full snap-start p-6 hover:shadow-md transition-shadow duration-300 text-center"
                            >
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32"
                                />
                                <h3 className="text-xl font-bold">{type.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Стрелка вправо */}
                    {isMobile && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
                        >
                            <img
                                src="../../img/glazing/right_arrow.png"
                                alt="right"
                                className="w-4 h-6 sm:w-8 sm:h-8"
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

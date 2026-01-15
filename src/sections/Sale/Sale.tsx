import {glazingTypes} from "../../data/glazingTypes.ts";
import type {GlazingType} from "../../../types/glazingType.ts";
import {useEffect, useRef, useState} from "react";
import {saleData} from "../../data/saleData.ts";
import type {SaleType} from "../../../types/saleType.ts";

export const Sale = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    // activeCard - индекс активной карточки (0, 1, 2, 3, 4)
    const [activeCard, setActiveCard] = useState<number>(0); // Изменено: убрал null, начинаем с 0

    // activeVariant - тип активного таба ('cold', 'warm', 'plastic', 'wood', 'aluminum')
    const [activeVariant, setActiveVariant] = useState<string>('cold');

    // Проверка ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1300);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ===================================================================
    // ПОЛУЧЕНИЕ ДАННЫХ АКТИВНОЙ КАРТОЧКИ
    // ===================================================================

    // Берём активную карточку по индексу
    const activeGlazingType = glazingTypes[activeCard];

    // Достаём массив доступных вариантов для этой карточки
    const availableVariants = activeGlazingType.variants;

    // Ищем все возможные варианты
    const coldVariant = availableVariants.find(v => v.type === 'cold');
    const warmVariant = availableVariants.find(v => v.type === 'warm');
    const plasticVariant = availableVariants.find(v => v.type === 'plastic');
    const woodVariant = availableVariants.find(v => v.type === 'wood');
    const aluminumVariant = availableVariants.find(v => v.type === 'aluminum');

    // ===================================================================
    // ОБРАБОТЧИКИ
    // ===================================================================

    // Обработчик скролла для отслеживания позиции
    const handleScroll = () => {
        if (!carouselRef.current) return;
        const card = carouselRef.current.children[0] as HTMLElement;
        if (!card) return;

        const gap = 16;
        const cardWidth = card.offsetWidth + gap;
        const currentScroll = carouselRef.current.scrollLeft;
        const newPosition = Math.round(currentScroll / cardWidth);

        setScrollPosition(newPosition);
        setActiveCard(newPosition);
    };

    const scrollToIndex = (index: number) => {
        if (!carouselRef.current) return;
        const card = carouselRef.current.children[0] as HTMLElement;
        if (!card) return;

        const gap = 16;
        const scrollLeft = index * (card.offsetWidth + gap);

        carouselRef.current.scrollTo({left: scrollLeft, behavior: "smooth"});
        setScrollPosition(index);
        setActiveCard(index);
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

    // Клик на карточку
    const handleCardClick = (index: number) => {
        console.log('🖱️ Клик на карточку:', glazingTypes[index].title);

        // Устанавливаем активную карточку
        setActiveCard(index);
        scrollToIndex(index);

        // Автоматически выбираем первый доступный вариант
        const newGlazingType = glazingTypes[index];
        const firstVariant = newGlazingType.variants[0];
        setActiveVariant(firstVariant.type);

        console.log('🔄 Автоматически выбран таб:', firstVariant.type);
    };

    return (

        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <img src={"../../img/glazing/line.png"} alt=""/>
                </div>
                <div className="relative mb-12">

                    {/* Стрелка влево */}
                    {isMobile && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
                            aria-label="Предыдущий тип остекления"
                        >
                            <img
                                src="../../img/glazing/left_arrow.png"
                                alt="left"
                                className="w-4 h-6 sm:w-8 sm:h-8"
                            />
                        </button>
                    )}

                    {/* Карусель */}
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className={`flex gap-4 scroll-smooth px-4 sm:px-0 ${
                            isMobile
                                ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                                : "justify-center flex-nowrap"
                        }`}
                    >
                        {saleData.map((type: SaleType, index: number) => (
                            <div
                                onClick={() => handleCardClick(index)}
                                className={`flex-shrink-0 p-6 transition-all duration-300 text-center cursor-pointer rounded-lg ${
                                    isMobile ? "snap-center" : ""
                                } ${
                                    activeCard === index
                                        ? "bg-blue-50 shadow-lg scale-105 border-2 border-blue-400"
                                        : "bg-white hover:bg-gray-50 hover:shadow-md border-2 border-transparent"
                                }`}
                                style={{
                                    width: isMobile ? "100%" : `${100 / glazingTypes.length}%`,
                                }}
                            >

                                <h3 className="text-xl font-bold text-gray-900">
                                    {type.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Стрелка вправо */}
                    {isMobile && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
                            aria-label="Следующий тип остекления"
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
)
}

import {glazingTypes} from "../../data/glazingTypes";
import type {GlazingType} from "../../../types/glazingType.ts";
import {useRef, useState, useEffect} from "react";

export const Glazing = () => {
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

    // ===================================================================
    // RENDER
    // ===================================================================

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    Остекление балконов и лоджий
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <img src={"../../img/glazing/line.png"} alt=""/>
                </div>

                {/* Карусель карточек */}
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
                        {glazingTypes.map((type: GlazingType, index: number) => (
                            <div
                                key={type.id}
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
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 object-contain"
                                />
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

                {/* Заголовок активной карточки */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                        {activeGlazingType.title}
                    </h3>
                </div>

                {/* Табы с вариантами остекления */}
                <div className={`grid gap-6 ${
                    // Подсчитываем сколько вариантов доступно
                    availableVariants.length === 1
                        ? 'grid-cols-1 max-w-2xl mx-auto'  // Один вариант - одна колонка по центру
                        : availableVariants.length === 2
                            ? 'grid-cols-1 lg:grid-cols-2'  // Два варианта - две колонки
                            : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'  // Три и более - три колонки
                }`}>

                    {/* ===== ТАБ ХОЛОДНОГО ОСТЕКЛЕНИЯ ===== */}
                    {coldVariant && (
                        <div
                            className={`bg-blue-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                                activeVariant === 'cold' ? 'ring-4 ring-blue-400' : ''
                            }`}
                            onClick={() => setActiveVariant('cold')}
                        >
                            <div className="p-6 text-blue-600">
                                <h3 className="text-2xl font-bold text-center mb-6">
                                    {coldVariant.title}
                                </h3>
                            </div>

                            <div className="px-6 pb-6">
                                <img
                                    src={coldVariant.image}
                                    alt="Холодное остекление"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />

                                <div className="space-y-3 mb-6">
                                    {coldVariant.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {coldVariant.price}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        {coldVariant.priceNote}
                                    </div>
                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                        РАССЧИТАТЬ СТОИМОСТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ===== ТАБ ТЕПЛОГО ОСТЕКЛЕНИЯ ===== */}
                    {warmVariant && (
                        <div
                            className={`bg-amber-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                                activeVariant === 'warm' ? 'ring-4 ring-amber-400' : ''
                            }`}
                            onClick={() => setActiveVariant('warm')}
                        >
                            <div className="p-6 text-amber-600">
                                <h3 className="text-2xl font-bold text-center mb-6">
                                    {warmVariant.title}
                                </h3>
                            </div>

                            <div className="px-6 pb-6">
                                <img
                                    src={warmVariant.image}
                                    alt="Теплое остекление"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />

                                <div className="space-y-3 mb-6">
                                    {warmVariant.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {warmVariant.price}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        {warmVariant.priceNote}
                                    </div>
                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                        РАССЧИТАТЬ СТОИМОСТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ===== ТАБ ПЛАСТИКОВОГО ОСТЕКЛЕНИЯ ===== */}
                    {plasticVariant && (
                        <div
                            className={`bg-green-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                                activeVariant === 'plastic' ? 'ring-4 ring-green-400' : ''
                            }`}
                            onClick={() => setActiveVariant('plastic')}
                        >
                            <div className="p-6 text-green-600">
                                <h3 className="text-2xl font-bold text-center mb-6">
                                    {plasticVariant.title}
                                </h3>
                            </div>

                            <div className="px-6 pb-6">
                                <img
                                    src={plasticVariant.image}
                                    alt="Пластиковое остекление"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />

                                <div className="space-y-3 mb-6">
                                    {plasticVariant.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {plasticVariant.price}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        {plasticVariant.priceNote}
                                    </div>
                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                        РАССЧИТАТЬ СТОИМОСТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ===== ТАБ ДЕРЕВЯННОГО ОСТЕКЛЕНИЯ ===== */}
                    {woodVariant && (
                        <div
                            className={`bg-orange-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                                activeVariant === 'wood' ? 'ring-4 ring-orange-400' : ''
                            }`}
                            onClick={() => setActiveVariant('wood')}
                        >
                            <div className="p-6 text-orange-600">
                                <h3 className="text-2xl font-bold text-center mb-6">
                                    {woodVariant.title}
                                </h3>
                            </div>

                            <div className="px-6 pb-6">
                                <img
                                    src={woodVariant.image}
                                    alt="Деревянное остекление"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />

                                <div className="space-y-3 mb-6">
                                    {woodVariant.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {woodVariant.price}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        {woodVariant.priceNote}
                                    </div>
                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                        РАССЧИТАТЬ СТОИМОСТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ===== ТАБ АЛЮМИНИЕВОГО ОСТЕКЛЕНИЯ ===== */}
                    {aluminumVariant && (
                        <div
                            className={`bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                                activeVariant === 'aluminum' ? 'ring-4 ring-gray-400' : ''
                            }`}
                            onClick={() => setActiveVariant('aluminum')}
                        >
                            <div className="p-6 text-gray-600">
                                <h3 className="text-2xl font-bold text-center mb-6">
                                    {aluminumVariant.title}
                                </h3>
                            </div>

                            <div className="px-6 pb-6">
                                <img
                                    src={aluminumVariant.image}
                                    alt="Алюминиевое остекление"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />

                                <div className="space-y-3 mb-6">
                                    {aluminumVariant.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-6">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {aluminumVariant.price}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        {aluminumVariant.priceNote}
                                    </div>
                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                        РАССЧИТАТЬ СТОИМОСТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
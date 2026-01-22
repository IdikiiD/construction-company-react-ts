import {saleData} from "../../data/saleData.ts";
import type {SaleType} from "../../../types/saleType.ts";

import {useCarousel} from "../../hooks/UseCarousel.ts";
import {useMobile} from "../../hooks/UseMobile.ts";

export const Sale = () => {

    const isMobile = useMobile(1300);
    const {
        carouselRef,
        activeCard,
        handleScroll,
        scrollLeft,
        scrollRight,
        handleCardClick
    } = useCarousel({initialIndex: 2});


    const activeSaleType = saleData[activeCard];
    const activeVariants = activeSaleType?.variants || [];

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <img src="../../img/glazing/line.png" alt=""/>
                </div>

                {/* Табы */}
                <div className="relative mb-12">
                    {isMobile && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
                            aria-label="Предыдущий тип"
                        >
                            <img
                                src="../../img/glazing/left_arrow.png"
                                alt="left"
                                className="w-4 h-6 sm:w-8 sm:h-8"
                            />
                        </button>
                    )}

                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className={`flex gap-0 scroll-smooth px-4 sm:px-0 ${
                            isMobile
                                ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                                : "justify-center"
                        }`}
                    >
                        {saleData.map((type: SaleType, index: number) => (
                            <button
                                key={type.type}
                                onClick={() => handleCardClick(index)}
                                className={`flex-shrink-0 px-6 py-4 transition-all duration-300 text-center cursor-pointer whitespace-nowrap ${
                                    isMobile ? "snap-center" : ""
                                } ${
                                    activeCard === index
                                        ? "border-b-4 border-blue-500"
                                        : "border-b-4 border-transparent hover:border-gray-300"
                                }`}
                                style={{
                                    minWidth: isMobile ? "100%" : "200px",
                                }}
                            >
                                <h3 className={`text-base sm:text-lg font-bold uppercase ${
                                    activeCard === index ? "text-blue-500" : "text-gray-700"
                                }`}>
                                    {type.title}
                                </h3>
                            </button>
                        ))}
                    </div>

                    {isMobile && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
                            aria-label="Следующий тип"
                        >
                            <img
                                src="../../img/glazing/right_arrow.png"
                                alt="right"
                                className="w-4 h-6 sm:w-8 sm:h-8"
                            />
                        </button>
                    )}
                </div>

                {/* Контент: изображение + варианты + форма */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Левая колонка: большое изображение */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src={activeSaleType.image}
                                alt={activeSaleType.title}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Средняя колонка: варианты для активной карточки */}
                    <div className="lg:col-span-1">
                        <div className="grid grid-cols-2 gap-4">
                            {activeVariants.map((variant) => (
                                <div
                                    key={variant.id}
                                    className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
                                >
                                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-100">
                                        <img
                                            src={variant.image}
                                            alt={variant.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="font-bold text-sm mb-2">{variant.title}</h4>
                                    <p className="text-blue-600 font-bold text-lg">{variant.price}</p>
                                    <p className="text-gray-500 text-xs">{variant.priceNote}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая колонка: форма */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-2 text-center">
                                Запишитесь сегодня на
                            </h3>
                            <h2 className="text-2xl font-extrabold mb-6 text-center">
                                БЕСПЛАТНЫЙ ЗАМЕР
                            </h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Введите ваше имя"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="Введите телефон"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg uppercase transition-colors shadow-md"
                                >
                                    ВЫЗВАТЬ ЗАМЕРЩИКА!
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    Ваши данные конфиденциальны
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
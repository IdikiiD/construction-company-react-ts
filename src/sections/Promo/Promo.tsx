import {FormInput} from "../../components/FormInput/FormInput";


export const Promo = () => {
    return (
        <div className="min-h-[70vh] bg-[url('/img/sale/bg.jpg')] bg-cover bg-center py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Левая колонка: Акция */}
                    <div className="lg:col-span-1">
                        <h2 className="text-5xl lg:text-6xl font-bold text-blue-500 mb-6">
                            АКЦИЯ - 60%
                        </h2>
                        <p className="text-xl lg:text-2xl font-medium text-gray-800 mb-2">
                            Успей сэкономить на остеклении!
                        </p>
                        <p className="text-xl lg:text-2xl font-medium text-gray-800 mb-8">
                            Только до 18 декабря!
                        </p>

                        {/* Таймер */}
                        <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                            <p className="text-center font-bold text-gray-700 mb-4">
                                ДО ЗАВЕРШЕНИЯ АКЦИИ:
                            </p>
                            <div className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-700 text-white text-3xl font-bold px-4 py-3 rounded">
                                        42
                                    </div>
                                    <span className="text-sm mt-1">Дней</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-700 text-white text-3xl font-bold px-4 py-3 rounded">
                                        12
                                    </div>
                                    <span className="text-sm mt-1">Часов</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-700 text-white text-3xl font-bold px-4 py-3 rounded">
                                        59
                                    </div>
                                    <span className="text-sm mt-1">Минут</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-700 text-white text-3xl font-bold px-4 py-3 rounded">
                                        48
                                    </div>
                                    <span className="text-sm mt-1">Секунд</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Центральная колонка: Изображение мастера */}
                    <div className="lg:col-span-1 flex justify-center">

                    </div>

                    {/* Правая колонка: Форма */}
                    <div className="lg:col-span-1">
                    <FormInput/>
                    </div>
                </div>
            </div>
        </div>
    );
}
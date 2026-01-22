export const Tab3 = () => {
    return (
        <div>
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Выбор формы балкона</h1>
                <p className="text-gray-500 text-sm sm:text-base">Выберите форму балкона и укажите размеры</p>
            </div>

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

                    <p className="text-xs text-gray-500 text-center mt-2">
                        Ваши данные конфиденциальны
                    </p>
                </form>
            </div>
        </div>
    );
}
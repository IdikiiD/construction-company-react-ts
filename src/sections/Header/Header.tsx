import logo from '../../img/header/logo.png'

export const Header = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
        <div className=" w-full mx-auto px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">


            {/* Логотип */}
            <div className="text-2xl font-bold shrink-0">
                <div className="h-12 w-32 bg-gray-200 flex items-center justify-center rounded">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </div>

            </div>
            <p className="text-xs  ">Остекление балконов и лоджий в Москве и Московской области</p>

            {/* Кнопка */}
            <button
                className="bg-white border-2 border-green-600 rounded-lg text-green-600 font-bold px-6 py-3
                   text-lg leading-snug shrink-0"
            >
                📝 Вызвать<br/>замерщика
            </button>

            {/* Часы */}
            <div className="text-center text-base md:text-left shrink-0">
                без выходных<br/>
                <span className="font-bold text-lg">9:00 - 18:00</span>
            </div>

            {/* Контакты */}
            <div className="text-center md:text-right shrink-0">
                <a href="tel:+74956466171" className="block font-bold text-xl">📞 +7 (495) 646-61-71</a>
                <a className="block text-blue-600 underline cursor-pointer text-base">Заказать обратный звонок</a>
            </div>

        </div>
    </header>
);
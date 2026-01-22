import logo from '../../img/header/logo.png'
import {handleSubmit} from "../../utils/handleSubmit.ts";
import {useState} from "react";
import {TabsNumber} from "../../components/Modal/Modal.tsx";

export const Header = () => {
    const [showTabs, setShowTabs] = useState<boolean>(false);

    return(
    <header className="bg-white shadow-md  top-0 z-50 w-full">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">


        {/* Логотип */}
            <div className="flex flex-col items-center md:flex-row md:items-center  gap-2 ">
                <div className="h-12 w-32 bg-gray-200 flex items-center justify-center rounded">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </div>
                <p className="text-sm md:text-sm max-w-[250px] leading-tight text-center md:text-left ">Остекление балконов и лоджий в Москве и Московской области</p>
            </div>


            {/* Кнопка */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setShowTabs(true);
                }}
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
        {showTabs && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50" onClick={() => setShowTabs(false)}/>
                <div className="relative z-10">
                    <TabsNumber onClose={() => setShowTabs(false)}  onClick={() => {
                        handleSubmit();
                        setShowTabs(false)
                    }}/>
                </div>
            </div>
        )}

    </header>

);
}
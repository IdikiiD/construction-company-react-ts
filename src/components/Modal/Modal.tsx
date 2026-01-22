import {useState, useEffect} from "react";
import {tabData} from "../../data/tabData.tsx";


export const TabsNumber = ({onClose, onClick}: { onClose?: () => void, onClick?: () => void, }) => {
    const [activeTab] = useState<string>('3');

    // Блокируем скролл body при монтировании компонента
    useEffect(() => {
        // Сохраняем текущую позицию скролла
        const scrollY = window.scrollY;

        // Блокируем скролл
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';

        // Восстанавливаем скролл при размонтировании
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollY);
        };
    }, []);


    return (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm">
            {/* Прокручиваемый контент */}
            <div className="relative h-full overflow-y-auto flex items-start sm:items-center justify-center p-2 sm:p-4">
                <div className="w-full max-w-3xl my-4 sm:my-8 relative">
                    {/* Кнопка закрытия */}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    )}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8">
                        {tabData.find((tab) => tab.id === activeTab)?.component}

                        {/* Кнопки навигации */}
                        <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8">



                            <button
                                onClick={onClick}
                                className="flex-1 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <span className="hidden sm:inline">✓ Отправить</span>
                                <span className="sm:hidden">✓</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


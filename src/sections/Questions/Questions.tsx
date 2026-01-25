import {useState} from "react";
import {TabsNumber} from "../../components/Modal/Modal";

export const Questions = () => {
    const [showTabs, setShowTabs] = useState<boolean>(false);

    return (
        <div className="py-12 bg-sky-400 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <div>
                    <div className="flex flex-col gap-7 md:flex-row items-center justify-center">
                        {/* Заголовок секции */}
                        <h2 className="text-2xl font-extrabold text-white text-center">
                            Остались вопросы?
                        </h2>

                        <button
                            onClick={() => setShowTabs(true)}
                            className="text-3xl font-extrabold text-white underline text-center hover:text-gray-100 transition-colors"
                        >
                            Спросите у нашего специалиста!
                        </button>
                    </div>
                </div>
            </div>

            {showTabs && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowTabs(false)}/>
                    <div className="relative z-10">
                        <TabsNumber onClose={() => setShowTabs(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};
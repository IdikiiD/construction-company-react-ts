import {useState} from "react";

import {useForm} from "react-hook-form";
import type {FormValues} from "../../types/TabType.ts";
import {useLockBodyScroll} from "../../hooks/UseLockBodyScroll";
import {useSendData} from "../../hooks/useSendData";
import {tabData} from "../../data/tabData";





export const TabsNumber = ({onClose}: { onClose?: () => void }) => {
    const [activeTab] = useState<string>('3');
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
    const { send, loading, error } = useSendData<{ success: boolean }>();

    useLockBodyScroll();

    const onSubmit = async (data: FormValues) => {
        try {
            const result = await send({
                url:  'http://localhost:3000/api/request',
                body: {
                    ...data,
                    tabId: activeTab,
                },
            });

            // Закрываем только если успешно
            if (result?.success) {
                onClose?.();
            }
        } catch (err) {
            console.error('Ошибка отправки:', err);
        }
    };
    const activeTabData = tabData.find(tab => tab.id === activeTab);





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
                        {activeTabData?.render({ register, setValue, errors })}
                        {error && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                Произошла ошибка при отправке. Попробуйте еще раз.
                            </div>
                        )}

                        {/* Кнопки навигации */}
                        <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8">



                            <button
                                onClick={handleSubmit(onSubmit)}
                                disabled={loading}
                                className="flex-1 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                {loading ? (
                                    <span>Отправка...</span>
                                ) : (
                                    <>
                                        <span className="hidden sm:inline">✓ Отправить</span>
                                        <span className="sm:hidden">✓</span>
                                    </>
                                )}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


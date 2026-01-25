import {useState} from "react";

import {useForm} from "react-hook-form";

import type {FormValues} from "../../types/TabType.ts";
import {useSendData} from "../../hooks/useSendData";
import {useLockBodyScroll} from "../../hooks/UseLockBodyScroll";
import {tabData} from "../../data/tabData";



export const Tabs = ({onClose, index}: { onClose?: () => void, index:string}) => {
    const [activeTab, setActiveTab] = useState<string>(index);
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<FormValues>({
        mode: 'onChange' // Добавьте это для валидации при изменении
    });
    const { send, loading, error } = useSendData<{ success: boolean }>();

    useLockBodyScroll();

    const onSubmit = async (data: FormValues) => {
        try {
            const result = await send({
                url: 'http://localhost:3000/api/request',
                body: {
                    ...data,
                    tabId: activeTab,
                },
            });

            if (result?.success) {
                onClose?.();
            }
        } catch (err) {
            console.error('Ошибка отправки:', err);
        }
    };

    const handleNext = async () => {
        let fieldsToValidate: (keyof FormValues)[] = [];

        if (activeTab === '1') {
            fieldsToValidate = ['balconyType', 'width', 'height'];
        } else if (activeTab === '2') {
            fieldsToValidate = ['glazingType', 'option'];
        } else if (activeTab === '3') {
            fieldsToValidate = ['name', 'phone'];
        }

        const isValid = await trigger(fieldsToValidate);

        if (!isValid) {
            return;
        }

        const currentIndex = tabData.findIndex(tab => tab.id === activeTab);
        if (currentIndex < tabData.length - 1) {
            setActiveTab(tabData[currentIndex + 1].id);
        }
    };

    const handlePrev = () => {
        const currentIndex = tabData.findIndex(tab => tab.id === activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabData[currentIndex - 1].id);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm">
            <div className="relative h-full overflow-y-auto flex items-start sm:items-center justify-center p-2 sm:p-4">
                <div className="w-full max-w-3xl my-4 sm:my-8 relative">
                    {onClose && (
                        <button
                            onClick={onClose}
                            disabled={loading}
                            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 disabled:opacity-50"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-lg">
                        {tabData.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`flex-1 px-2 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-white text-indigo-600 shadow-md scale-105'
                                        : parseInt(activeTab) > parseInt(tab.id)
                                            ? 'bg-white/30 text-white'
                                            : 'bg-white/10 text-white/50'
                                }`}
                            >
                                <div className="flex items-center justify-center gap-1 sm:gap-2">
                                    <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                        activeTab === tab.id
                                            ? 'bg-indigo-100 text-indigo-600'
                                            : parseInt(activeTab) > parseInt(tab.id)
                                                ? 'bg-white/50 text-white'
                                                : 'bg-white/20 text-white/70'
                                    }`}>
                                        {parseInt(activeTab) > parseInt(tab.id) ? '✓' : index + 1}
                                    </span>
                                    <span className="hidden sm:inline text-xs sm:text-sm">{tab.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8">
                        {tabData.find((tab) => tab.id === activeTab)?.render({ register, setValue, errors })}

                        {error && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                Произошла ошибка при отправке. Попробуйте еще раз.
                            </div>
                        )}

                        <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
                            {activeTab !== '1' && (
                                <button
                                    onClick={handlePrev}
                                    disabled={loading}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold text-sm sm:text-base py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                                >
                                    <span className="hidden sm:inline">← Назад</span>
                                    <span className="sm:hidden">←</span>
                                </button>
                            )}

                            {activeTab !== tabData[tabData.length - 1].id ? (
                                <button
                                    onClick={handleNext}
                                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="hidden sm:inline">Далее →</span>
                                    <span className="sm:hidden">→</span>
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={loading}
                                    className="flex-1 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
import {useState} from "react";
import {Snowflake, Sun} from "lucide-react";

import type {TabRenderProps} from "../../../types/TabType.ts";
import {glazingTypes} from "../../../data/glazingTypes";

export const Tab2 = ({ register, setValue, errors }: TabRenderProps) => {
    const [selectedGlazingType, setSelectedGlazingType] = useState('');
    const [isCold, setIsCold] = useState(false);
    const [isWarm, setIsWarm] = useState(false);

    return (
        <div>
            <input
                type="hidden"
                {...register('glazingType', {
                    required: 'Выберите тип остекления',
                })}
            />
            <input
                type="hidden"
                {...register('option', {
                    required: 'Выберите тип профиля',
                })}
            />

            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                    Тип остекления
                </h1>
                <p className="text-gray-500 text-sm sm:text-base">
                    Выберите тип остекления и его профиль
                </p>
            </div>

            {/* Glazing Type Dropdown */}
            <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Тип остекления
                </label>
                <select
                    value={selectedGlazingType}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        const value = e.target.value;
                        setSelectedGlazingType(value);
                        setValue('glazingType', value);
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none transition-colors text-base sm:text-lg bg-white cursor-pointer ${
                        errors.glazingType
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-gray-200 focus:border-indigo-500'
                    }`}
                >
                    <option value="">Выберите тип остекления</option>
                    {glazingTypes.map((type) => (
                        <option key={type.id} value={type.title}>
                            {type.title}
                        </option>
                    ))}
                </select>
                {errors.glazingType && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">
                        {errors.glazingType.message}
                    </p>
                )}
            </div>

            {/* Cold/Warm Options */}
            <div className="space-y-3 sm:space-y-4">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Профиль
                </label>

                {/* Cold Option */}
                <div
                    onClick={() => {
                        setIsCold(true);
                        setIsWarm(false);
                        setValue('option', 'Холодное');
                    }}
                    className={`border-2 rounded-xl sm:rounded-2xl p-3 sm:p-5 cursor-pointer transition-all duration-300 ${
                        isCold
                            ? 'border-blue-400 bg-blue-50 shadow-lg'
                            : errors.option
                                ? 'border-red-300 hover:border-red-400 hover:bg-red-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${
                                isCold ? 'bg-blue-100' : 'bg-gray-100'
                            }`}>
                                <Snowflake className={`w-5 h-5 sm:w-6 sm:h-6 ${isCold ? 'text-blue-500' : 'text-gray-400'}`} />
                            </div>
                            <span className={`text-base sm:text-lg font-semibold ${isCold ? 'text-blue-600' : 'text-gray-700'}`}>
                                Холодное
                            </span>
                        </div>
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded border-2 transition-all ${
                            isCold
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-gray-300'
                        }`}>
                            {isCold && (
                                <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {/* Warm Option */}
                <div
                    onClick={() => {
                        setIsWarm(true);
                        setIsCold(false);
                        setValue('option', 'Теплое');
                    }}
                    className={`border-2 rounded-xl sm:rounded-2xl p-3 sm:p-5 cursor-pointer transition-all duration-300 ${
                        isWarm
                            ? 'border-orange-400 bg-orange-50 shadow-lg'
                            : errors.option
                                ? 'border-red-300 hover:border-red-400 hover:bg-red-50'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${
                                isWarm ? 'bg-orange-100' : 'bg-gray-100'
                            }`}>
                                <Sun className={`w-5 h-5 sm:w-6 sm:h-6 ${isWarm ? 'text-orange-500' : 'text-gray-400'}`} />
                            </div>
                            <span className={`text-base sm:text-lg font-semibold ${isWarm ? 'text-orange-600' : 'text-gray-700'}`}>
                                Теплое
                            </span>
                        </div>
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded border-2 transition-all ${
                            isWarm
                                ? 'bg-orange-500 border-orange-500'
                                : 'border-gray-300'
                        }`}>
                            {isWarm && (
                                <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {errors.option && (
                    <p className="mt-2 text-sm text-red-500 text-center">
                        {errors.option.message}
                    </p>
                )}
            </div>
        </div>
    );
};
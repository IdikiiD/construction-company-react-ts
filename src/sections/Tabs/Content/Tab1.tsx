
import type {TabRenderProps} from "../../../types/TabType.ts";
import {useState} from "react";
import {windowDataForm} from "../../../data/windowDataForm";
import {windowDataDisplay} from "../../../data/windowDataDisplay";

export const Tab1 = ({ register, setValue, errors }: TabRenderProps) => {
    const [selectedType, setSelectedType] = useState<number | null>(null);

    return (
        <div>
            <input
                type="hidden"
                {...register('balconyType', {
                    required: 'Выберите тип балкона',
                })}
            />

            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                    Выбор формы балкона
                </h1>
                <p className="text-gray-500 text-sm sm:text-base">
                    Выберите форму балкона и укажите размеры
                </p>
            </div>

            {/* Balcony Types */}
            <div className="mb-4 sm:mb-6">
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                    {windowDataForm.map((type) => (
                        <div
                            key={type.id}
                            onClick={() => {
                                setSelectedType(type.id);
                                setValue('balconyType', type.name);
                            }}
                            className={`aspect-square border-2 rounded-xl cursor-pointer transition-all ${
                                selectedType === type.id
                                    ? 'border-indigo-500 bg-indigo-50'
                                    : errors.balconyType
                                        ? 'border-red-300 hover:border-red-400'
                                        : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            {type.preview}
                        </div>
                    ))}
                </div>
                {errors.balconyType && (
                    <p className="mt-2 text-sm text-red-500 text-center">
                        {errors.balconyType.message}
                    </p>
                )}
            </div>

            {/* Preview Image */}
            {windowDataDisplay.map((type) => (
                selectedType === type.id ? (
                    <div
                        key={type.id}
                        className="mb-4 sm:mb-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 flex items-center justify-center max-h-40 sm:max-h-64"
                    >
                        <div className="relative">
                            <img
                                src={type.imgSrc}
                                alt={`Балкон тип ${type.id}`}
                                className="w-[250px] h-[167px] rounded-lg mb-6"
                            />
                        </div>
                    </div>
                ) : null
            ))}

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Ширина
                    </label>
                    <div className="relative">
                        <input
                            {...register('width', {
                                required: 'Укажите ширину',
                                min: {
                                    value: 100,
                                    message: 'Минимум 100 мм'
                                },
                                max: {
                                    value: 10000,
                                    message: 'Максимум 10000 мм'
                                },
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'Только цифры'
                                }
                            })}
                            type="text"
                            placeholder="0"
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none transition-colors text-base sm:text-lg ${
                                errors.width
                                    ? 'border-red-500 focus:border-red-600'
                                    : 'border-gray-200 focus:border-indigo-500'
                            }`}
                        />
                        <span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm sm:text-base">
                            мм
                        </span>
                    </div>
                    {errors.width && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">
                            {errors.width.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Высота
                    </label>
                    <div className="relative">
                        <input
                            {...register('height', {
                                required: 'Укажите высоту',
                                valueAsNumber: true,
                                min: {
                                    value: 100,
                                    message: 'Минимум 100 мм'
                                },
                                max: {
                                    value: 10000,
                                    message: 'Максимум 10000 мм'
                                }
                            })}
                            type="number"
                            placeholder="0"
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none transition-colors text-base sm:text-lg ${
                                errors.height
                                    ? 'border-red-500 focus:border-red-600'
                                    : 'border-gray-200 focus:border-indigo-500'
                            }`}
                        />
                        <span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm sm:text-base">
                            мм
                        </span>
                    </div>
                    {errors.height && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">
                            {errors.height.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
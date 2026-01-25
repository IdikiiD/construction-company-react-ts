import type { TabRenderProps } from "../../../types/TabType.ts";

export const Tab3 = ({ register, errors }: TabRenderProps) => {
    return (
        <div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-center text-gray-700">
                    Запишитесь сегодня на
                </h3>
                <h2 className="text-xl sm:text-2xl font-extrabold mb-6 text-center text-gray-900">
                    БЕСПЛАТНЫЙ ЗАМЕР
                </h2>
                <div className="space-y-4">
                    <div>
                        <input
                            {...register('name', {
                                required: 'Введите ваше имя',
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно содержать минимум 2 символа'
                                }
                            })}
                            type="text"
                            placeholder="Введите ваше имя"
                            className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                                errors?.name
                                    ? 'border-red-500 focus:border-red-600'
                                    : 'border-gray-300 focus:border-blue-500'
                            }`}
                        />
                        {errors?.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register('phone', {
                                required: 'Введите номер телефона',
                                minLength: {
                                    value: 10,
                                    message: 'Телефон должен содержать минимум 10 цифр'
                                }
                            })}
                            type="tel"
                            placeholder="Введите телефон"
                            className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                                errors?.phone
                                    ? 'border-red-500 focus:border-red-600'
                                    : 'border-gray-300 focus:border-blue-500'
                            }`}
                        />
                        {errors?.phone && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-2">
                        Ваши данные конфиденциальны
                    </p>
                </div>
            </div>
        </div>
    );
};
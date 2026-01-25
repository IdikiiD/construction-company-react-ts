import {useForm} from "react-hook-form";
import type {FormValues} from "../../types/TabType.ts";
import {useServerPost} from "../../hooks/UseServerPost";


export const FormInput = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>();
    const {onSubmit, loading, error} = useServerPost(() => {

        reset();
    });

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-center text-gray-700">
                Запишитесь сегодня на
            </h3>
            <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
                БЕСПЛАТНЫЙ ЗАМЕР
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    {...register('name', {
                        required: 'Введите ваше имя',
                        minLength: {value: 2, message: 'Минимум 2 символа'}
                    })}
                    type="text"
                    placeholder="Введите ваше имя"
                    className={`w-full p-4 border rounded-lg focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                <input
                    {...register('phone', {
                        required: 'Введите телефон',
                        pattern: {
                            value: /^[\d\s\+\-\(\)]+$/,
                            message: 'Неверный формат телефона'
                        }
                    })}
                    type="tel"
                    placeholder="Введите телефон"
                    className={`w-full p-4 border rounded-lg focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}

                {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        Произошла ошибка. Попробуйте еще раз.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-5 px-6 rounded-lg uppercase transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'ОТПРАВКА...' : 'ВЫЗВАТЬ ЗАМЕРЩИКА!'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                    Ваши данные конфиденциальны
                </p>
            </form>
        </div>
    );
};
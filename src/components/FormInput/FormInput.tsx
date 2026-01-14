export const FormInput = () => (
    <div className="inset-0  bg-opacity-50 flex items-center justify-center  ">
        <div className="bg-white rounded-lg p-10 w-full max-w-md mx-4 ">
            <h2 className="text-xl font-bold mb-4 text-center">Запишитесь сегодня на <br/><span className='text-2xl'>Бесплатный замер</span>
            </h2>
            <form className="space-y-4 flex flex-col justify-center align-center gap-3">
                <div>
                    <input type="text" className="w-full h-16 px-4 border border-gray-300 rounded-md text-center hover:border-blue-400 focus:border-blue-500  outline-none transition-colors duration-300"
                           placeholder="Введите ваше имя"/>
                </div>
                <div>
                    <input type="tel"
                           className="w-full h-16 px-4 border border-gray-300 rounded-md text-center hover:border-blue-400 focus:border-blue-500  outline-none transition-colors duration-300"
                           placeholder="Введите ваш телефон"/>
                </div>

                <button type="submit" className=" w-full h-20  bg-yellow-500 text-white px-4 py-2 rounded">Отправить</button>
                <h6 className="text-xs font-bold mb-4 text-gray-400 text-center">Ваши данные конфиденциальны</h6>

            </form>
        </div>
    </div>
)


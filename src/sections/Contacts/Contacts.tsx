export const Contacts = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    Как нас найти
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <img src={"../../img/glazing/line.png"} alt=""/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:col-span-1">


                        {/* Карта с контактами */}
                        <div className="flex justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1234567890123!2d37.61763531592956!3d55.75582698055267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab1234567890%3A0xabcdef1234567890!2z0JrQuNC10LrRgdC60LjQuSDQv9C10YDQtdC90LjRjw!5e0!3m2!1sru!2sru!4v1616161616161!5m2!1sru!2sru"
                                width="600"
                                height="450"
                                style={{border: 0}}
                                allowFullScreen={false}
                                loading="lazy"
                                className="w-full h-96 rounded-lg shadow-lg"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>
                    </div>
                    <div className="lg:col-span-1 space-y-6 ml-10" >
                        <div >
                            <p className=" text-lg font-medium text-gray-700">
                                Юридический адрес:
                            </p>
                            <p className=" text-lg font-medium text-gray-900">
                                г. Москва, ул. Примерная, д. 1
                            </p>
                        </div>
                        <div>
                            <p className=" text-lg font-medium text-gray-700">
                                Фактический адрес:
                            </p>
                            <p className=" text-lg font-medium text-gray-900">
                                г. Москва, ул. Реальная, д. 2
                            </p>

                        </div>
                        <div>
                            <p className=" text-lg font-medium text-gray-700">
                                Телефон:
                            </p>
                            <p className=" text-lg font-medium text-gray-900">
                                +1 (234) 567-890
                            </p>

                        </div>
                        <div>
                            <p className=" text-lg font-medium text-gray-700">
                                E-mail:
                            </p>
                            <p className=" text-lg font-medium text-gray-900">
                                daskfjasdhf@gmail.com
                            </p>

                        </div>



                    </div>
                </div>
            </div>
        </div>)
}
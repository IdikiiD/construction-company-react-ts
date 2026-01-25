import {FormInput} from "../../components/FormInput/FormInput";


export const Hero = () => (
    <main className="min-h-[90vh] bg-[url('/img/main/bg.png')] bg-cover bg-center ">
        <div className="max-w-7xl mx-auto p-10 px-8 sm:px-4 lg:p-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full  ">
                <div>
                    <h1 className="text-4xl font-bold text-black  text-center md:text-left">
                        Остекление балконов "под ключ"<br/>за 12 800 рублей!
                    </h1>
                    <div
                        className="grid grid-cols-2 sm:grid-cols-[repeat(4,minmax(0,min-content))]  gap-5 mt-1 place-items-center">

                        <div className="relative w-24 h-32">
                            <img src="/img/main/icons/quality.png" alt=""
                                 className="absolute inset-0 w-full  object-contain"/>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white font-bold text-center text-sm leading-tight mt-5">
                                    Высокое <br/> качество
                                </p>
                            </div>
                        </div>

                        <div className="relative w-24 h-32">
                            <img src="/img/main/icons/time.png" alt=""/>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white font-bold text-center text-sm leading-tight mt-5 ">Быстрый <br/> монтаж
                                </p>
                            </div>
                        </div>

                        <div className="relative w-24 h-32">
                            <img src="/img/main/icons/quality.png" alt="" className="w-full  object-contain"/>
                            <div className="absolute inset-0 flex items-center justify-center px-1">
                                <p className="text-white font-bold text-center text-sm leading-tight mt-5">
                                    Гарантия <br/>3 года
                                </p>
                            </div>

                        </div>
                        <div className="relative w-24 h-32">
                            <img src="/img/main/icons/quality.png" alt="" className="w-full  object-contain"/>
                            <div className="absolute inset-0 flex items-center justify-center px-1">
                                <p className="text-white font-bold text-center text-sm leading-tight mt-5">
                                    Вывоз <br/> мусора
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
                <FormInput/>
            </div>

        </div>


    </main>
);

export const Payment = () => {

    //to do: динамическая верстка из массива способов оплаты
    return (
        <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок секции */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Вы можете оплатить наши услуги:
    </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:justify-between">
            {/* Наличный расчет */}
            <div className="flex flex-col items-center" >
                <img
                    src={"../../img/payment/wallet.png"}
                    alt="Наличный расчет"
                    className="w-20 h-20 mb-2"
                />
                <span className="text-lg font-medium text-gray-700">Наличный расчет</span>
            </div>

            {/* Безналичный расчет */}
            <div className="flex flex-col  items-center gap-5" >
                <img
                    src={"../../img/payment/credit-card.png"}
                    alt="Безналичный расчет"
                    className="w-20 h-20 mb-2"
                />
                <span className="text-lg font-medium text-gray-700">Безналичный расчет</span>
            </div>

            {/* Онлайн оплата */}
            <div className="flex flex-col items-center gap-5">
                <img
                    src={"../../img/payment/museum.png"}
                    alt="Онлайн оплата"
                    className="w-20 h-20 mb-2"
                />
                <span className="text-lg font-medium text-gray-700">Онлайн оплата</span>
            </div>
        </div>


</div>
</div>);
}
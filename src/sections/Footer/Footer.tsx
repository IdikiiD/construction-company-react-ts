export const Footer = () => {
    return (
        <footer className="bg-white">


            {/* Нижняя часть футера */}
            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Логотип */}
                        <div className="flex items-center">
                            <img
                                src="/img/header/logo.png"
                                alt="ИРВАС"
                                className="h-12"
                            />
                        </div>

                        {/* Контакты */}
                        <div className="flex flex-col items-center md:items-end gap-2">
                            <p className="text-lg font-bold text-gray-900">
                                +7 (495) 646-61-71
                            </p>
                            <a
                                href="mailto:info@irvasokna.ru"
                                className="text-blue-500 hover:underline"
                            >
                                info@irvasokna.ru
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
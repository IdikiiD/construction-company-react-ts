export const Header = () => (
    <header className="h-[10rem] bg-white shadow-md">
        <div className="grid grid-cols-12 items-center h-[10rem] max-w-7xl mx-auto px-4">

            {/* LOGO */}
            <div className="col-span-5 flex items-center">
                LOGO
            </div>

            {/* BUTTON */}
            <div className="col-span-2 flex items-center justify-center">
                <button
                    className="
            bg-white
            border-2 border-[#55a831]
            rounded-[1rem]
            text-[1.4rem] leading-[1.2]
            font-bold
            text-[#55a831]
            py-4 px-4 pl-20
            bg-no-repeat
          "
                    style={{
                        backgroundImage: 'url(/assets/img/header/edit.png)',
                        backgroundPosition: '1rem center'
                    }}
                >
                    Вызвать<br />замерщика
                </button>
            </div>

            {/* HOURS */}
            <div className="col-span-2 flex items-center gap-8">
                <img />
                <p className="text-[1.4rem] text-[#333] leading-[1.2]">
                    без выходных
                    <br />
                    <span className="block text-[1.8rem] font-bold">
            9:00 - 18:00
          </span>
                </p>
            </div>

            {/* CONTACTS */}
            <div className="col-span-3 flex items-center justify-end text-right">
                <div className="leading-[1.7]">
                    <a className="block text-[2.3rem] font-bold text-[#333]">
                        📞 +7 (495) 646-61-71
                    </a>
                    <a className="block text-[1.5rem] text-[#0089cd] underline cursor-pointer">
                        Заказать обратный звонок
                    </a>
                </div>
            </div>

        </div>
    </header>
);

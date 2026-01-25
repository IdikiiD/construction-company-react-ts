
import type {ExtendedImageType} from "../../types/imageGuaranteesType.ts";
import {images} from "../../data/garanteesData";


export const Guarantees = () => {
    return (
        <div className="py-12 bg-sky-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
                    МЫ ГАРАНТИРУЕМ!
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <img src={"../../img/guarantees/header_sub.png"} alt=""/>
                </div>
                {/* Галерея работ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image:ExtendedImageType) => (
                        <div
                            key={image.id}
                            className="overflow-hidden flex flex-col items-center cursor-pointer"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-[80px] h-[80px]  transform hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-center text-white font-bold mt-2">
                                {image.title}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
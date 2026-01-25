import {useState} from "react";
import {images} from "../../data/imageData";
import type {ImageType} from "../../types/imageType.ts";

export const Works = () => {
    const [selectedImage, setSelectedImage] = useState<ImageType  | null>(null);

    const handleImageClick = (image: ImageType) => {
        setSelectedImage(image);
    }
    const closeImage = () => {
        setSelectedImage(null);
    }



    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    Наши работы
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <img src={"../../img/glazing/line.png"} alt=""/>
                </div>
                {/* Галерея работ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image: ImageType) => (
                        <div id={image.id} onClick={() => handleImageClick(image)} className="overflow-hidden rounded-lg shadow-lg">

                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                {/* Модальное окно для увеличенного изображения */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={closeImage}
                    >
                        <div className="relative max-w-5xl max-h-full">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-[98vw] max-h-[98vh] w-auto h-auto object-contain rounded shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
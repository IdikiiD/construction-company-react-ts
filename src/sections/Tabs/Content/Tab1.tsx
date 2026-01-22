import {windowDataForm} from "../../../data/windowDataForm.tsx";
import {useState} from "react";
import {windowDataDisplay} from "../../../data/windowDataDisplay.ts";

export const Tab1 = () => {
    const [selectedType, setSelectedType] = useState<number | null>(null);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');



    return (
        <div>
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Выбор формы балкона</h1>
                <p className="text-gray-500 text-sm sm:text-base">Выберите форму балкона и укажите размеры</p>
            </div>

            {/* Balcony Types */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {windowDataForm.map((type) => (
                    <div
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`aspect-square border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center p-2 sm:p-3 ${
                            selectedType === type.id
                                ? 'border-indigo-500 bg-indigo-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                        }`}
                    >
                        {type.preview}
                    </div>
                ))}
            </div>
            {windowDataDisplay.map((type) => (
                selectedType === type.id ? (
                    <div className="mb-4 sm:mb-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 flex items-center justify-center max-h-40 sm:max-h-64">
                        <div className="relative">
                            <img
                                src={type.imgSrc}
                                className=" w-[250px] h-[167px]  rounded-lg mb-6"
                            />
                        </div>
                    </div>) : null

            ))}

            {/* Preview Image */}


            {/* Inputs */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Ширина</label>
                    <div className="relative">
                        <input
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            placeholder="0"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-base sm:text-lg"
                        />
                        <span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm sm:text-base">мм</span>
                    </div>
                </div>
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Высота</label>
                    <div className="relative">
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="0"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-base sm:text-lg"
                        />
                        <span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm sm:text-base">мм</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
import React, { useState } from 'react';

const ProductDisplayCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = [
        {
            id: 1,
            name: "PEANUT LOVER",
            brand: "CROOMIES",
            mainColor: "bg-yellow-400",
            accentColor: "bg-red-500",
            character: "🥜", // Placeholder for peanut character
            nutrition: [
                { value: "11-12G", label: "PROTEIN", bgColor: "bg-yellow-400", textColor: "text-black" },
                { value: "0G", label: "SUGAR", bgColor: "bg-pink-300", textColor: "text-black" },
                { value: "8-11G", label: "NET CARBS", bgColor: "bg-amber-800", textColor: "text-white" },
                { value: "4", label: "TASTY FLAVORS", bgColor: "bg-green-600", textColor: "text-white" }
            ]
        },
        {
            id: 2,
            name: "CHOCO BOOM",
            brand: "CROOMIES",
            mainColor: "bg-amber-600",
            accentColor: "bg-red-600",
            character: "🍫",
            nutrition: [
                { value: "10-11G", label: "PROTEIN", bgColor: "bg-yellow-400", textColor: "text-black" },
                { value: "2G", label: "SUGAR", bgColor: "bg-pink-300", textColor: "text-black" },
                { value: "9-12G", label: "NET CARBS", bgColor: "bg-amber-800", textColor: "text-white" },
                { value: "3", label: "TASTY FLAVORS", bgColor: "bg-green-600", textColor: "text-white" }
            ]
        },
        {
            id: 3,
            name: "HONEY CRUNCH",
            brand: "CROOMIES",
            mainColor: "bg-orange-400",
            accentColor: "bg-yellow-500",
            character: "🍯",
            nutrition: [
                { value: "9-10G", label: "PROTEIN", bgColor: "bg-yellow-400", textColor: "text-black" },
                { value: "5G", label: "SUGAR", bgColor: "bg-pink-300", textColor: "text-black" },
                { value: "12-15G", label: "NET CARBS", bgColor: "bg-amber-800", textColor: "text-white" },
                { value: "2", label: "TASTY FLAVORS", bgColor: "bg-green-600", textColor: "text-white" }
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const currentProduct = products[currentSlide];

    return (
        <div className="max-[990px]:w-[clamp(600px,100%,1000px)] w-full h-fit mx-auto !px-8  relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white !p-2 rounded-[12px] hover:bg-opacity-90 transition-all z-10 w-[44px] h-[44px] grid place-items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>

            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white !p-2 rounded-[12px] hover:bg-opacity-90 transition-all z-10 w-[44px] h-[44px] grid place-items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>

            </button>

            {/* Main Content */}
            <div className="text-center grid gap-4">
                <div className="w-[min(482px,100%)] h-[482px] flex items-center justify-center bg-gray-900/30  rounded-[20px] !mx-auto">
                    <span className="text-black font-bold text-xl">Product</span>
                </div>

                {/* Nutrition Info Badges */}
                <div className="flex justify-center gap-2 !mb-6 flex-wrap">
                    {currentProduct.nutrition.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.bgColor} ${item.textColor} !p-2 w-[94px] h-[94px] rounded-2xl font-bold text-center flex flex-col items-center justify-center gap-1`}
                        >
                            <div className="text-[24px] font-bold">{item.value}</div>
                            <div className="text-[14px] ">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center bg-white w-fit items-center !mx-auto !py-2 !px-3 rounded-full gap-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full bg-grey transition-all ${currentSlide === index
                                ? '!bg-black'
                                : 'bg-grey hover:bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDisplayCarousel;
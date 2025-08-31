import React from 'react'

const Pack = ({
    title,
    servingPrice,
    oldPrice,
    newPrice,
    badge,
    setSelected,
    mostPopular = false,
    className = ''
}) => {
    return (
        <div className={'relative w-full flex items-center gap-4 !p-2 border-3 border-grey rounded-[16px] ' + className}
        onClick={() => setSelected(title)}>
            <div className="w-[84px] h-[84px] grid place-items-center bg-gray-400/30 rounded-[12px]">
                <span className="text-black font-bold text-sm">Product</span>
            </div>

            <div className="flex flex-col flex-1 gap-1">
                <p className='font-bold text-[18px] leading-[20px]'>{title}</p>
                <p className='text-[14px] leading-[20px]'>{servingPrice}</p>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-[16px] leading-[24px] line-through">{oldPrice}</p>
                <p className="text-[18px] leading-[20px] text-green font-bold">{newPrice}</p>
                <p className="text-[12px] leading-[20px] bg-green text-white font-bold !py-1 !px-1.5 rounded-[4px]">{badge}</p>
            </div>
            {mostPopular && (
                <div className="absolute top-0 left-1/2 -translate-1/2 bg-orange text-white text-[12px] leading-[20px] font-bold rounded-[4px] !py-1 !px-1.5">
                    MOST POPULAR
                </div>
            )}
        </div>
    )
}

export default Pack
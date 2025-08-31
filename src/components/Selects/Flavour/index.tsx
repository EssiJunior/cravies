import React from 'react'

const Flavour = ({
    title,
    setSelected,
    isBestSeller = false,
    className = ''
}) => {
    return (
        <div className={'relative w-full flex items-center gap-4 border-3 border-grey rounded-[16px] ' + className}
            onClick={() => setSelected(title)}>
            <div className="w-[84px] h-[84px] grid place-items-center bg-gray-400/30 rounded-[12px_0_0_12px]">
                <span className="text-black font-bold text-sm">Product</span>
            </div>

            <div className="flex justify-start flex-col flex-1 gap-1">
                <h6 className='text-[20px] leading-[24px]'>{title}</h6>

                {
                    isBestSeller &&
                    <span className='text-[12px] bg-[#FBA474] rounded-[30px] font-bold !py-1 !px-2 gap-2.5 w-fit '>
                        Best seller
                        <span>❤️</span>
                    </span>
                }
            </div>

            <div className="grid place-items-center gap-2 w-[40px] h-[40px] bg-black rounded-[12px] !mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
        </div>
    )
}

export default Flavour
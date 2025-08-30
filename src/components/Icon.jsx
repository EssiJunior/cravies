import React from 'react'

const Icon = ({ className, icon, indicator, handleClick = () => { } }) => {
    return (
        <div className={'relative bg-orange text-white border-2 border-black !py-1 !px-2 !rounded-xl shadow-button cursor-pointer hover:scale-102 transition-all ease-in-out duration-300' + ' ' + className} onClick={handleClick}>
            <img src={icon} alt="" className='w-full h-full' />
            {
                indicator &&
                <span className='absolute -top-2 -right-2 bg-black text-white font-grotesk font-bold text-[12px] leading-[20px] text-center !py-0.5 !px-2.5 !rounded-full'>
                    {indicator}
                </span>
            }
        </div>
    )
}

export default Icon
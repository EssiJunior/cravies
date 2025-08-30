import React from 'react'

const Button = ({ className, text='Button', handleClick = () => {}}) => {
    return (
        <button className={'bg-green text-white border-2 border-black !py-4 !pt-6 !px-8 !rounded-xl font-wosker shadow-button uppercase font-normal text-[20px] leading-[20px] tracking-normal text-center cursor-pointer hover:scale-102 transition-all ease-in-out duration-300' + ' ' + className} onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button
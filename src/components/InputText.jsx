import React from 'react'
import { arrowRight } from '../assets/icons'

const InputText = ({placeHolder, type = 'text'}) => {
    return (
        <div className='relative'>
            <input type={type} placeholder={placeHolder} className='bg-white border-2 border-black !py-3 !px-6 !rounded-xl w-full'/>
            <div className="absolute bg-black right-2 top-2 bottom-2 rounded-[12px] !p-[6px] grid place-items-center cursor-pointer hover:scale-102 transition-all ease-in-out duration-300">
                <img src={arrowRight} alt="Arrow right" className="w-full h-full" />
            </div>
        </div>
    )
}

export default InputText
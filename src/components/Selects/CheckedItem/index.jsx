import React from 'react'
import { check } from '../../../assets/icons'

const CheckedItem = ({ text, textClassName=""}) => {
    return (
        <div className="flex gap-2 items-center">
            <div className='bg-black rounded-full !p-1'>
                <img src={check} alt="Check item" />
            </div>
            <span className={'font-medium text-[18px] leading-[28px] tracking-normal text-black'+" "+textClassName}>
                {text}
            </span>
        </div>
    )
}

export default CheckedItem
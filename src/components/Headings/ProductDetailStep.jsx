import React from 'react'

const ProductDetailStep = ({index, text}) => {
    return (
        <div className='flex gap-4'>
            <span className='w-[30px] h-[30px] rounded-full bg-black text-white grid place-items-center !py-1 !px-2'>{index}</span>
            <h5 className='text-[32px] leading-[36px] text-black'>{text}</h5>
        </div>
    )
}

export default ProductDetailStep
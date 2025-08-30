import React from 'react'
import Star from './Star'

const Testimonial = ({ className }) => {
    return (
        <div className={'flex w-[600px] !p-6 gap-6 border-3 border-black rounded-[20px]' + ' ' + className}>
            <div className="w-[240px] h-[280px] flex items-center justify-center border-3 border-black rounded-[20px] bg-black/20">
                <span className="text-black font-bold text-xl">Image
                </span>
            </div>


            <div className="flex flex-col gap-4">
                <h3>SARAH M.</h3>
                <div className="flex">
                    {
                        [...Array(5)].map((star, index) => (
                            <Star index={index} className={'bg-orange-yellow'} />
                        ))
                    }
                </div>
                <p>"Didn't expect to fall in love"</p>
            </div>

        </div>
    )
}

export default Testimonial
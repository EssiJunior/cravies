import React from 'react'
import CheckedItem from '../components/CheckedItem'
import Button from '../components/Button'
import Star from '../components/Star'
import { cup } from '../assets/images'

const Hero = () => {
    return (
        <section className='bg-yellow flex flex-col items-center justify-center !pt-30'>
            <h1 className="font-wosker font-normal text-[132px] leading-[120px] tracking-normal text-center uppercase text-orange bg-white !p-5 !pb-0 !mx-20">
                TASTED BAD
            </h1>

            <div className='relative w-full grid place-items-center gap-8 !mx-20'>
                <div className="absolute w-full h-full">

                </div>
                <h2 className="z-2 font-wosker font-normal text-[132px] leading-[120px] tracking-normal text-center uppercase text-orange !p-5 !pb-0">
                    FOR YOU. BUT ISN'T.
                </h2>
                <div className="flex items-center justify-center">
                    <div className='flex gap-8'>
                        <CheckedItem text={'Zero sugar'} />
                        <CheckedItem text={'Zero sugar'} />
                        <CheckedItem text={'Zero sugar'} />
                    </div>
                </div>
                <div>
                    <Button text="Découvrir tasties" />
                </div>
                <div className='flex items-center gap-3'>
                    <div className="flex gap-1">
                        {
                            [...Array(5)].map((_, index) => <Star key={index} />)
                        }
                    </div>
                    <p className='w-full'>RATED 4.9/5 BY 1,250+ HAPPY CUSTOMERS</p>
                </div>
                <img src={cup} alt="Cup" className='w-full' />
            </div>
        </section>
    )
}

export default Hero
import React from 'react'
import Button from '../components/Button'
import { cup } from '../assets/images'
import RateStat from '../components/RateStat'
import CheckedItems from '../components/Selects/CheckedItem/CheckedItems'

const checks = [
    "Zero sugar",
    "100% natural",
    "Gluten-free"
]
const Hero = () => {
    return (
        <section className='bg-yellow flex flex-col items-center justify-center !pt-30'>
            <h1 className="font-wosker font-normal text-[132px] leading-[120px] tracking-normal text-center uppercase text-orange bg-white !p-5 !pb-0 !mx-20">
                TASTED BAD
            </h1>

            <div className='relative w-full grid place-items-center gap-8 !mx-20'>
                <div className="absolute w-full h-full">
                    {/* HERO BGLOCK BG */}
                </div>
                <h2 className="z-2 font-wosker font-normal text-[132px] leading-[120px] tracking-normal text-center uppercase text-orange !p-5 !pb-0">
                    FOR YOU. BUT ISN'T.
                </h2>

                <div className="flex items-center justify-center">
                    <CheckedItems data={checks} />
                </div>

                <div>
                    <Button text="Découvrir tasties" />
                </div>

                <RateStat />
                <img src={cup} alt="Cup" className='w-full' />
            </div>
        </section>
    )
}

export default Hero
import React from 'react'
import Button from '../components/Button'
import { cup } from '../assets/images'
import RateStat from '../components/RateStat'
import CheckedItems from '../components/Selects/CheckedItem/CheckedItems'
import HeroHeading from '../components/Headings/Hero'

const checks = [
    "Zero sugar",
    "100% natural",
    "Gluten-free"
]
const Hero = () => {
    return (
        <section className='bg-yellow flex flex-col items-center justify-center !pt-30 max-sm:!pt-10'>
            <HeroHeading text={"TASTED BAD"} className={'bg-white !p-5 !pb-0 !mx-20 max-sm:!mx-3'} />

            <div className='relative w-full grid place-items-center gap-8 !mx-20 max-sm:!mx-3 bg-white'>
                <div className="absolute inset-0">
                    {/* Left yellow curve */}
                    <div
                        className="max-sm:hidden sm:absolute left-0 top-0 w-96 h-full bg-yellow"
                        style={{
                            clipPath: 'polygon(0 0, 20% 0, 0 100%, 0 100%)'
                        }}
                    />
                    <div
                        className="sm:hidden max-sm:absolute left-0 top-0 w-96 h-full bg-yellow"
                        style={{
                            clipPath: 'polygon(0 0, 10% 0, 0 100%, 0 100%)'
                        }}
                    />

                    {/* Right yellow curve */}
                    <div
                        className="max-sm:hidden sm:absolute right-0 top-0 w-96 h-full bg-yellow"
                        style={{
                            clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 100% 100%)'
                        }}
                    />
                    <div
                        className="sm:hidden max-sm:absolute right-0 top-0 w-96 h-full bg-yellow"
                        style={{
                            clipPath: 'polygon(90% 0, 100% 0, 100% 100%, 100% 100%)'
                        }}
                    />
                </div>

                <HeroHeading text={"FOR YOU. BUT ISN'T."} />

                <div className="flex items-center justify-center">
                    <CheckedItems data={checks} />
                </div>

                <div>
                    <Button text="Découvrir tasties" />
                </div>

                <RateStat />
            </div>
            <img src={cup} alt="Cup" className='w-full' />
        </section>
    )
}

export default Hero
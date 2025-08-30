import React from 'react'
import Button from '../components/Button'
import Spoiler from '../components/Spoiler';
import Testimonial from '../components/Testimonial';

const Testimonials = () => {
    return (
        <section className='container-border overflow-hidden grid place-items-center gap-12 !py-25 !px-20 bg-white'>
            <div className="flex w-full justify-between">
                <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-center uppercase text-black !mt-4">
                    CREREALS, FEELINGS, CHAOS.
                </h2>
                <Button text='Build your bundle' className={'bg-orange'}/>
            </div>

            <div className="flex overflow-hidden gap-10 justify-center my-8">
                {[...Array(5)].map((gravies, index) => (
                    <Testimonial key={index} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials
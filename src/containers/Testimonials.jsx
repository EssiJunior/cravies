import React from 'react'
import Button from '../components/Button'
import Spoiler from '../components/Spoiler';
import Testimonial from '../components/Testimonial';
import SectionHeading from '../components/Headings/Section';

const Testimonials = () => {
    return (
        <section className='container-border overflow-hidden grid place-items-center gap-12 !py-25 !px-20 max-sm:!py-13 max-sm:!px-4  bg-white'>
            <div className="flex w-full justify-between">
                <SectionHeading text={'CREREALS, FEELINGS, CHAOS.'} className={"sm:text-start"} />

                <Button text='Build your bundle' className={'bg-orange max-md:hidden'} />
            </div>

            <div className="flex overflow-hidden gap-10 justify-center my-8">
                {[...Array(5)].map((gravies, index) => (
                    <Testimonial key={index} />
                ))}
            </div>

            <Button text='Build your bundle' className={'bg-orange max-md:flex hidden'} />
        </section>
    )
}

export default Testimonials
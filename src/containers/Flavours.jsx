import React from 'react'
import Button from '../components/Button'
import Flavour from '../components/Flavour'
import SectionHeading from '../components/Headings/Section';

const FlavourData = [
    { text: 'Honey crunch', className: 'bg-orange' },
    { text: 'Chocolate heaven', className: 'bg-pink' },
    { text: 'Peanut crazy', className: 'bg-green' },
    { text: 'Tropical twist', className: 'bg-orange-yellow' },
];
const Flavours = () => {
    return (
        <section className='grid place-items-center gap-12 !py-25 !px-20 max-sm:!py-13 max-sm:!px-4 '>
            <SectionHeading text={'PICK YOUR FLAVOUR'} />

            <div className="flex flex-wrap gap-6 justify-center my-8">
                {FlavourData.map((flavour, index) => (
                    <Flavour key={index} text={flavour.text} className={flavour.className} />
                ))}
            </div>

            <div>
                <Button text='Build your bundle' />
            </div>
        </section>
    )
}

export default Flavours
import React from 'react'
import Button from '../components/Button'
import Gravie from '../components/Gravie';
import SectionHeading from '../components/Headings/Section';

const IngredientsData = [
    { text: 'High protein', description: 'With 11g per bowl With 11g per bowl With 11g per bowl With 11g per bowl With 11g per bowl ' },
    { text: 'Low carb', description: 'With 11g per bowl' },
    { text: 'Zero sugar', description: 'With 11g per bowl' },
    { text: 'Zero sugar', description: 'With 11g per bowl' }
];

const Ingredients = () => {
    return (
        <section className='overflow-hidden container-border grid place-items-center gap-12 !py-25 !px-20 max-sm:!py-13 max-sm:!px-4  bg-orange-yellow'>

            <SectionHeading text={'MADE WITH HIGH QUALITY, NATURAL INGREDIENTS.'} className={"text-green"} />


            <div className="flex overflow-hidden gap-10 justify-center my-8">
                {IngredientsData.map((gravies, index) => (
                    <Gravie key={index} text={gravies.text} description={gravies.description} />
                ))}
            </div>
        </section>
    )
}

export default Ingredients
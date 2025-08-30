import React from 'react'
import Button from '../components/Button'
import Gravie from '../components/Gravie';

const GraviesData = [
    { text: 'High protein', description: 'With 11g per bowl', points: ['Feel full for longer', 'Supports muscle growth', 'Aids in weight management'] },
    { text: 'Low carb', description: 'With 11g per bowl', points: ['Feel full for longer', 'Supports muscle growth', 'Aids in weight management'] },
    { text: 'Zero sugar', description: 'With 11g per bowl', points: ['Feel full for longer', 'Supports muscle growth', 'Aids in weight management'] }
];

const WhyGravies = () => {
    return (
        <section className='container-border grid place-items-center gap-12 !py-25 !px-20 bg-orange'>
            <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-center uppercase text-white">
                SO WHY GRAVIES ?
            </h2>

            <div className="flex  gap-10 justify-center my-8 [&>div]:-rotate-[2deg] [&>div:nth-child(2)]:rotate-[2deg]">
                {GraviesData.map((gravies, index) => (
                    <Gravie key={index} text={gravies.text} description={gravies.description} points={gravies.points} />
                ))}
            </div>

            <div>
                <Button text='Build your bundle' />
            </div>
        </section>
    )
}

export default WhyGravies
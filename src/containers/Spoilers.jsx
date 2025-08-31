import React from 'react'
import Button from '../components/Button'
import Gravie from '../components/Gravie';
import Spoiler from '../components/Spoiler';

const Spoilers = () => {
    return (
        <section className='container-border overflow-hidden grid place-items-center gap-12 !py-25 !px-20 max-sm:!py-13 max-sm:!px-4  bg-green'>
            <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-center uppercase text-white">
                SPOILER: THEY DIDN'T STOP AT ONE BOWL.
            </h2>

            <div className="flex overflow-hidden gap-10 justify-center my-8">
                {[...Array(5)].map((gravies, index) => (
                    <Spoiler key={index} />
                ))}
            </div>
        </section>
    )
}

export default Spoilers
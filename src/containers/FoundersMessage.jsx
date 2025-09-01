import React from 'react'
import ImageCard from '../components/ImageCard'
import Button from '../components/Button'

const FoundersMessage = () => {
    return (
        <section className='container-border grid grid-cols-2 max-[990px]:grid-cols-1 gap-20 bg-pink !py-25 !px-20 max-sm:!py-13 max-sm:!px-4  h-full'>
            <div className="grid gap-8 max-w-[clamp(600px,100%,1000px)] max-md:order-2">
                <p className='text-[18px] leading-[20px] font-bold'>FOUNDERS MSG</p>
                <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-start uppercase text-black">
                    MISS YOUR CEREAL CHILDHOOD?
                </h2>
                <p className='text-[18px] leading-[20px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non fugit quo dolor accusamus commodi quis veritatis ad provident ex magni? Itaque sunt maxime voluptatem reprehenderit ullam cupiditate voluptas possimus nesciunt autem impedit, blanditiis ipsa quia sequi deleniti ducimus consequatur, numquam illum voluptatum fuga! Laudantium accusamus, quam qui consequuntur perspiciatis sequi!
                </p>
                <p className='text-[18px] leading-[20px] font-bold'>- ALEX, FOUNDER OF CRAVIES</p>
                <div>
                    <Button text='Build your bundle' />
                </div>
            </div>
            <ImageCard className={'max-md:order-1'}/>

        </section>
    )
}

export default FoundersMessage
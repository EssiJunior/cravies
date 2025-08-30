import React from 'react'
import ImageCard from '../components/ImageCard'
import DescriptionCard from '../components/DescriptionCard';

const plans = [
    {
        id: 1,
        title: "ALWAYS IN YOUR CUPBOARD",
        description: "Because running out of cereal should be illegal. We've got your back (and your breakfast).",
        className: "bg-orange"
    },
    {
        id: 2,
        title: "CHEAPER, SMARTER, BETTER-LOOKING",
        description: "Get up to 20% off. Yes, twenty. Percent. Off. That's cereal economics.",
        className: "bg-green",
    },
    {
        id: 3,
        title: "YOU'RE IN CHARGE",
        description: "Pause it. Cancel it. Switch flavors.\nIt bends to your will like a very crunchy servant.",
        className: "bg-brown"
    }
];

const Subscription = () => {
    return (
        <section className='container-border grid grid-cols-2 max-[990px]:grid-cols-1 gap-20 bg-white !py-25 !px-20 h-full'>
            <ImageCard />
            <div className="grid gap-12 w-[min(600px,100%)]">
                <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-start uppercase text-black">
                    THE CRAVIES SUBSCRIPTION. IT'S KIND OF GENIUS.
                </h2>
                <div className="grid gap-4">
                    {
                        plans.map(plan => (
                            <DescriptionCard key={plan.id} id={plan.id} title={plan.title} description={plan.description} className={plan.className} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Subscription
import React from 'react'
import Hero from '../containers/Hero'
import Flavours from '../containers/Flavours'
import WhyGravies from '../containers/WhyGravies'
import Spoilers from '../containers/Spoilers'
import FoundersMessage from '../containers/FoundersMessage'
import Testimonials from '../containers/Testimonials'
import ImageWithPoints from '../containers/ImageWithPoints'

const subscription = [
    {
        id: 1,
        title: "ALWAYS IN YOUR CUPBOARD",
        description: "Because running out of cereal should be illegal. We've got your back (and your breakfast).",
        className: "!bg-orange"
    },
    {
        id: 2,
        title: "CHEAPER, SMARTER, BETTER-LOOKING",
        description: "Get up to 20% off. Yes, twenty. Percent. Off. That's cereal economics.",
        className: "!bg-green",
    },
    {
        id: 3,
        title: "YOU'RE IN CHARGE",
        description: "Pause it. Cancel it. Switch flavors.\nIt bends to your will like a very crunchy servant.",
        className: "!bg-brown"
    }
];


const Home = () => {
    return (
        <main className='container'>
            <Hero/>
            <Flavours />
            <WhyGravies />
            <Spoilers />
            <ImageWithPoints title={"THE CRAVIES SUBSCRIPTION. IT'S KIND OF GENIUS."} data={subscription}/>
            <FoundersMessage />
            <Testimonials />
        </main>
    )
}

export default Home
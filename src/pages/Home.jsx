import React from 'react'
import Hero from '../containers/Hero'
import Flavours from '../containers/Flavours'
import WhyGravies from '../containers/WhyGravies'
import Spoilers from '../containers/Spoilers'
import Subscription from '../containers/Suscription'
import FoundersMessage from '../containers/FoundersMessage'
import Testimonials from '../containers/Testimonials'

const Home = () => {
    return (
        <div className='container'>
            <Hero/>
            <Flavours />
            <WhyGravies />
            <Spoilers />
            <Subscription />
            <FoundersMessage />
            <Testimonials />
        </div>
    )
}

export default Home
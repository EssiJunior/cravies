import React from 'react'
import Hero from '../containers/Hero'
import Flavours from '../containers/Flavours'
import WhyGravies from '../containers/WhyGravies'
import Spoilers from '../containers/Spoilers'

const Home = () => {
    return (
        <div className='container'>
            <Hero/>
            <Flavours />
            <WhyGravies />
            <Spoilers />
        </div>
    )
}

export default Home
import React from 'react'
import Hero from '../containers/Hero'
import Flavours from '../containers/Flavours'
import WhyGravies from '../containers/WhyGravies'

const Home = () => {
    return (
        <div className='container'>
            <Hero/>
            <Flavours />
            <WhyGravies />
        </div>
    )
}

export default Home
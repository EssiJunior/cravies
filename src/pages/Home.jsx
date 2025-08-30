import React from 'react'
import Hero from '../containers/Hero'
import Flavours from '../containers/Flavours'

const Home = () => {
    return (
        <div className='container'>
            <Hero/>
            <Flavours />
        </div>
    )
}

export default Home
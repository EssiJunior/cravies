import React from 'react'
import Spoilers from '../containers/Spoilers'
import Ingredients from '../containers/Ingredients'

const Product = () => {
    return (
        <main className='container'>
            <Ingredients/>
            <Spoilers/>
        </main>
    )
}

export default Product
import React from 'react'
import Spoilers from '../containers/Spoilers'
import Ingredients from '../containers/Ingredients'
import ImageWithPoints from '../containers/ImageWithPoints'

const ingredients = [
    {
        title: "HIGH PROTEIN",
        description: "12g of protein per bowl",
        className: "!text-black !bg-white",
        titleClassName: "!text-green"
    },
    {
        title: "HIGH PROTEIN",
        description: "12g of protein per bowl",
        className: "!text-black !bg-white",
        titleClassName: "!text-brown"
    },
    {
        title: "HIGH PROTEIN",
        description: "12g of protein per bowl",
        className: "!text-black !bg-white",
        titleClassName: "!text-yellow"
    },
    {
        title: "HIGH PROTEIN",
        description: "12g of protein per bowl",
        className: "!text-black !bg-white",
        titleClassName: "!text-orange"
    },

]
const Product = () => {
    return (
        <main className='container'>
            <Ingredients/>
            <ImageWithPoints title={"YOUR FAVORITE CHILDHOOD CEREAL, ALL GROWN UP."} data={ingredients} className={"!bg-pink"} />
            <Spoilers/>
        </main>
    )
}

export default Product
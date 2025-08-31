import React from 'react'
import Spoilers from '../containers/Spoilers'
import Ingredients from '../containers/Ingredients'
import ImageWithPoints from '../containers/ImageWithPoints'
import Prerequisites from '../containers/Prerequesites'
import FAQ from '../containers/FAQ'
import Satisfied from '../containers/Satisfied'
import Comparatives from '../containers/Comparatives'
import ProductOverview from '../containers/ProductOverview'

const favorites = [
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
            <ProductOverview/>
            <ImageWithPoints title={"YOUR FAVORITE CHILDHOOD CEREAL, ALL GROWN UP."} data={favorites} className={"!bg-pink"} />
            <Ingredients/>
            <Prerequisites />
            <Comparatives/>
            <Spoilers/>
            <FAQ/>
            <Satisfied/>
        </main>
    )
}

export default Product
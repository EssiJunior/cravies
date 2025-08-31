import React from 'react'
import ImageCard from '../components/ImageCard'
import DescriptionCard from '../components/DescriptionCard';
import AccordionContainer from '../components/Accordion/AccordionContainer';
import RateStat from '../components/RateStat';
import ProductDetailStep from '../components/Headings/ProductDetailStep';
import Packs from '../components/Selects/Pack/Packs';
import Flavours from '../components/Selects/Flavour/Flavours';
import Button from '../components/Button';
import CircularVideo from '../components/CircularVideo';
import Frequencies from '../components/Selects/Frequency/Frequencies';
import ProductDisplayCarousel from '../components/ProductDisplayCaroussel';

const packsData = [
    {
        "title": "4-BOX pack",
        "servingPrice": "$1.19/serving",
        "oldPrice": "68,00$",
        "newPrice": "34$",
        "badge": "14%"
    },
    {
        "title": "8-BOX pack",
        "servingPrice": "$1.09/serving",
        "oldPrice": "136,00$",
        "newPrice": "87$",
        "badge": "-10%"
    },
    {
        "title": "12-BOX pack",
        "servingPrice": "$0.99/serving",
        "oldPrice": "204,00$",
        "newPrice": "119$",
        "badge": "10%",
        "mostPopular": true
    }
]
const flavoursData = [
    {
        "title": "CHOCO BOOM",
        "isBestSeller": true,
    },
    {
        "title": "COOKIES & CREAM",
        "isBestSeller": true,
    },
    {
        "title": "SCHOCO BOOM",
    },
    {
        "title": "SCHOCO BOOM",
    },
]
const frequenciesData = [
    {
        "title": "4-BOX pack",
        "oldPrice": "68,00$",
        "newPrice": "34$",
        "badge": "14%"
    },
    {
        "title": "12-BOX pack",
        "newPrice": "119$",
    }
]
const faqData = [
    {
        id: 1,
        question: "LA LIVRAISON EST-ELLE PAYANTE ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    },
    {
        id: 2,
        question: "POURQUOI CES CÉRÉALES SONT-ELLES PLUS CHÈRES QUE LES CÉRÉALES ORDINAIRES ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius."
    },
    {
        id: 3,
        question: "CES CÉRÉALES SONT-ELLES VÉGANES ?",
        answer: "Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    },
    {
        id: 4,
        question: "Y A-T-IL DES ALLERGÈNES DANS VOS CÉRÉALES ?",
        answer: "Sed volutpat ullamcorper aliquet."
    },
    {
        id: 5,
        question: "Y A-T-IL DES SUCRES AJOUTÉS DANS VOS CÉRÉALES ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    }
];
const videos = [
    "Ingredients",
    "How it's made",
    "Our story"
]

const ProductOverview = () => {

    return (
        <section className={'flex max-[990px]:flex-wrap gap-20 bg-orange !py-25 !px-20 max-sm:!py-13 max-sm:!px-4 h-full'}>


            <ProductDisplayCarousel />

            <div className={"max-[990px]:w-[clamp(600px,100%,1000px)] w-full mx-auto bg-white !p-12 rounded-[20px] border-3 border-black grid gap-8"}>
                <RateStat starsClassName={'bg-orange-yellow'} />

                <div className="grid gap-4">
                    <h2 className='text-[50px] leading-[50px]'>VAREITY PACK</h2>
                    <p className="text-[18px] leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad architecto, odit recusandae vero sint corrupti
                    </p>
                </div>

                <div className="step grid gap-4">
                    <ProductDetailStep index={1} text={'PICK YOUR PACK'} />
                    <Packs data={packsData} />
                </div>

                <div className="step grid gap-4">
                    <ProductDetailStep index={2} text={'PICK YOUR FLAVOURS'} />
                    <Flavours data={flavoursData} />
                </div>

                <div className="step grid gap-4">
                    <ProductDetailStep index={3} text={'PICK YOUR FREQUENCY'} />
                    <Frequencies data={frequenciesData} />
                </div>

                <Button text='ADD to cart' detail={'$29,00'} />

                <div className="flex justify-evenly items-center gap-4 ">
                    {
                        videos.map((video, index) => {
                            return <CircularVideo key={index} text={video} />
                        })
                    }
                </div>
                <div>
                    <AccordionContainer data={faqData} />
                </div>
            </div>
        </section>
    )
}

export default ProductOverview
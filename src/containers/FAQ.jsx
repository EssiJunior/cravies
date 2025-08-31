import React from 'react'
import ImageCard from '../components/ImageCard'
import DescriptionCard from '../components/DescriptionCard';
import AccordionContainer from '../components/Accordion/AccordionContainer';

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
    },
    {
        id: 6,
        question: "QUELLE EST LA SOURCE DE FIBRES DANS VOS CÉRÉALES ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius."
    },
    {
        id: 7,
        question: "CES CÉRÉALES SONT-ELLES VÉGANES ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    },
    {
        id: 8,
        question: "CES CÉRÉALES SONT-ELLES UNIQUEMENT POUR LE PETIT-DÉJEUNER ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. "
    },
    {
        id: 9,
        question: "LES ENFANTS ET LES ADOLESCENTS PEUVENT-ILS MANGER CES CÉRÉALES ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    },
    {
        id: 10,
        question: "LE GOÛT ET LA TEXTURE DES CÉRÉALES SONT-ILS VRAIMENT BONS ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    },
    {
        id: 11,
        question: "COMBIEN DE PROTÉINES Y A-T-IL DANS 100G DE VOS CÉRÉALES ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    },
    {
        id: 12,
        question: "COMMENT GARANTISSEZ-VOUS LA QUALITÉ DES INGRÉDIENTS UTILISÉS ?",
        answer: "Sed volutpat ullamcorper aliquet. Ut et diam nisl. Aliquam pharetra in elit ac finibus. Pellentesque semper aliquam dolor a varius. Ut lacinia mauris eu lectus interdum ultrices. Fusce feugiat tristique leo ut dignissim. In tempor pulvinar elit id sagittis."
    }
];

const FAQ = () => {

    return (
        <section className={'container-border flex max-[990px]:flex-wrap gap-20 bg-pink !py-25 !px-20 h-full'}>
            
            {/* TITLE AND DESCRIPTION - NEED HELP */}
            <div className="flex flex-col gap-12 max-[990px]:w-[clamp(600px,100%,1000px)] w-full ">
                <div className="grid gap-6">
                    <p className="font-grotesk font-bold text-[18px] leading-[20px] tracking-normal align-middle uppercase text-orange">
                        FREQUENTLY ASKED QUESTIONS
                    </p>
                    <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-start uppercase text-orange">
                        QUESTIONS?<br />WE ANSWER!
                    </h2>
                </div>
                <DescriptionCard title={'NEED HELP?'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."} className={'bg-orange-yellow !text-black max-[990px]:hidden'} />
            </div>

            <AccordionContainer data={faqData} withWrapper/>

            {/* NEED HELP - that shows on mobile */}
            <div className="max-[990px]:!flex flex-col gap-12 max-[990px]:w-[clamp(600px,100%,1000px)] hidden max-[]: w-full ">
                <DescriptionCard title={'NEED HELP?'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."} className={'bg-orange-yellow !text-black'} />
            </div>
        </section>
    )
}

export default FAQ
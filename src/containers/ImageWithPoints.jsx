import React from 'react'
import ImageCard from '../components/ImageCard'
import DescriptionCard from '../components/DescriptionCard';

const ImageWithPoints = ({title, data, className}) => {
    return (
        <section className={'container-border grid grid-cols-2 max-[990px]:grid-cols-1 gap-20 bg-white !py-25 !px-20  max-sm:!py-13 max-sm:!px-4  h-full'+" "+className}>
            <ImageCard />
            <div className="grid gap-12 max-w-[clamp(600px,100%,1000px)] ">
                <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-start uppercase text-black">
                    {title}
                </h2>
                <div className="grid gap-4">
                    {
                        data.map(plan => (
                            <DescriptionCard key={plan.id} id={plan.id} title={plan.title} description={plan.description} className={plan.className} titleClassName={plan?.titleClassName} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ImageWithPoints
import Ratings from "../components/Ratings"
import Reviews from "../components/Review/Reviews"

const scores = [
    { score: 5, total: 6 },
    { score: 4, total: 2 },
    { score: 3, total: 3 },
    { score: 2, total: 4 },
    { score: 1, total: 1 },
]
const Satisfied = () => {
    return (
        <section className='container-border grid place-items-center gap-12 !py-25 !px-20'>
            <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-center uppercase">
                100% DE CLIENTS SATISFAITS, ET VOUS ?
            </h2>
            <div className="flex flex-wrap w-full justify-start gap-12">
                <Ratings total={16} scores={scores} />
                <p className="text-[14px] leading-[18.2px]"><span className="font-bold text-[20px] leading-[32px]">100%</span> will recommend this product</p>
            </div>

            <div className="flex w-full justify-end border-b border-[#E5E5EB] !pb-4">
                <p className="text-[#747475]">Powered by Okendo</p>
            </div>

            <Reviews />
        </section>
    )
}

export default Satisfied
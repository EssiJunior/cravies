import SectionHeading from '../components/Headings/Section';
import Spoiler from '../components/Spoiler';

const Spoilers = () => {
    return (
        <section className='container-border overflow-hidden grid place-items-center gap-12 !py-25 !px-20 max-sm:!py-13 max-sm:!px-4  bg-green'>
            <SectionHeading text={'SPOILER: THEY DIDN\'T STOP AT ONE BOWL.'} className="text-white" />

            <div className="flex overflow-hidden gap-10 justify-center my-8">
                {[...Array(5)].map((gravies, index) => (
                    <Spoiler key={index} />
                ))}
            </div>
        </section>
    )
}

export default Spoilers
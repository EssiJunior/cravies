
import Prerequisite from '../components/Prerequisite';
import Spoiler from '../components/Spoiler';

const prerequesites = [
    {
        question: 'Palm oil ?',
        answer: 'Nope.',
        className: '!bg-orange'
    },
    {
        question: 'Artificial colors ?',
        answer: 'Never heard of \'em. ',
        className: '!bg-green'
    },
    {
        question: 'Palm oil ?',
        answer: 'Nope.',
        className: '!bg-orange'
    },
    {
        question: 'Artificial colors ?',
        answer: 'Never heard of \'em. ',
        className: '!bg-pink'
    },
    {
        question: 'Palm oil ?',
        answer: 'Nope.',
        className: '!bg-brown'
    },
];
const Prerequisites = () => {
    return (
        <section className='container-border grid place-items-center gap-12 !py-25 !px-20'>
            <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-center uppercase">
                CRAVIES NEVER MAKE THE BOWL WITHOUT...
            </h2>

            <div className="flex flex-wrap overflow-hidden gap-10 justify-center my-8">
                {prerequesites.map((prerequisite, index) => (
                    <Prerequisite key={index} question={prerequisite.question} answer={prerequisite.answer} className={prerequisite.className} />
                ))}
            </div>
        </section>
    )
}

export default Prerequisites
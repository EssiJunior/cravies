

const Prerequisite = ({ className, question, answer }) => {
    return (
        <div className={'flex !pb-6 flex-col gap-4'}>
            <div className={"w-[201px] h-[201px] flex items-center justify-center  border-3 border-black rounded-full bg-white/70"+" "+ className}>
                <span className="text-white font-bold text-xl">Icon</span>
            </div>

            <p className=' text-black flex flex-col font-bold text-[18px] leading-[20px] tracking-normal text-center align-middle uppercase'>
                <span>{question}</span>
                <span>{answer}</span>
            </p>
        </div>
    )
}

export default Prerequisite
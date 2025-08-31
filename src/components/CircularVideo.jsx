import { play } from "../assets/icons"


const CircularVideo = ({ className, text }) => {
    return (
        <div className={'flex flex-col gap-4'}>
            <div className={"w-[80px] h-[80px] flex items-center justify-center  border-3 border-black rounded-full bg-white/70" + " " + className}>
                <span className="bg-black rounded-full !p-5 cursor-pointer hover:bg-gray-800 transition-all ease-in-out duration-300">
                    <img src={play} alt="Play" />
                </span>
            </div>

            <p className=' text-black text-[14px] leading-[20px] tracking-normal text-center align-middle uppercase'>{text}</p>
        </div>
    )
}

export default CircularVideo
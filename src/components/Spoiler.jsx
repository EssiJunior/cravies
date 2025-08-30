import React from 'react'
import { play } from '../assets/icons'

const Spoiler = ({ className}) => {
    return (
        <div className={'flex !pb-6 flex-col gap-4' + ' ' + className}>
            <div className="w-[264px] h-[450px] flex items-center justify-center  border-3 border-black rounded-[20px] bg-white/70">
                <span className="bg-black rounded-full !p-5 cursor-pointer hover:bg-gray-800 transition-all ease-in-out duration-300">
                    <img src={play} alt="Play" />
                </span>
            </div>

            <p className='!px-6 text-white'>@PSEUDO_INSTA</p>

        </div>
    )
}

export default Spoiler
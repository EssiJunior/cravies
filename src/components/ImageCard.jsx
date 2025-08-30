import React from 'react'

const ImageCard = ({className}) => {
    return (
        <div className={'flex items-center justify-center max-w-[clamp(600px,100%,1000px)]  min-h-[330px] h-full !pb-6 flex-col gap-4 border-3 border-black rounded-[20px] bg-gray-300/80' + ' ' + className}>
            <span className="text-black font-bold text-xl">Image</span>
        </div>
    )
}

export default ImageCard
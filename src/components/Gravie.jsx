import React from 'react'

const Gravie = ({ className, text, description, points }) => {
    return (
        <div className={'w-[320px] flex !pb-6 flex-col gap-4 border-3 border-black rounded-[20px] bg-white' + ' ' + className}>
            <div className="w-full h-[233.11px] flex items-center justify-center bg-gray-900/30 border-b-3 border-black rounded-[20px_20px_0_0]">
                <span className="text-black font-bold text-xl">Product</span>
            </div>
            <p className="font-wosker font-normal text-[32px] leading-[36px] tracking-normal text-start uppercase text-black !p-6">
                {text}
            </p>

            <p className='!px-6 '>{description}</p>
            {
                points &&
                <ul className='!px-6 list-disc list-inside text-left '>
                    {
                        points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Gravie
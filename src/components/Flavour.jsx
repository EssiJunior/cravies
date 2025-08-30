import React from 'react'

const Flavour = ({ className, text }) => {
    return (
        <div className={'flex flex-col gap-4 border-3 border-black !p-6 rounded-[20px] opacity-100' + ' ' + className}>
            <div className="w-[254px] h-[254px] flex items-center justify-center bg-gray-300 rounded-lg">
                <span className="text-black font-bold text-xl">Product</span>
            </div>
            <p className="font-wosker font-normal text-[32px] leading-[36px] tracking-normal text-center align-middle uppercase text-white">
                {text.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                        {word}
                        {i < text.split(' ').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
}

export default Flavour
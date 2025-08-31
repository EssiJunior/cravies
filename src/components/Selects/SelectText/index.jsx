import React, { useState } from 'react'

const SelectText = ({ options }) => {
    const [value, setValue] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="grid border-2 !border-black rounded-xl  w-full " onClick={() => setIsOpen(!isOpen)}>

            <div className="flex items-center justify-between  rounded-xl !px-5 !py-4 w-full">
                <span className="text-gray-800 font-medium">
                    {value.text}
                    {/* Every 14 days */}
                </span>

                <div className="flex items-center gap-2">
                    {
                        value.isRecommended &&
                        <span className="bg-orange-500 text-white text-xs leading-[20px] font-bold !px-1.5 !py-1 rounded-xl">
                            RECOMMENDED
                        </span>
                    }

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {
                isOpen &&
                <div className="grid bg-grey rounded-bl-xl rounded-br-xl">
                    {
                        options.map((option, index) => (
                            <p key={index} className="text-black text-sm leading-[20px] !p-2 hover:bg-white/50" onClick={() => setValue(option)}>{option.text}</p>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default SelectText
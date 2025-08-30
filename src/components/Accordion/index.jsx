import React from 'react'

const Accordion = ({setOpenItems, openItems, item}) => {
    return (
        <div className="bg-white border-b-2 border-black last:!border-b-0">
            <button
                onClick={() => setOpenItems(item.id)}
                className="w-full !px-4 !py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
                <span className="text-[16px] font-bold text-black uppercase leading-[20px] !pr-2">
                    {item?.question}
                </span>
                <div className="flex-shrink-0 text-[20px]">
                    {openItems === item?.id ? (
                        <span>-</span>
                    ) : (
                        <span>+</span>
                    )}
                </div>
            </button>

            {openItems === item?.id && (
                <div className="!px-4 !pb-4">
                    <div className="h-px bg-gray-200 mb-3"></div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                        {item?.answer}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Accordion
import React from 'react'
import CheckedItems from '../CheckedItem/CheckedItems'
import SelectText from '../SelectText'

const checks = [
    "Cancel Anytime",
    "Pause anytime",
    "Free delivery"
]

const dailyRate = [
    {
        "text": "1-2 days",
        "isRecommended": true
    },
    {
        "text": "Every 14 days",
        "isRecommended": true
    },
    {
        "text": "Every month",
    }
]

const Frequency = ({
    title,
    oldPrice,
    newPrice,
    badge,
    isSelected,
    setIsSelected,
    className = ''
}) => {
    return (
        <div className={'relative w-full grid gap-4 !p-5 border-3 border-grey rounded-[16px] ' + className}
            onClick={() => setIsSelected(title)}>
            <div className={'relative w-full flex items-center gap-4 '}>
                <div className="w-[24px] h-[24px] border-3 border-black grid place-items-center bg-white rounded-full !p-0.5">
                    <span className={"w-full h-full rounded-full" + " " + (isSelected === title && "bg-green")}></span>
                </div>

                <p className='flex-1 font-bold text-[18px] leading-[20px]'>{title}</p>

                <div className="flex items-center gap-2">
                    {
                        oldPrice &&
                        <p className="text-[16px] leading-[24px] line-through">{oldPrice}</p>
                    }
                    <p className={"text-[18px] leading-[20px] text-green font-bold" + " " + (newPrice && !oldPrice && !badge && "!text-black")}>{newPrice}</p>
                    {
                        badge &&
                        <p className="text-[12px] leading-[20px] bg-green text-white font-bold !py-1 !px-1.5 rounded-[4px]">{badge}</p>
                    }
                </div>
            </div>

            {
                isSelected === title &&
                <SelectText options={dailyRate} />
            }
            {
                isSelected === title &&
                <div className="flex items-center justify-center">
                    <CheckedItems data={checks} textClassName='!text-[14px] !leading-[20px] !font-medium' />
                </div>
            }
        </div>
    )
}

export default Frequency
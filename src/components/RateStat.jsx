import React from 'react'
import Star from './Star'

const RateStat = ({className, starsClassName}) => {
    return (
        <div className={'flex items-center gap-3'+' '+className}>
            <div className="flex gap-1">
                {
                    [...Array(5)].map((_, index) => <Star key={index} className={starsClassName} />)
                }
            </div>
            <p className='w-full text-[16px] leading-[20px] font-bold'>RATED 4.9/5 BY 1,250+ HAPPY CUSTOMERS</p>
        </div>
    )
}

export default RateStat
import React from 'react'
import Star from './Star'

const Ratings = ({ total, scores, className }) => {
    return (
        <div className={"grid gap-10 w-[min(367px,100%)] max-md:!w-full" + ' ' + className}>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-[#2C3E50] font-semibold text-[18px] leading-[23.4px] tracking-[0.9px] align-middle">5.0</span>
                    <div className="flex">
                        {
                            scores.map((index) => {
                                return (
                                    <Star key={index} className={'bg-orange-yellow'} />
                                )
                            })
                        }
                    </div>
                </div>
                <span className="text-[#676986] font-normal text-[11.81px] leading-[19.2px] tracking-normal align-middle">
                    Based on {total} views</span>
            </div>
            <aside className='grid gap-4'>
                {
                    scores.map((score, index) => {
                        return (
                            <div key={index} className='flex items-center gap-4'>
                                <div className="flex items-center gap-3">
                                    <span>{score.score}</span>
                                    <Star className={'bg-orange-yellow'} />
                                </div>
                                <div className='flex bg-[#F4F4F6] rounded-[3px] h-1.5 w-[min(100%,290px)]'>
                                    <div className='bg-black rounded-[3px] h-full' style={{ width: score.total / total * 100 + '%' }}></div>
                                </div>
                                <span>{score.total}</span>
                            </div>
                        )
                    })
                }
            </aside>
        </div>
    )
}

export default Ratings
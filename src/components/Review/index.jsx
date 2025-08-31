import React from 'react'
import Star from '../Star'

const Review = () => {
    return (
        <div className="review flex flex-wrap items-start gap-8 w-full">
            <div className="flex flex-col border-3 border-black rounded-[16px] w-[min(300px,100%)] max-sm:w-full self-stretch  !py-4 !px-2 gap-4 bg-white">
                <div className="flex gap-4 items-center">
                    <span className="w-12 h-12 rounded-[24px] bg-pink grid place-items-center">GS</span>
                    <div className="grid gap-1">
                        <p>Gillian</p>
                        <p className="text-green flex items-center gap-2">
                            Verified
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 16 16"
                            >
                                <circle cx="8" cy="8" r="8" fill="#019C45" />
                                <path
                                    d="M5 8.5l2 2 4-4"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
                <p className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M6 10V17H15C16.1046 17 17 16.1046 17 15V10C17 8.89543 16.1046 8 15 8H10.5L11.5 4.5C11.7761 3.60457 11.1046 3 10.5 3C9.89543 3 9.5 3.60457 9.5 4.5V8H7C6.44772 8 6 8.44772 6 9V10Z"
                            fill="#019C45"
                            stroke="#019C45"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                    </svg>
                    I recommend this product
                </p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center">
                    {
                        [1, 2, 3, 4, 5].map((index) => {
                            return (
                                <Star key={index} className={'bg-orange-yellow'} />
                            )
                        })
                    }
                </div>
                <div className="grid gap-1">
                    <p>It's a hit</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nulla eligendi impedit architecto quia. </p>
                </div>
                <span role="img" aria-label="smiling face">😊</span>
                <p className="flex items-center gap-3 text-[#676986]">
                    Was this helpful ?
                    <span className="flex gap-2 items-center">
                        <span className="flex gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M6 10V17H15C16.1046 17 17 16.1046 17 15V10C17 8.89543 16.1046 8 15 8H10.5L11.5 4.5C11.7761 3.60457 11.1046 3 10.5 3C9.89543 3 9.5 3.60457 9.5 4.5V8H7C6.44772 8 6 8.44772 6 9V10Z"
                                    fill="#676986"
                                    stroke="#676986"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            0
                        </span>
                        <span className="flex gap-1 items-center"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M14 10V3H5C3.89543 3 3 3.89543 3 5V10C3 11.1046 3.89543 12 5 12H9.5L8.5 15.5C8.22386 16.3954 8.89543 17 9.5 17C10.1046 17 10.5 16.3954 10.5 15.5V12H13C13.5523 12 14 11.5523 14 11V10Z"
                                fill="#676986"
                                stroke="#676986"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                            0
                        </span>
                    </span>
                </p>
            </div>
            <p className="text-[#676986]">6 days ago</p>
        </div>
    )
}

export default Review
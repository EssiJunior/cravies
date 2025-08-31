import React from 'react'
import { filter } from '../../assets/icons'
import Button from '../Button'
import Review from '.'

const Reviews = () => {
    return (
        <>
            <div className="flex justify-between w-full">
                <Button text="Filters" icon={filter} />
                <Button text="Write a review" className={'bg-orange'} />
            </div>

            <div className="flex justify-between w-full">
                <p>8 reviews</p>
                <p className="flex gap-2">
                    <span>Sort</span>
                    <span className="flex gap-2 items-center">
                        Photos & Videos
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M5 8l5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </p>
            </div>

            <section className="reviews grid gap-8 w-full">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                        return (
                            <Review key={index} />
                        )
                    })
                }
            </section>

            <div>
                <Button text="See more reviews" />
            </div>
        </>
    )
}

export default Reviews
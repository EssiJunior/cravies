import React from 'react'

const HeroHeading = ({text, className}) => {
  return (
     <h2 className={`z-2 sm:text-[132px] max-sm:!text-[56px] sm:leading-[120px] max-sm:!leading-[50px] tracking-normal text-center uppercase text-orange !p-5 !pb-0 ${className}`}>
        {text}
    </h2>
  )
}

export default HeroHeading
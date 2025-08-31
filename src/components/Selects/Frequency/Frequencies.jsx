import React, { useState } from 'react'
import Frequency from '.'

const Frequencies = ({ data }) => {
    const [isSelected, setIsSelected] = useState(null);

    return (
        <div className='grid gap-4'>
            {
                data.map((frequency, index) => (
                    <Frequency
                        key={index}
                        title={frequency.title}
                        oldPrice={frequency.oldPrice}
                        newPrice={frequency.newPrice}
                        badge={frequency.badge}
                        className={isSelected === frequency.title ? '!border-black' : ''}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                ))
            }
        </div>
    )
}

export default Frequencies
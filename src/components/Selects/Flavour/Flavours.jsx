import React, { useState } from 'react'
import Flavour from '.'

const Flavours = ({ data }) => {
    const [selectedFlavour, setSelectedPack] = useState(null);

    return (
        <div className='grid gap-4'>
            {
                data.map((flavour, index) => (
                    <Flavour
                        key={index}
                        title={flavour.title}
                        isBestSeller={flavour.isBestSeller}
                        className={flavour.isBestSeller ? '!border-black bg-peach' : ''}
                        setSelected={setSelectedPack}
                    />
                ))
            }
        </div>
    )
}

export default Flavours
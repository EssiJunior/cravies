import React, { useState } from 'react'
import Pack from '.'

const Packs = ({ data }) => {
    const [selectedPack, setSelectedPack] = useState(null);

    return (
        <div className='grid gap-4'>
            {
                data.map((pack, index) => (
                    <Pack
                        key={index}
                        title={pack.title}
                        servingPrice={pack.servingPrice}
                        oldPrice={pack.oldPrice}
                        newPrice={pack.newPrice}
                        badge={pack.badge}
                        mostPopular={pack.mostPopular}
                        className={selectedPack === pack.title ? '!border-black bg-peach' : ''}
                        setSelected={setSelectedPack}
                    />
                ))
            }
        </div>
    )
}

export default Packs
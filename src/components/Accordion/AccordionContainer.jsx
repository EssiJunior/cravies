import React, { useState } from 'react'
import Accordion from '.';

const AccordionContainer = ({ data, withWrapper, className }) => {
    const [openItems, setOpenItems] = useState(1);

    return (
        withWrapper ?
            <div className={"max-[990px]:w-[clamp(600px,100%,1000px)] w-full mx-auto bg-white !py-2 !px-8 rounded-[20px] border-3 border-black" + " " + className}>
                {data.map((item) => (
                    <Accordion setOpenItems={setOpenItems} openItems={openItems} item={item} />
                ))}
            </div>
            :
            data.map((item) => (
                <Accordion setOpenItems={setOpenItems} openItems={openItems} item={item} />
            ))
    )
}

export default AccordionContainer
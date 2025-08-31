import CheckedItem from '.'

const CheckedItems = ({ data, textClassName='' }) => {
    return (
        <div className='flex flex-wrap gap-x-4 gap-y-2 '>
            {
                data.map((item, index) => {
                    return <CheckedItem key={index} text={item} textClassName={textClassName} />
                })
            }
        </div>
    )
}

export default CheckedItems
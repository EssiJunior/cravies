import CheckedItem from '.'

const CheckedItems = ({ data, textClassName='' }) => {
    return (
        <div className='flex gap-8'>
            {
                data.map((item, index) => {
                    return <CheckedItem key={index} text={item} textClassName={textClassName} />
                })
            }
        </div>
    )
}

export default CheckedItems
import { star } from '../assets/icons'

const Star = ({className}) => {
    return (
        <div className={'bg-green !p-1'+' '+className}>
            <img src={star} alt="Star" />
        </div>
    )
}

export default Star
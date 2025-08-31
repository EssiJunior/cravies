
const Button = ({ className, icon, text='Button', handleClick = () => {}}) => {
    return (
        <button className={'bg-green text-white border-2 border-black !py-3.5 !pt-5 !px-8 !rounded-xl font-wosker shadow-button uppercase font-normal text-[20px] leading-[20px] tracking-normal text-center cursor-pointer hover:scale-102 transition-all ease-in-out duration-300 flex items-center justify-center gap-4' + ' ' + className} onClick={handleClick}>
            {icon && <img src={icon} alt="Icon" className="!mb-1" />}
            {text}
        </button>
    )
}

export default Button
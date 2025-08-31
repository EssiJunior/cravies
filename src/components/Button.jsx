
const Button = ({ className, icon, detail, text='Button', handleClick = () => {}}) => {
    return (
        <button className={`bg-green text-white border-2 border-black !py-2 !pt-3 !px-8 !rounded-xl font-wosker shadow-button uppercase font-normal text-[20px] leading-[20px] tracking-normal text-center cursor-pointer hover:scale-102 transition-all ease-in-out duration-300 flex items-center justify-center gap-4 ${detail && '!justify-between'}` + ' ' + className} onClick={handleClick}>
            {icon && <img src={icon} alt="Icon" className="!mb-1" />}
            {text}
            {detail && <span className="font-space text-[24px] leading-[24px] tracking-normal font-bold !mb-1">{detail}</span>}
        </button>
    )
}

export default Button
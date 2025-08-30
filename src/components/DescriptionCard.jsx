
const DescriptionCard = ({ id, title, description, className, titleClassName }) => {
    return (
        <div className={`grid gap-2 border-3 border-black rounded-2xl !p-6 text-white` + ' ' + className}>
            <div className="flex-1">
                {
                    id &&
                    <p className="text-[32px] leading-[40px] font-bold">{id}</p>
                }
                <h2 className={"text-[32px] leading-[36px]" + ' ' + titleClassName}>
                    {title}
                </h2>
                <p className="text-[18px] leading-[28px] whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default DescriptionCard
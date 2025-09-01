
const SectionHeading = ({ text, className }) => {
    return (
        <h2 className={`sm:text-[64px] max-sm:text-[48px] sm:leading-[60px] max-sm:leading-[42px] tracking-normal text-center uppercase ${className}`}>
            {text}
        </h2>
    )
}

export default SectionHeading
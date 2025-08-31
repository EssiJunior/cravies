import TabularProducts from "../components/TabularProducts";

const cereals = [
    {
        id: 1,
        name: "CRAVIES",
        image: "🥣", // Placeholder for cereal box image
        protein: "11-12G",
        sugar: "11-12G",
        calories: "11-12G",
        netCarbs: "11-12G",
        isVegan: true,
        bgColor: "bg-white",
        border: "border-b border-black"
    },
    {
        id: 2,
        name: "Competitor 1",
        image: "📦", // Placeholder for cereal box image
        protein: "11-12G",
        sugar: "11-12G",
        calories: "11-12G",
        netCarbs: "11-12G",
        isVegan: false,
        bgColor: ""
    },
    {
        id: 3,
        name: "Competitor 2",
        image: "📦", // Placeholder for cereal box image
        protein: "11-12G",
        sugar: "11-12G",
        calories: "11-12G",
        netCarbs: "11-12G",
        isVegan: false,
        bgColor: ""
    },
    {
        id: 4,
        name: "Competitor 3",
        image: "📦", // Placeholder for cereal box image
        protein: "11-12G",
        sugar: "11-12G",
        calories: "11-12G",
        netCarbs: "11-12G",
        isVegan: true,
        bgColor: ""
    }
];

const nutritionRows = [
    { label: "PROTEIN", key: "protein" },
    { label: "SUGAR", key: "sugar" },
    { label: "CALORIES", key: "calories" },
    { label: "NET CARBS", key: "netCarbs" },
    { label: "VEGAN", key: "isVegan" }
];

const Comparatives = () => {
    return (
        <section className='container-border grid place-items-center gap-12 !py-25 !px-20 bg-orange'>
            <h2 className="font-wosker font-normal text-[64px] leading-[60px] tracking-normal text-center uppercase text-white">
                WE'RE NOT THE SAME AS REGULAR CEREALS...
            </h2>

            <TabularProducts products={cereals} criterion={nutritionRows} />

            <p className="text-white text-[14px] leading-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quia. Dignissimos soluta quidem fugit? Quisquam, quidem.</p>
        </section>
    )
}

export default Comparatives
import React from 'react'

const TabularProducts = ({ products, criterion }) => {
    return (

        <div className="max-w-[1100px] w-full overflow-x-auto">
            <table className="w-full">
                {/* Header Row with Product Images */}
                <thead>
                    <tr>
                        <th className="w-32"></th>
                        {products.map((cereal) => (
                            <th key={cereal.id} className={`${cereal.bgColor} !rounded-tl-[20px] !rounded-tr-[20px] !p-4 !pb-2`}>
                                <div className={`flex flex-col items-center justify-center gap-2`}>
                                    <p className="font-bold text-[16px] leading-[20px] mb-4 text-gray-800">
                                        {cereal.id === 1 && cereal.name}
                                    </p>
                                    <div className="w-[124px] h-[124px] flex items-center justify-center bg-gray-900/30 ">
                                        <span className="text-black font-bold text-xl">Product</span>
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Nutrition Information Rows */}
                <tbody>
                    {criterion.map((row) => (
                        <tr key={row.key} className="border-b-1 border-white last:border-0">
                            <td className="text-center text-white font-bold text-sm !px-4 !py-4 ">
                                {row.label}
                            </td>
                            {products.map((cereal) => (
                                <td
                                    key={cereal.id}
                                    className={`${cereal.bgColor} ${cereal.border} ${row.key === 'isVegan' && cereal.id === 1 ? '!border-b-0 !rounded-bl-[20px] !rounded-br-[20px]' : ''} text-center py-4 px-2 font-bold text-sm `}
                                >
                                    {row.key === 'isVegan' ? (
                                        <div className="flex justify-center">
                                            {cereal.isVegan ? (
                                                <div className="bg-green-500 rounded-full p-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <circle cx="10" cy="10" r="10" fill="#019C45" />
                                                        <path
                                                            d="M6 10.5l3 3 5-5"
                                                            stroke="#fff"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="bg-red-500 rounded-full p-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <circle cx="10" cy="10" r="10" fill="#EF4444" />
                                                        <path
                                                            d="M7 7l6 6M13 7l-6 6"
                                                            stroke="#fff"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <span className={`text-white ${cereal.id === 1 ? '!text-black' : ''}`}>{cereal[row.key]}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabularProducts
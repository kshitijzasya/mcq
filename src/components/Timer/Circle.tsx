"use client"

interface CircleProps {
    color: string,
    percentage: number
}

const Circle= ({color, percentage}: CircleProps) => {
    return (
        <>
            <div className="flex h-[200px] w-[200px]">
                <svg width="200" height="200">
                    <g transform="rotate(-90, 100, 100)">
                        <circle 
                            r="70"
                            cx="100"
                            cy="100"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="1rem"
                            strokeDasharray="439.8"
                            strokeDashoffset="0"
                            className="text-white dark:text-black"
                            > </circle>
                            <circle 
                                r="70"
                                cx="100"
                                cy="100"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="1rem"
                                strokeDasharray="439.8"
                                strokeDashoffset={440-(440 * percentage) / 60}
                                className={`${color} blur-none`}
                                opacity={0.9}
                            > </circle>
                    </g>
                    <text className="text-xl font-bold" x="50%" y="50%" dominantBaseline={"central"} textAnchor="middle">
                        {percentage.toString().padStart(2, '0')}
                    </text>
                </svg>
            </div>
        </>
    )
}

Circle.displayName = "Circle"

export default Circle;
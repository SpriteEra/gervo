import React, { useState, useEffect } from 'react';
import { BadgeCheck, Factory, Cpu, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        title: "ISO Certified Company",
        icon: <BadgeCheck color='white' size={26} />,
        color: "bg-[#00AD28]",
    },
    {
        title: "Heavy-Duty MS Body Machines",
        icon: <Factory color='white' size={26} />,
        color: "bg-[#EB3223]",
    },
    {
        title: "Automatic & PLC Control Systems",
        icon: <Cpu color='white' size={26} />,
        color: "bg-[#00AD28]",
    },
    {
        title: "Custom Machine Manufacturing",
        icon: <Wrench color='white' size={26} />,
        color: "bg-[#00AD28]",
    },
];

const ChooseUs = () => {
    const [index, setIndex] = useState(0);
    const [cardCount, setCardCount] = useState(4);

    useEffect(() => {
        const updateCardCount = () => {
            if (window.innerWidth < 640) setCardCount(2);
            else if (window.innerWidth < 1024) setCardCount(3);
            else setCardCount(4);
        };

        updateCardCount();
        window.addEventListener("resize", updateCardCount);
        return () => window.removeEventListener("resize", updateCardCount);
    }, []);

    const getVisibleCards = () => {
        const arr = [];
        for (let i = 0; i < cardCount; i++) {
            arr.push(features[(index + i) % features.length]);
        }
        return arr;
    };

    const next = () => setIndex((prev) => (prev + 1) % features.length);
    const prev = () => setIndex((prev) => (prev - 1 + features.length) % features.length);

    return (
        <div className='mt-8 md:mt-14 py-10'>
            
            <div className="flex items-center justify-center gap-[7px] w-full">
                <div className="w-[58px] border-t-2 border-[#EB3223]"></div>
                <p className="text-[#EB3223] font-semibold text-[18px]">
                    Why Choose Us
                </p>
                <div className="w-[58px] border-t-2 border-[#EB3223]"></div>
            </div>

            <div className="flex flex-col items-center text-center px-4 mt-4">
                <div className='flex flex-col md:flex-row gap-2'>
                    <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-black">
                        Complete Industrial Solutions
                    </h2>
                    <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#EB3223] italic">
                        Under One Roof
                    </h2>
                </div>

                <p className="mt-3 text-[14px] sm:text-[15px] text-[#4E5E6A] max-w-[1098px]">
                    We offer end-to-end plant engineering — from raw material handling to finished pellet packaging.
                </p>
            </div>

            <div className="w-full mt-12 flex items-center gap-3 md:px-10">

                <button
                    onClick={prev}
                    className="p-2 bg-gray-100 rounded-full shrink-0"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* ✅ GRID FIX */}
                <div className="
                    grid w-full gap-4
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                ">
                    {getVisibleCards().map((item, i) => (
                        <div
                            key={i}
                            className="
                                relative bg-white
                                shadow-[0px_0px_10px_rgba(246,0,0,0.1)]
                                rounded-[50px_50px_5px_5px]
                                flex flex-col items-center

                                h-[170px] pt-[90px]
                                sm:h-[200px] sm:pt-[100px]
                                lg:h-[248px] lg:pt-[110px]
                            "
                        >
                            <div
                                className={`
                                    absolute rounded-full flex items-center justify-center
                                    ${item.color}
                                    top-[22px] w-[70px] h-[70px]
                                    sm:top-[28px] sm:w-[75px] sm:h-[75px]
                                    lg:top-[34px] lg:w-[85px] lg:h-[85px]
                                `}
                            >
                                {item.icon}
                            </div>

                            <p className="
                                text-center font-medium px-2
                                text-[13px] mt-8 leading-[18px]
                                sm:text-[15px]
                                lg:text-[18px] lg:px-4
                            ">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={next}
                    className="p-2 bg-gray-100 rounded-full shrink-0"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {features.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                            i === index ? "bg-[#EB3223] w-6" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChooseUs;
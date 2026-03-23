import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img3 from "../../public/Images/img3.png";
import img4 from "../../public/Images/img4.png";

const OurProduct = () => {
    const products = [
        { id: 1, title: "HM-Series Hammer Mill", img: img3 },
        { id: 2, title: "HM-Series Hammer Mill", img: img4 },
        { id: 3, title: "HM-Series Hammer Mill", img: img3 },
        { id: 4, title: "HM-Series Hammer Mill", img: img4 },
        { id: 5, title: "HM-Series Hammer Mill", img: img3 },
    ];

    const [index, setIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsPerView(2); // tablet + desktop
            } else {
                setItemsPerView(1); // mobile
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = products.length - itemsPerView;

    const next = () => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="w-full bg-[rgba(0,173,40,0.1)] flex flex-col relative px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    viewBox="0 0 1440 200"
                    className="w-full h-[200px] absolute left-0 top-3/5 -translate-y-1/2"
                    fill="none"
                >
                    <path
                        d="M0,50 
                        C200,150 400,150 600,120 
                        C800,90 900,20 1100,40 
                        C1300,60 1440,80 1440,80"
                        stroke="#00AD28"
                        strokeWidth="40"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="w-full flex justify-center pt-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 sm:w-14 border-t-2 border-[#EB3223]"></div>
                    <h2 className="text-[#EB3223] font-semibold text-sm sm:text-base md:text-lg">
                        Our Product
                    </h2>
                    <div className="w-10 sm:w-14 border-t-2 border-[#EB3223]"></div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center mt-4">
                <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                    <h2 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
                        Industrial Shredding
                    </h2>
                    <h2 className="font-semibold text-red-500 italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
                        Solutions
                    </h2>
                </div>

                <p className="mt-4 text-sm sm:text-base md:text-[15px] text-black mx-auto">
                    Delivering high-performance shredder and recycling machinery designed for efficiency, durability, and long-term industrial performance.
                </p>
            </div>

            <div className="w-full flex items-center justify-center relative mt-12">

                <button
                    onClick={prev}
                    className="absolute left-2 sm:left-6 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition"
                >
                    <ChevronLeft size={28} />
                </button>

                <div className="w-full max-w-[1200px] overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-center px-2 sm:px-3"
                                style={{
                                    minWidth: `${100 / itemsPerView}%`,
                                }}
                            >
                                <div className="w-full max-w-[520px] bg-white rounded-[10px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col items-center">

                                    <div className="w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[420px] overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mt-4 px-3">
                                        {item.title}
                                    </h2>

                                    <button className="mb-6 mt-4">
                                        <div className="bg-[#EB3223] text-white text-sm sm:text-base px-8 py-2 flex items-center gap-3 [clip-path:polygon(12%_0,100%_0,88%_100%,0%_100%)] hover:bg-red-600 transition-all duration-300">
                                            <span>Know More</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 sm:w-5 sm:h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="white"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M7 17L17 7M17 7H7M17 7V17"
                                                />
                                            </svg>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={next}
                    className="absolute right-2 sm:right-6 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            <div className="w-full flex justify-center mt-10">
                <button className="w-[210px] h-[40px] md:mb-10 bg-[#EB3223] text-white rounded-[5px] flex items-center justify-center font-[Poppins] font-medium text-[16px] sm:text-[18px] hover:bg-red-600 transition-all duration-300">
                    View All Product
                </button>
            </div>
        </section>
    );
};

export default OurProduct;
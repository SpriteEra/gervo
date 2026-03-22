import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import img8 from "../../public/Images/img8.png";
import img9 from "../../public/Images/img9.png";
import img10 from "../../public/Images/img10.png";
import img11 from "../../public/Images/img11.png";
import img12 from "../../public/Images/img12.png";

const logos = [img8, img9, img10, img11, img12];

export default function OurClients() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (!container) return;

            scrollAmount += 0.5;

            // infinite loop (since we duplicate items)
            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
            }

            container.scrollLeft = scrollAmount;
        };

        const interval = setInterval(scroll, 16);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-[#0E1925] py-16 overflow-hidden">

            {/* Heading */}
            <div className="flex items-center justify-center gap-4">
                <Star className="text-white w-6 h-6" />
                <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">
                    Our Clients
                </h2>
                <Star className="text-white w-6 h-6" />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex justify-center mt-16 gap-20 items-center">
                {logos.map((logo, i) => (
                    <img
                        src={logo}
                        alt="client"
                        className={`h-16 object-contain ${i % 5 === 3 ? "rounded-xl" : "rounded-full"
                            } ${i % 5 === 4 ? "invert rounded-none" : ""}`}
                    />
                ))}
            </div>

            {/* Mobile Auto Scroll */}
            <div
                ref={scrollRef}
                className="flex md:hidden mt-12 gap-6 overflow-x-hidden"
            >
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="min-w-[40%] flex justify-center items-center"
                    >
                        <img
                            src={logo}
                            alt="client"
                            className={`h-16 object-contain ${i % 5 === 3 ? "rounded-xl" : "rounded-full"
                                } ${i % 5 === 4 ? "invert rounded-none" : ""}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
import React, { useState } from "react";
import img5 from "../../public/Images/img5.png";
import img6 from "../../public/Images/img6.png";
import img7 from "../../public/Images/img7.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Argo-Residue Processing Units",
    img: img5,
  },
  {
    title: "Integrated Biomass Pellet Production System",
    img: img6,
  },
  {
    title: "Shredding Technology",
    img: img7,
  },
];

const OurServices = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full py-12 sm:py-16 overflow-hidden bg-[rgba(235,50,35,0.1)]">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[rgba(235,50,35,0.04)]" />
        <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(235,50,35,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(235,50,35,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 sm:w-12 h-[2px] bg-red-500" />
          <span className="text-red-500 font-semibold text-sm sm:text-lg">
            Our Services
          </span>
          <div className="w-8 sm:w-12 h-[2px] bg-red-500" />
        </div>

        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Industries We Serve
        </h2>

        <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-12 max-w-xl mx-auto">
          Delivering advanced shredder and recycling systems tailored to meet
          the operational demands of diverse industrial sectors.
        </p>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="block sm:hidden relative">

          {/* CARD */}
          <div className="bg-white rounded-[5px_70px_5px_5px] shadow-[0_0_20px_rgba(246,0,0,0.25)] overflow-hidden transition-all duration-300">
            <img
              src={cards[current].img}
              alt={cards[current].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-medium text-lg">
                {cards[current].title}
              </h3>
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={18} className="text-red-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={18} className="text-red-500" />
          </button>

          {/* DOTS */}
          <div className="flex justify-center mt-4 gap-2">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-red-500"
                    : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[5px_70px_5px_5px] shadow-[0_0_20px_rgba(246,0,0,0.25)] overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-52 sm:h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg sm:text-xl">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-2 sm:right-0 bottom-[-0px] md:bottom-[-10px] w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default OurServices;
import React from "react";
import HeroImg from "../../public/Images/HeroImg.jpg";
import Left from "../../public/Images/Left.png";
const Hero = () => {
    return (
        <div className="w-full">
            <div
                className="w-full 
                aspect-[393/254]     
                sm:aspect-[16/9] 
                md:aspect-[1512/535] 
            "
            >
                <img className="w-full h-full object-cover block" src={HeroImg} alt="Hero" />
            </div>
            <div className="w-full flex items-center justify-between overflow-hidden">

                {/* LEFT IMAGE */}
                <div className="flex-shrink-0">
                    <img
                        src={Left}
                        alt="left pattern"
                        className="w-[12vw] min-h-22"
                    />
                </div>

                {/* TEXT */}
                <div className="flex-1 flex justify-center px-[1vw]">
                   

                        <h1
                            className="
                                font-[Anton_SC]
                                bg-[radial-gradient(ellipse_at_center,_rgba(245,91,31,0.15)_0%,_rgba(245,91,31,0.1)_30%,_rgba(245,91,31,0.05)_60%,_rgba(255,255,255,0)_100%)] rounded-full 
                                text-[#F55B1F]
                                font-extrabold
                                tracking-tighter
                                uppercase
                                items-center
                                flex justify-center
                                text-center
                                flex flex-col sm:flex-row
                                text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                            "
                        >
                            <span>
                                {" "}  Designed in Germany.
                            </span>
                            <span>
                                {" "}  Built in India.
                            </span>
                            <span>
                                {" "}
                                Trusted Worldwide.
                            </span>
                        </h1>
                    
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-shrink-0">
                    <img
                        src={Left}
                        alt="right pattern"
                        className="w-[12vw] min-h-22 scale-x-[-1]"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;

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
            <div className="w-full flex items-center justify-between overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(245,91,31,0.25)_0%,_rgba(245,91,31,0.15)_20%,_rgba(255,255,255,0.8)_60%,_#ffffff_100%)]">

                {/* LEFT IMAGE */}
                <div className="flex-shrink-0">
                    <img
                        src={Left}
                        alt="left pattern"
                        className="w-[12vw] shrink-0 object-cover object-right opacity-16 min-h-35 md:min-h-55"
                    />
                </div>

                {/* TEXT */}
                <div className="flex-1 flex justify-center px-[1vw] min-w-0">
                    <h1
                        className="
                            font-[Anton]
                            text-[#F55B1F]
                            tracking-[0.03em]
                            uppercase
                            flex flex-col md:flex-row
                            items-center justify-center text-center
                            md:whitespace-nowrap
                            gap-1 md:gap-3 lg:gap-5
                            leading-[1.4]
                            w-full
                            text-[clamp(16px,3.5vw,36px)]
                            mx-4
                        "
                    >
                        <span className="whitespace-nowrap">
                            <span className="inline-block first-letter:text-[1.3em]">Designed</span>{" "}
                            <span className="inline-block first-letter:text-[1.3em]">in</span>{" "}
                            <span className="inline-block first-letter:text-[1.3em]">Germany.</span>
                        </span>

                        <span className="whitespace-nowrap">
                            <span className="inline-block first-letter:text-[1.3em]">Built</span>{" "}
                            <span>in</span>{" "}
                            <span className="inline-block first-letter:text-[1.3em]">India.</span>
                        </span>

                        <span className="whitespace-nowrap">
                            <span className="inline-block first-letter:text-[1.3em]">Trusted</span>{" "}
                            <span className="inline-block first-letter:text-[1.3em]">Worldwide.</span>
                        </span>
                    </h1>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-shrink-0">
                    <img
                        src={Left}
                        alt="right pattern"
                        className="w-[12vw] shrink-0 min-h-35 md:min-h-55 object-cover object-right opacity-16 scale-x-[-1]"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;

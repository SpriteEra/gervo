import img1 from '../../public/Images/img1.jpg';
import img2 from '../../public/Images/img2.jpg';
import prize from '../../public/Images/prize.png';

const About = () => {
    return (
        <div className="w-full mt-3 flex justify-start pt-8 mb-0 overflow-x-hidden p-0">
            <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8 items-start">

                {/* LEFT SIDE */}
                <div
                    className="
                        relative 
                        flex gap-4 
                        justify-center md:justify-end ms:justify-center
                        scale-[0.9] sm:scale-[0.95] md:scale-100
                        origin-top
                        order-2 md:order-1
                        "
                >
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-4  mt-10">

                        <div className="relative w-[150px] sm:w-[180px] md:w-[200px] aspect-[5/6] rounded-xl overflow-hidden">
                            <img src={img1} className="w-full h-full object-cover" />
                            <div className="absolute 
                                w-[80px] h-[80px] 
                                bg-[#EB3223] 
                                rotate-[-45deg] 
                                top-[-40px] left-[-40px] border-white border-4">
                            </div>
                        </div>

                        <div className="relative w-[150px] sm:w-[180px] md:w-[200px] bg-red-100 rounded-xl overflow-hidden p-4">
                            <h1 className="text-xl font-bold text-red-600">14+</h1>
                            <p className="text-sm">Year of Excellence</p>
                            <div className="absolute  mt-[-7px] mr-[-7px] top-0 right-0 w-8 h-8 bg-red-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-[150px] sm:w-[180px] md:w-[200px] bg-green-100 rounded-xl overflow-hidden p-4">
                            <h1 className="text-xl font-bold text-green-600">50+</h1>
                            <p className="text-sm">Product Variant</p>
                            <div className="absolute  mt-[-7px] mr-[-7px] top-0 right-0 w-8 h-8 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="w-[150px] sm:w-[180px] md:w-[200px] aspect-[5/6] rounded-xl overflow-hidden">
                            <img src={img2} className="w-full h-full object-cover" />
                        </div>
                        <div
                            className="
                                relative
                              
                                w-fit
                             
                                py-5
                                left-18 md:left-[90px]
                                bottom-12 md:bottom-14

                                scale-[0.8] sm:scale-90 md:scale-100
                                origin-left
                                bg-white shadow-md rounded-xl px-4 flex items-center gap-3
                            "
                        >
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                <img src={prize} className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">German</p>
                                <p className="text-xs">Engineering</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* RIGHT SIDE CONTENT */}
                <div className="w-fullflex flex-col px-4 order-1 md:order-2 text-left md:text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-[56px] border-t-[3px] border-[#FFCC00]"></div>
                        <p className="text-xs sm:text-sm font-medium text-gray-500">
                            About Grevo Global
                        </p>
                    </div>
                    <h1 className="font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        German Technology{" "}
                        <br />
                        <span className="text-green-600 block sm:inline">
                            Made for India
                        </span>
                    </h1>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
                        Grevo Global Pvt. Ltd. engineers high-performance industrial waste
                        management systems, advanced shredding technology, biomass processing
                        solutions, and complete turnkey plant infrastructure.
                    </p>

                    <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
                        Our solutions handle the toughest shredding challenges across the globe,
                        delivering precision, durability, and unmatched performance.
                    </p>

                    <button
                        className="
                                mt-4 sm:mt-5
                                text-xs sm:text-sm
                                border border-red-500 text-red-500
                                px-3 py-1.5 sm:px-4 sm:py-2
                                rounded-full
                                hover:bg-red-500 hover:text-white
                                transition
                            "
                    >
                        Learn More →
                    </button>

                </div>

            </div>
        </div>
    );
};

export default About;
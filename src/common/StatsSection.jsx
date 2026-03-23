import React from 'react';
import stats from "../../public/Images/stats.png";
const StatsSection = () => {
  const stats = [
    { value: '1500+', label: 'Machine Installed' },
    { value: '1200+', label: 'Happy Client' },
    { value: '98%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="relative w-full min-h-[267px] mt-0 flex items-center justify-center overflow-hidden font-poppins bg-[#0A121A]">
      {/* Background Gradient Layer */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(90deg, #0A121A 0%, #26456C 25%, #325A8E 50%, #26456C 75%, #0A121A 100%)'
        }}
      />

      {/* Decorative Mask Group - Left Top */}
      <div className="absolute -left-[111px] -top-[124px] w-[391px] h-[391px] pointer-events-none">
        {/* Placeholder for 22.png with the Rectangle 49 overlay */}
        <div className="absolute inset-0 bg-[#d9d9d940] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('22.png')] bg-contain bg-no-repeat opacity-50" >
            <img src={stats} alt="" />
        </div>
      </div>

      {/* Decorative Mask Group - Right (Rotated 180) */}
      <div className="absolute -right-[111px] -bottom-[124px] w-[391px] h-[391px] rotate-180 pointer-events-none hidden md:block">
        <div className="absolute inset-0 bg-[#d9d9d940] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('22.png')] bg-contain bg-no-repeat opacity-50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[145px] items-center justify-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-1"
            >
              <h2 className="text-white text-3xl md:text-[50px] font-medium leading-tight md:leading-[75px]">
                {stat.value}
              </h2>
              <p className="text-[#238EEB] text-sm md:text-[18px] font-medium leading-normal md:leading-[27px] whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
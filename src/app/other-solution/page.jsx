import TileCard from "@/components/layout/TileCard";
import { OTHER_SOLUTION } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="container pb-20">
      <div className="relative ">
        <Image
          src="/assets/pump-station/aiconnect-logo.svg"
          alt=""
          width={300}
          height={200}
          className="w-auto h-[100px] lg:h-[200px] absolute left-[-30px] lg:left-[-100px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center relative mt-4 lg:mt-0">
        <div className="ml-10 lg:mr-[-140px] lg:ml-0 h-[60px] lg:h-[152px] relative z-[10]">
          <Image
            src="/assets/waterflow4.png"
            alt=""
            width={300}
            height={200}
            className="w-auto h-full"
          />
        </div>
        <div className="static lg:relative right-16 lg:right-[145px]  xl:right-[215px] w-full xl:w-auto mt-8 lg:mt-0 mb-5 lg:mb-0">
          <h2 className="text-lg sm:text-xl lg:text-[60px] 2xl:text-[70px] xl:leading-[70px] text-darkBlue font-bowler [text-shadow:_2px_4px_3px_rgba(0_0_0_/_0.3)]">
            Other Solutions
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 justify-items-center lg:justify-items-start mt-8 lg:mt-20">
        {OTHER_SOLUTION?.map((service, index) => (
          <TileCard service={service} index={index}>
            <img src={service?.img} alt="" className={`w-full h-full `} />
          </TileCard>
        ))}
      </div>

      <ul className="flex flex-col gap-1 text-sm lg:text-base lg:w-[40%] mt-12 lg:mt-20 mb-10">
        <li className="list-disc">Cost-effectiveness: With minimal infrastructure required, our IoT-based solution ensures a low initial investment and reduced operational expenses.</li>
        <li className="list-disc">Improved water resource management: Constant near real-time monitoring enables data-driven decision-making and optimizes water use, ultimately preventing water loss and improving water distribution efforts.</li>
        <li className="list-disc">Enhanced safety and security: Monitoring water levels remotely reduces the need for manual inspections, mitigating potential safety hazards and human error risks.</li>
        <li className="list-disc">Maintenance efficiency: Our battery-operated IP65 rated submersible level sensors minimise the need for regular maintenance, saving time and resources.</li>
        <li className="list-disc">Long-term data analysis: Collecting historical data enables long-term trend analysis and better understanding of water consumption patterns, leading to improved water management strategies.</li>
      </ul>
    </div>
  );
};

export default page;

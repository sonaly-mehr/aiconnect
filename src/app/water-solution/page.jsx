import TileCard from "@/components/layout/TileCard";
import { WATER_SOLUTION } from "@/constants";
import Image from "next/image";
import React from "react";
import PortableWaterSolution from "./PortableWaterSolution";

const page = () => {
  return (
    <div className="container">
      <div className="flex items-center relative">
        <div className="mr-[-140px] h-[152px]">
          <Image
            src="/assets/waterflow2.png"
            alt=""
            width={300}
            height={200}
            className="w-auto h-full"
          />
        </div>
        <div className="relative right-[270px]">
          <h2 className="text-[70px] leading-[70px] text-darkBlue font-bowler [text-shadow:_2px_4px_3px_rgba(0_0_0_/_0.3)]">
            Water Solutions
          </h2>
        </div>
      </div>
      <div className="flex justify-between font-geometria font-normal text-[11.81px] text-dark">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icon1.svg"
            alt=""
            width={57}
            height={57}
            className="w-[57px] h-[57px]"
          />
          <p>Real Time Time Information of water quality</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icon2.svg"
            alt=""
            width={57}
            height={57}
            className="w-[57px] h-[57px]"
          />
          <p>
            Controlling and Managing the water system from anywhere at anytime
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icon3.svg"
            alt=""
            width={57}
            height={57}
            className="w-[57px] h-[57px]"
          />
          <p>Alerts and Notifications</p>
        </div>
      </div>
      <div className="flex justify-around font-geometria font-normal text-[11.81px] text-dark">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icon4.svg"
            alt=""
            width={57}
            height={57}
            className="w-[57px] h-[57px]"
          />
          <p>
            Eliminate the need of Manual Intervention and Reduce Labour costs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icon5.svg"
            alt=""
            width={57}
            height={57}
            className="w-[57px] h-[57px]"
          />
          <p>Accurate Data insights, graphs and reports for Decision Making</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 justify-items-center lg:justify-items-start mt-8 lg:mt-20">
        {WATER_SOLUTION?.map((service, index) => (
          <TileCard service={service} index={index} >
            <img src={service?.img} alt="" className={`w-full h-full `}/>
          </TileCard>
        ))}
      </div>

      <PortableWaterSolution/>
    </div>
  );
};

export default page;

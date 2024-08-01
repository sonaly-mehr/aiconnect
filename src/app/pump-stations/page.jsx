import TileCard from "@/components/layout/TileCard";
import { PUMP_STATION } from "@/constants";
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
            Pump Stations
          </h2>
          <p className="text-[#043D5D] text-xs lg:text-2xl lg:mt-2 xl:mt-[-6px]">
            Process Monitoring Solutions for Predictive Maintenance & Control
          </p>
        </div>
      </div>
      <div className="lg:w-[85%] mx-auto flex flex-col lg:flex-row gap-3 lg:gap-8 pt-8 border-t-[1px] border-[#E2E2E2]">
        <Image
          src="/assets/pump-station/package-pump.jpg"
          alt=""
          width={250}
          height={245}
          className="w-[80%] h-auto rounded-xl"
        />
        <ul className="flex flex-col gap-1 text-[13px] xl:text-[15px] font-normal text-[#595959]">
          <li className="list-disc [text-shadow:_0px_4px_4px_rgba(0_0_0_/_0.25)]">
            Cost savings : IoT sensors provide real-time data on pump
            performance, allowing operators to optimize pump usage and reduce
            cost. They can also detect early pump failure signs, reducing
            downtime and repair costs.
          </li>
          <li className="list-disc [text-shadow:_0px_4px_4px_rgba(0_0_0_/_0.25)]">
            Higher efficiency: IoT-based remote pump control enables
            users/operators to manage and adjust pump settings from anywhere, as
            a result the pump station will run with more efficient water usage,
            and automation resulting in cost savings and improved
            sustainability. 
          </li>
          <li className="list-disc [text-shadow:_0px_4px_4px_rgba(0_0_0_/_0.25)]">
            Improved safety and security: IoT sensors can detect potential
            safety hazards, such as leaks or overpressure, and trigger alerts to
            maintenance personnel to address the issue immediately. Such
            IoT-based pump maintenance systems help prevent accidents and
            injuries, ensuring a safer work environment.
          </li>
          <li className="list-disc [text-shadow:_0px_4px_4px_rgba(0_0_0_/_0.25)]">
            Better water management practices: Track water usage in real-time
            using IoT to enable operators to optimize water usage and identify
            opportunities for conservation. Make cost savings and improved
            sustainability efforts the norm with IoT-based pump monitoring.
          </li>
          <li className="list-disc [text-shadow:_0px_4px_4px_rgba(0_0_0_/_0.25)]">
            Easy SCADA Integration, makes it easy and cost effective to bring
            old pump stations up to date.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 justify-items-center lg:justify-items-start mt-8 lg:mt-20">
        {PUMP_STATION?.map((service, index) => (
          <TileCard service={service} index={index}>
            <img src={service?.img} alt="" className={`w-full h-full `} />
          </TileCard>
        ))}
      </div>
    </div>
  );
};

export default page;

import TileCard from "@/components/layout/TileCard";
import { PUMP_STATION, STROM_WATER_SOLUTION } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="container pb-20">
      <div className="flex flex-col lg:flex-row lg:items-center relative mt-4 lg:mt-0">
        <div className="lg:mr-[-140px] h-[70px] lg:h-[152px] relative z-[10]">
          <Image
            src="/assets/waterflow4.png"
            alt=""
            width={300}
            height={200}
            className="w-auto h-full"
          />
        </div>
        <div className="w-full static lg:relative right-16 lg:right-[145px]  xl:right-[215px] mb-5 lg:mb-0">
          <h2 className="text-lg sm:text-xl lg:text-[40px] 2xl:text-[70px] lg:leading-[50px]  xl:leading-[70px] text-darkBlue font-bowler [text-shadow:_2px_4px_3px_rgba(0_0_0_/_0.3)]">
            Storm water solution
          </h2>
          <p className="text-[#043D5D] text-xs lg:text-sm lg:mt-2 xl:mt-[-6px] text-left lg:text-center">
            Our Environmental Monitoring solutions address all of your real-time
            monitoring, reporting and optimisation needs, providing you and your
            team with transparency, auditability + new predictive capabilities
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 justify-items-center lg:justify-items-start mt-8 lg:mt-20">
        {STROM_WATER_SOLUTION?.map((service, index) => (
          <TileCard service={service} index={index}>
            <img src={service?.img} alt="" className={`w-full h-full `} />
          </TileCard>
        ))}
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-20">
        <div className="lg:basis-[70%] text-black text-xs font-normal flex flex-col gap-3 lg:gap-0">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/strom-water-solution/icon1.png"
              alt=""
              className="w-[80px] xl:w-[100px] h-auto"
            />
            <p>Water Bodies, Reservoirs, Pipes, Pumps, Valves etc</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/assets/strom-water-solution/icon2.png"
              alt=""
              className="w-[80px] xl:w-[100px] h-auto"
            />
            <p>Deploy sensors and integrate existing systems + assets Flow meters, turbidity, pH, Temperature, TSS. many many more pollutants  </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/assets/strom-water-solution/icon3.png"
              alt=""
              className="w-[80px] xl:w-[100px] h-auto"
            />
            <p>LoRaWAN, MODBUS, Cellular, Wireless, Bluetooth etc</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/assets/strom-water-solution/icon4.png"
              alt=""
              className="w-[100px] h-auto"
            />
            <p>IoT Platforms, Datas, APIs, (Processing of data streams) <br /> 24×7 Real-time energy usage availability via web dashboard & mobile app.
            User defined settings for all equipment limits & priority based alert.</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/assets/strom-water-solution/icon5.png"
              alt=""
              className="w-[80px] xl:w-[100px] h-auto"
            />
            <p>Dashboards, Visualization, Alerts, Reports etc. <br />
            Alert users of energy spikes & critical data via SMS, e-mail & Push.</p>
          </div>
        </div>
        <div className="lg:basis-[30%]">
            <img src="/assets/strom-water-solution/wastewater.png" alt="" className="w-full h-full rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default page;

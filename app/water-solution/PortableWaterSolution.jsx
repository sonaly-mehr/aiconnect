import Image from "next/image";
import React from "react";

const PortableWaterSolution = () => {
  return (
    <div className=" pb-0 pt-20">
      <h2 className="font-bowler text-[#005CAB] uppercase text-2xl lg:text-4xl leading-[24px] text-center mb-5">
        POTABLE WATER SOLUTIONS
      </h2>
      <div>
        <Image src="/assets/portable.svg" alt="" width={500} height={200} className="w-full h-auto"/>
      </div>

      <div className="mt-16">
      <h2 className="font-bowler text-[#005CAB] uppercase text-2xl lg:text-4xl leading-[24px] text-center mb-5">
        WASTE WATER SOLUTIONS
      </h2>
      <div>
        <Image src="/assets/water-solution/wwtp.jpg" alt="" width={500} height={200} className="w-full h-auto"/>
      </div>
      </div>
      <h4 className="text-center text-[#848484] font-geometria font-medium my-8 text-base lg:text-[22px] capitalize">
        Work with the technology/process joint team under one umbrella
      </h4>
      <ul className="text-sm lg:text-base text-[#787878] font-geometria font-normal flex flex-col lg:flex-row gap-2 lg:gap-5 justify-between flex-wrap pl-4">
        <li className="list-decimal basis-[48%]">
          Monitoring of critical operational data received from the equipment
          via a web-based system
        </li>
        <li className="list-decimal basis-[48%]">Device management</li>
        <li className="list-decimal basis-[48%]">
          Creating business logic for the application to meet the business
          objectives
        </li>
        <li className="list-decimal basis-[48%]">
          Providing alarm and alert notifications via email or SMS messages
        </li>
        <li className="list-decimal basis-[48%]">
          Collection of historical data to enable energy consumption forecasting
          and fault detection
        </li>
        <li className="list-decimal basis-[48%]">
          Multiple dashboards to provide the right users with the right insights
        </li>
        <li className="list-decimal basis-[48%]">
          Testing of the application, making sure all of the above goals are
          met, based on the below solution architecture:
        </li>
      </ul>
    </div>
  );
};

export default PortableWaterSolution;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TileCard = ({ service, index, children }) => {
  const path = usePathname();

  return (
      <Link
        class="flipper-container cursor-pointer rounded-xl overflow-hidden"
        key={index}
        href={service?.link ? service?.link : "#"}
      >
        <div class="flip">
          <div class="front face text-center rounded-xl">
            <div
              className={` relative w-full h-[300px] lg:h-[330px] card-overley`}
            >
              {/* <div className="w-full  h-full bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${service?.img})`}}> */}
              {children}
              {/* <img src={service?.img} alt="" className={`w-full h-full object-cover `}/> */}
              {/* ${index!==5 && index !==7 ? 'object-cover' : 'object-contain'} ${index===4 && '!object-fill'}`} */}

              <div className="absolute linear-bg w-full h-[330px] left-0 bottom-0">
                <h5 className="text-gray text-sm leading-6 font-bold uppercase font-geometria absolute bottom-6 left-5 pr-4 text-left">
                  {service?.heading}
                </h5>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div class="back face text-white flex flex-col px-6 py-2 h-full text-left">
            {service?.descrp && (
              <p className="font-lightl font-geometria text-[11px] text-left mt-3">
                {service?.descrp}
              </p>
            )}
            {service?.list && (
              <ul className="flex flex-col gap-1 mt-3 text-left px-2">
                {service?.list?.map((item) => (
                  <li
                    className={`font-lightl list-disc  font-geometria ${
                      path === "/water-solution" ? "text-[11px]" : "text-xs"
                    } text-left`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Link>
  );
};

export default TileCard;

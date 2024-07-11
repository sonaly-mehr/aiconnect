"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import service from "../../../../public/assets/service13.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import { list } from "postcss";

const Services = () => {
  const services = [
    {
      img: "/assets/all_infrastructure_process.jpeg",
      heading: "All Infrastructure Process Connectivity from Anywhere",
      list: [
        "The types of technologies used such as Lora, NB-Iot, Mioty, Zigbee, Bluetooth, Cellular",
        "Pump Performance Sensors",
        "Dynamic Fluid Processes sensors",
        "Water Quality Sensors",
        "Ancillary Systems in Plant Sensors",
      ],
    },
    {
      img: "/assets/mobile_connectivity.jpg",
      heading: "Mobile Connectivity on Cell Phone, Tablets, Laptop",
      list: [
        "Remote management of devices and systems",
        "Faster data collection & analysis",
        "Smarter control",
        "WaTime-saving automation of activities",
        "Cost-effective operations",
        "Improved user experience",
      ],
    },
    {
      img: "/assets/sutainability.jpg",
      heading:
        "Easier Sustainability Objectives Through LEED & WELL Certifications",
      list: [
        " LEED identifies water consumption and monitoring in real-time. It awards points for deploying systems supporting water use reduction — indoors and outdoors.",
        "IoT technologies help buildings preserve water and enhance the quality for occupant safety. IoT-based environmental applications help achieve all relevant water-related standards for LEED and WELL.",
      ],
    },
    {
      img: "/assets/service13.jpg",
      heading: "Predictive/Preventive Maintenance Matters",
      list: [
        "Having a preventive maintenance (PM) plan will reduce how often full replacement is necessary. Since each fluid system is unique, the PM schedule should reflect that reality. With suitable monitoring tools PM becomes an easy task",
      ],
    },
    {
      img: "/assets/onsite_wastewater_solution.jpg",
      heading: "Onsite Wastewater Solutions",
      list: [
        "Wastewater facilities use significant amounts of energy and are full of assets that are difficult, disruptive and hazardous to access and maintain. Pump downtime can cause significant disruption, production loss, and may even cause damage to the pump and other equipment – shortening lifespans and increasing maintenance costs.",
        "Wastewater Facility IoT solution could enable energy use reduction and implement intelligent maintenance schedules & improve the uptime of the assets",
      ],
    },
    {
      img: "/assets/storm_water.png",
      heading: "Storm Water Solutions",
      list: [
        "Enable smart grid communication between industrial devices and energy distribution equipment.",
      ],
    },
    {
      img: "/assets/Wastewater_Treatment_plant.png",
      heading: "Connectivity Water/Wastewater Plants",
      list: [
        "Enable network connectivity, wireless communication",
        "remote access and monitoring and much more for",
        "water applications.",
      ],
    },
    {
      img: "/assets/PORTABLE_WATER_SOLUTION.jpg",
      heading: "Potable Water Solutions",
      list: [
        "Raw water supply management",
        "Water treatment plant monitoring",
        "Water Quality Monitoring at WTP",
        "Water quality monitoring in distribution system",
      ],
    },
    {
      img: "/assets/PUMP_STATION_SOLUTIONS.jpg",
      heading: "Pump Stations Solutiions",
      list: [
        "Optimize pump usage and reduce cost. ",
        "Improved sustainability. ",
        "Leaks or over-pressure, and trigger alerts to maintenance personnel,ensuring a safer work environment.",
        "Better water management practices",
        "Improved reliability and maintenance",
      ],
    },
    {
      img: "/assets/environmental_monitoring.jpeg",
      heading: "Environmental Monitoring",
      list: [
        "Water quality monitoring",
        "Energy monitoring",
        "communication interfaces",
        "Toxic Gas Detection",
        "Water  body monitoring",
      ],
    },
    {
      img: "/assets/OTHER_SOLUTIONS_2.jpg",
      heading: "Other Solutions",
      list: [
        "Agricultural Operation Monitoring",
        "Industrial Water Quality/Quantity Monitoring",
        "Livestock Management",
        "Brewery & Distillation IoT Solutions",
        "Environmental Monitoring",
        "Mining Operations Monitoring",
        "Energy Monitoring",
        "Power Plant Process Monitoringg",
        "Asset Managementg",
        "Air Quality Monitoring",
        "Building HVAC System Monitoring",
      ],
    },
    {
      img: "/assets/OPERATION_CONSOLIDATION.png",
      heading: "Operations Consolidation",
      list: [
        "Consolidation of all Operations in One Control Center",
        "Monitoring of Inter dependencies of Operations",
        "Easy Maintenance and Deployment of New Process Monitoring",
        "Reduce Manual Efforts in Process Monitoring",
      ],
    },
  ];
  return (
    // <motion.div
    //   variants={staggerContainer}
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: true, amount: 0.25 }}
    // >
    <>
      <div className="container pt-14 lg:pt-24 pb-10 lg:pb-16" id="solutions">
        <h4 className="heading mb-1 lg:mb-2 text-center">Our Solutions</h4>
        <p className="lg:w-1/2 mx-auto text-center  text-[13px]  lg:text-base font-geometria font-light text-[##616161] mb-8 lg:mb-12">
          With more than 26 years of experience in Environmental
          Engineering...We Offer a Complete Solution 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 justify-items-center lg:justify-items-start">
          {services?.map((service, index) => (
            // <motion.div
            //   variants={fadeIn(
            //     "right",
            //     "spring",
            //     index * 0.5,
            //     0.75
            //   )}
            //   key={index}
            // >
            <div
              class="flipper-container cursor-pointer rounded-xl overflow-hidden"
              key={index}
            >
              <div class="flip">
                <div class="front face text-center rounded-xl">
                  <div
                    className={` relative w-full h-[300px] lg:h-[330px] card-overley`}
                    // style={{ backgroundImage: `url(${service?.img})` }}
                  >
                    {/* bg-no-repeat bg-center bg-contain */}
                    <img src={service?.img} alt="" className="w-full  h-full" />
                    <div className="absolute linear-bg w-full h-[330px] left-0 bottom-0">
                      <h5 className="text-gray text-sm leading-6 font-bold uppercase font-geometria absolute bottom-6 left-5 pr-4 text-left">
                        {service?.heading}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="back face text-white flex flex-col px-6 py-2 h-full text-left">
                  {service?.list && (
                    <ul className="flex flex-col gap-1 mt-3 text-left px-2">
                      {service?.list?.map((item) => (
                        <li className=" font-lightl list-disc  font-geometria text-[13px] text-left">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </motion.div> */}
        <div className="mt-10 lg:w-[70%]">
          <div className="">
            <h4 className="mb-3 font-geometria capitalize text-xl lg:text-2xl text-blue font-medium">
              Leverage on Engineering Process Design expertise 
            </h4>
            <p className="text-base lg:text-lg font-geometria font-normal text-[#595959]">
              With more than 26 years of experience in Environmental
              Engineering...We Offer a Complete Solution 
            </p>
            <p className="uppercase font-normal font-geometria text-sm lg:text-base mt-4 mb-6 text-[#595959]">
              Work with the technological leader 
            </p>
            <p className="text-sm lg:text-base font-light font-geometria text-[#595959]">
              Book an appointment with our team using the form on this page. The
              information you provide will be used to match you with our top
              expert in your geographic region. We'll then follow up to schedule
              time to discuss your work via phone, video, or email. Your
              choice! Talk to one of experts to see if the products you're
              considering are right for you or if the project you're starting
              has what you need.
            </p>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
};

export default Services;

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

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon
        style={{
          ...style,
        }}
        className="text-white text-xl bg-blue w-12 h-12 rounded-full p-3 "
      />
    </div>
  );
}

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon
        style={{
          ...style,
        }}
        className="text-white text-xl bg-blue w-12 h-12 rounded-full p-3 "
      />
    </div>
  );
}

const Services = () => {

  const services = [
    {
      img: "/assets/service1.jpg",
      heading: "All Infrastructure Process Connectivity from Anywhere",
      descp: "The types of sensors typically used:",
      list: [
        "Pump Performance Sensors",
        "Dynamic Fluid Processes sensors",
        "Water Quality Sensors",
        "Ancillary Systems in Plant Sensors",
      ],
    },
    {
      img: "/assets/service2.jpg",
      heading: "Mobile Connectivity on Cell Phone, Tablets, Laptop",
      descp:
        "Even if a device can’t connect due to network issues, you can rely on the automated back-fill to retrieve device history and fill the gaps in the historical data set.",
    },
    {
      img: "/assets/service3.jpg",
      heading: "Achieve sustainability through LEED and/or WELL certifications",
      list: [
        "LEED identifies water consumption and monitoring in real-time. It awards points for deploying systems supporting water use reduction — indoors and outdoors",
        "IoT technologies help buildings preserve water and enhance the quality for occupant safety. IoT-based environmental applications help achieve all relevant water-related standards for LEED and WELL.",
      ],
    },
    {
      img: "/assets/service4.jpg",
      heading: "Environmental Monitoring",
      descp:
        "Connect AC units from all major manufacturers to KNX, Modbus, BACnet etc. with ready-made AC communication interfaces.",
    },
    {
      img: "/assets/service5.jpg",
      heading: "Wastewater Solutions",
      descp:
        "Wastewater facilities use significant amounts of energy and are full of assets that are difficult, disruptive and hazardous to access and maintain. Pump downtime can cause significant disruption, production loss, and may even cause damage to the pump and other equipment – shortening lifespans and increasing maintenance costs. Wastewater Facility IoT solution could enable energy use reduction and implement intelligent maintenance schedules & improve the uptime of the assets",
    },
    {
      img: "/assets/service6.jpg",
      heading: "",
      descp:
        "Enable smart grid communication between industrial devices and energy distribution equipment.",
    },
    {
      img: "/assets/service7.jpg",
      heading: "Potable Water Solutions",
      descp:
        "Make sure your generator is ready to start when needed — No matter which brand of generator or control panel you are using.",
    },
    {
      img: "/assets/service8.jpg",
      heading: "Other Solutions",
      descp:
        "Enable building equipment (HVAC, electricity, lighting, fire, access controls, escalators etc.) to communicate with building systems.",
    },
    {
      img: "/assets/service9.jpg",
      heading: "Connectivity for Pump Stations",
      descp:
        "Wireless connectivity, safety, remote access and more for Automated Guided Vehicles (AGVs) and Autonomous Mobile Robots (AMRs).",
    },
    {
      img: "/assets/service10.jpg",
      heading: "Connectivity Water/Wastewater Plants",
      descp:
        "Enable network connectivity, wireless communication, remote access and monitoring and much more for water applications.",
    },
    {
      img: "/assets/service11.jpg",
      heading: "Collaborative Troubleshooting",
      descp:
        "Use state of the art networking tools and competences to fix network problems and, even better, prevent your network from going down.",
    },
    {
      img: "/assets/service12.jpg",
      heading: "Operations Consolidation",
      descp: "",
    },
    {
      img: "/assets/service13.jpg",
      heading: "Predictive/Preventive Maintenance Matters",
      descp:
        " Having a preventive maintenance (PM) plan will reduce how often full replacement is necessary. Since each industrial fluid system is unique, the PM schedule should reflect that reality. With suitable monitoring tools PM becomes an easy task",
    },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto pt-14 lg:pt-24 pb-10 lg:pb-16" id="solutions">
        <h4 className="heading mb-6 lg:mb-12 text-center">Our Solutions</h4>

        {/* <Slider {...settings}>
      {services?.map((service, index) => (
          <div class="flipper-container cursor-pointer rounded-xl" key={index}>
            <div class="flip">
              <div class="front face text-center">
                <div className="linear-bg relative w-full h-full">
                  <Image
                    src={service?.img}
                    alt=""
                    width={250}
                    height={250}
                    className="w-full h-[250px] rounded-xl"
                  />
                  <h5 className="text-gray text-lg font-medium font-roboto absolute bottom-4 left-4 text-left">
                    {service?.heading}
                  </h5>
                </div>
              </div>
              <div class="back face">
                <p className="text-white text-lg flex justify-center items-center px-5 py-7">
                  {service?.descp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {services?.map((service, index) => (
            <motion.div
              variants={fadeIn(
                "right",
                "spring",
                index * 0.5,
                0.75
              )}
              key={index}
            >
              <div class="flipper-container cursor-pointer rounded-xl">
                <div class="flip">
                  <div class="front face text-center">
                    <div
                      className={` relative bg-no-repeat bg-center bg-cover w-full h-[380px] card-overley`}
                      style={{ backgroundImage: `url(${service?.img})` }}
                    >
                      <div className="relative linear-bg w-full h-[380px]">
                      <h5 className="text-gray text-sm leading-6 font-bold uppercase font-geometria absolute bottom-6 left-5 pr-4 text-left">
                        {service?.heading}
                      </h5>
                    </div>
                    </div>
                  </div>
                  <div class="back face text-white text-base flex flex-col justify-center items-center px-5 py-7 h-full text-center">
                    <p className=" font-light font-geometria">{service?.descp}</p>
                    {service?.list && (
                      <ul className="flex flex-col gap-1 mt-3">
                        {service?.list?.map((item) => (
                          <li className=" font-lightl list-disc  font-geometria text-sm text-left">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
    </motion.div>
  );
};

export default Services;

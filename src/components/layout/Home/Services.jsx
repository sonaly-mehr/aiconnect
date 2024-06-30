import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      img: "/images/service2.jpg",
      heading: "Mobile Connectivity on Cell Phone, Tablets, Laptop",
      descp:
        "Even if a device can’t connect due to network issues, you can rely on the automated back-fill to retrieve device history and fill the gaps in the historical data set.",
    },
    {
      img: "/images/service3.jpg",
      heading: "Mobile Connectivity on Cell Phone, Tablets, Laptop",
      descp:
        "Even if a device can’t connect due to network issues, you can rely on the automated back-fill to retrieve device history and fill the gaps in the historical data set.",
    },
    {
      img: "/images/service4.jpg",
      heading: "Mobile Connectivity on Cell Phone, Tablets, Laptop",
      descp:
        "Even if a device can’t connect due to network issues, you can rely on the automated back-fill to retrieve device history and fill the gaps in the historical data set.",
    },
    {
      img: "/images/service5.jpg",
      heading: "Mobile Connectivity on Cell Phone, Tablets, Laptop",
      descp:
        "Even if a device can’t connect due to network issues, you can rely on the automated back-fill to retrieve device history and fill the gaps in the historical data set.",
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <h4 className="heading mb-14 text-center">Our Services</h4>
      <div className="grid grid-cols-4 gap-x-6">
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
      </div>
    </div>
  );
};

export default Services;

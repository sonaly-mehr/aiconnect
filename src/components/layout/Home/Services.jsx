import { SERVICES } from "@/constants";
import TileCard from "../TileCard";

const Services = () => {
  return (
    <>
      <div className="container pt-14 lg:pt-24 pb-10 lg:pb-16">
        <h4 className="heading mb-1 lg:mb-2 text-center">Our Solutions</h4>
        <p className="lg:w-1/2 mx-auto text-center  text-[13px]  lg:text-base font-geometria font-light text-[##616161] mb-8 lg:mb-12">
          With more than 26 years of experience in Environmental
          Engineering...We Offer a Complete Solution 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 justify-items-center lg:justify-items-start">
          {SERVICES?.map((service, index) => (
            <TileCard service={service} index={index}>
              {/* <img src={service?.img} alt="" className={`w-full h-full ${index==7 ? 'object-contain' : 'object-cover'} ${index===4 && 'object-fill'}`}/> */}
              <img src={service?.img} alt="" className="w-full h-full object-fit"/>
            </TileCard>
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
    </>
  );
};

export default Services;

"use client";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="about-bg">
        <div className="container mx-auto pt-24 pb-20 shadow-[0px_10px_33px_0px_#dcdbdb]">
          <h4 className="heading mb-16 text-center">About Us</h4>
          <div className="flex justify-between gap-10 items-center">
            <div className="basis-[60%]">
              <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                <video
                  playsInline=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="w-auto h-auto min-w-full min-h-full object-cover"
                >
                  <source src="/assets/about-vid.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
            <div className="basis-[40%]">
              <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
                <h4 className="text-blue font-michroma mb-10 font-normal text-[25px]">
                  Who We Are......
                </h4>
                <p className="text-base font-light font-roboto text-[#555]">
                  Welcome to AI Connection, where we bring over 26 years of
                  unparalleled expertise in Environmental Engineering to the
                  forefront of technological innovation.  At AI Connect, we are
                  dedicated to providing comprehensive solutions that merge
                  advanced environmental engineering practices with cutting-edge
                  AI-driven process control.{" "}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-between gap-14 items-center mt-10">
            <div className="basis-[40%]">
              <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
                <h4 className="text-blue font-michroma mb-10 font-normal text-[25px]">
                  Our Commitment
                </h4>
                <p className="text-base font-light font-roboto text-[#555]">
                  At AI Connection, we believe that the future of Environmental
                  Engineering lies in the seamless integration of advanced
                  technology and traditional engineering principles. Our
                  commitment is to lead this evolution by offering
                  next-generation solutions that are both innovative and
                  practical. We are dedicated to helping our clients achieve
                  their dedicated to helping our clients achieve their
                  environmental and operational goals through intelligent,
                  data-driven process control.{" "}
                </p>
              </motion.div>
            </div>
            <div className="basis-[60%]">
              <motion.div variants={fadeIn("left", "tween", 0.5, 1)}>
                <video
                  playsInline=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="w-auto h-[350px] min-w-full object-cover"
                >
                  <source src="/assets/backVideo.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;

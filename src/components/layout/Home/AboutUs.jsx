"use client";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutUs = () => {
  const myRef = useRef();
  useEffect(() => {
    if (window.location.search === "?goTo=about") {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className="about-bg shadow-[0px_10px_33px_0px_#e6e6e6] overflow-hidden"
        id="about"
        ref={myRef}
      >
        <div className="container mx-auto pt-14 lg:pt-24 pb-10 lg:pb-20">
          <h4 className="heading mb-8 lg:mb-16 text-center">About Us</h4>
          <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:justify-between items-center mb-12 lg:mb-0">
            <div className="lg:basis-1/2">
              <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                <video
                  playsInline=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="w-auto h-auto min-w-full min-h-full object-cover"
                >
                  <source src="/assets/about.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
            <div className="lg:basis-1/2">
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="lg:pl-16"
              >
                <h4 className="text-blue font-bowler mb-3 lg:mb-8  text-xl">
                  Who We Are......
                </h4>
                <p className="text-base font-light font-geometria text-[#555]">
                  Welcome to AI Connection, where we bring over 26 years of
                  unparalleled expertise in Environmental Engineering to the
                  forefront of technology innovation.  At AI Connection, we are
                  dedicated to providing comprehensive solutions that merge
                  advanced environmental engineering practices with cutting-edge
                  AI-driven process control.{" "}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex gap-5 lg:gap-0 flex-col-reverse lg:flex-row lg:justify-between items-center">
            <div className="lg:basis-1/2">
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="lg:pr-16"
              >
                <h4 className="text-blue font-bowler mb-4 lg:mb-8 text-xl">
                  Our Commitment
                </h4>
                <p className="text-base font-light font-geometria text-[#555]">
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
            <div className="lg:basis-1/2">
              <motion.div variants={fadeIn("left", "tween", 0.5, 1)}>
                <video
                  playsInline=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="w-auto h-[350px] min-w-full object-cover"
                >
                  <source src="/assets/our_commitment.mp4" type="video/mp4" />
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

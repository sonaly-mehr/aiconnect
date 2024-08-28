"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import Navbar from "../Navbar";
// import MobileNav from "../MobileNav";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray relative z-[1]"
        >
          <div className="h-[40vh] sm:h-[50vh] md:h-screen overflow-hidden relative">
            <video
              playsInline=""
              autoPlay={true}
              muted={true}
              loop={true}
              className="absolute w-auto h-auto min-w-full lg:min-h-full object-contain md:object-none -z-[100] top-0 lg:top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[15%] lg:-translate-y-1/2"
            >
              <source src="/assets/hero-vid.mp4" type="video/mp4" />
            </video>

            <div className="h-full hidden md:flex container">
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="pt-40"
              >
                <h2 className="text-[52px] leading-[58px] tracking-[-0.4px] uppercase font-bowler text-dark">
                  Monitoring <br /> Any <br /> Process <br />{" "}
                  <span className="inline-block w-full text-center">from </span>
                  <br />
                  <span className="text-blue">Anywhere</span>
                </h2>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full">
            {/* Navbar */}
            <Navbar />
          </div>

          <div className="h-full flex md:hidden container justify-center">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="pt-5"
            >
              <h2 className="text-[36px] leading-[38px] tracking-[-0.4px] uppercase font-bowler text-dark">
                Monitoring <br /> Any <br /> Process <br />{" "}
                <span className="inline-block w-full text-center">from </span>
                <br />
                <span className="text-blue inline-block w-full text-right">
                  Anywhere
                </span>
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;

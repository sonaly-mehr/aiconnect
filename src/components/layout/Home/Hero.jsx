"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="h-[80vh] overflow-hidden relative">
        <video
          playsInline=""
          autoPlay={true}
          muted={true}
          loop={true}
          className="absolute w-auto h-auto min-w-full min-h-full object-cover -z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/assets/hero-vid.mp4" type="video/mp4" />
        </video>
        <div className="h-full flex items-center container mx-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <h2 className="text-blue text-[42px] leading-[68px] tracking-[-0.4px] uppercase font-semibold font-michroma">
              Monitoring <br /> Any Process <br /> for Your <br /> Business
            </h2>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray relative z-[-1]"
      >
        <div className="h-screen overflow-hidden relative">
          <video
            playsInline=""
            autoPlay={true}
            muted={true}
            loop={true}
            className="absolute w-auto h-auto min-w-full min-h-full object-none -z-[100] top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[15%] -translate-y-1/2"
          >
            <source src="/assets/hero-vid.mp4" type="video/mp4" />
          </video>

          <div className="h-full flex container">
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="pt-40">
              <h2 className="text-[52px] leading-[54px] tracking-[-0.4px] uppercase font-bowler text-dark">
                Monitoring <br /> Any <br /> Process <br />{" "}
                <span className="inline-block w-full text-center">for </span>
                <br />{" "}
                <span className="inline-block w-full text-center">
                  Your
                </span>{" "}
                <br />
                <span className="text-blue">Business</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full">
        <nav className="container mt-10">
          <div className="flex gap-20 items-center">
            {/* <motion.nav variants={navVariants}> */}
            <h4 className="text-dark font-bowler text-base lg:text-2xl">
              <span className="text-blue">AI</span> Connection
            </h4>
            {/* </motion.nav> */}
            {/* <motion.nav variants={navVariants}> */}
            <ul className="hidden lg:flex items-center gap-8 nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#solutions">Solutions</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            <div className="">

            </div>
            {/* </motion.nav> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hero;

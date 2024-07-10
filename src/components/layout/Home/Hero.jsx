"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

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
          <div className="h-[45vh] md:h-screen overflow-hidden relative">
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
          <div className="absolute top-0 left-0 w-full">
            <nav className="container mt-3 lg:mt-10">
              <div className="flex justify-between lg:justify-normal lg:gap-20 items-center">
                {/* <motion.nav variants={navVariants}> */}
                <Link
                  href="/"
                  className="text-dark font-bowler text-lg lg:text-2xl"
                >
                  <span className="text-blue">AI</span> Connection
                </Link>
                {/* </motion.nav> */}
                {/* <motion.nav variants={navVariants}> */}
                <ul className="hidden md:flex items-center gap-8 nav-links">
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
                <div
                  className="bg-white rounded-lg p-2 cursor-pointer block md:hidden"
                  onClick={() => setNav(!nav)}
                >
                  <Bars3Icon className="text-black" width={25} height={25} />
                </div>

                {/* </motion.nav> */}
              </div>
            </nav>
          </div>

          <div className="h-full flex md:hidden container justify-center">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="pt-6"
            >
              <h2 className="text-[36px] leading-[38px] tracking-[-0.4px] uppercase font-bowler text-dark">
                Monitoring <br /> Any <br /> Process <br />{" "}
                <span className="inline-block w-full text-center">for </span>
                <br />{" "}
                <span className="inline-block w-full text-center">
                  Your
                </span>{" "}
                <br />
                <span className="text-blue inline-block w-full text-right">
                  Business
                </span>
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <div className="relative z-50">
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-screen h-screen bg-gray p-7 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" className="text-dark font-bowler text-lg">
                <span className="text-blue">AI</span> Connection
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
              >
                <XMarkIcon className="text-dark" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="pt-16 flex flex-col">
            <ul className="uppercase nav-links flex flex-col gap-7">
              <li onClick={() => setNav(false)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setNav(false)}>
                {" "}
                <Link href="#solutions">Solutions</Link>
              </li>
              <li onClick={() => setNav(false)}>
                {" "}
                <Link href="#about">About</Link>
              </li>
              <li onClick={() => setNav(false)}>
                {" "}
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

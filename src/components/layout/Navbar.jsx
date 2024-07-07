"use client";
import { navVariants, staggerContainer } from "@/utils/Motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray py-6 shadow-[0px_0px_10px_0px_#d7d4d4]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto flex justify-between items-center">
        <motion.nav variants={navVariants}>
          <h4 className="text-darkBlue font-bowler text-2xl">
            AI Connection
          </h4>
          </motion.nav>
          <motion.nav variants={navVariants}>
            <ul className="flex items-center gap-10 nav-links">
              <li>
                <Link href="#" className="!text-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">Solutions</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
            </ul>
          </motion.nav>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

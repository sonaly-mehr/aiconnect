"use client";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/Motion";
import React from "react";

const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="bg-gray py-7 lg:py-8">
        <div className="container mx-auto">
          <p className="text-dark font-normal text-sm lg:text-base font-geometria text-center">
            Copyright © 2024 | Powered by AIConnection
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

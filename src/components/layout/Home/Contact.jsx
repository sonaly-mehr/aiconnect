'use client'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className=""
  >
    <div className="container pt-20 pb-28">
      <div className="flex   shadow-[0px_2px_10px_1px_#cbcbcb]">
        <div className="basis-[60%] bg-gray p-10">
        <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
          <h2 className="heading mb-10">Contact Us</h2>
          </motion.div>
          <form action="">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="label">
                  Your name
                </label>
                <input type="text" className="input" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="label">
                  Your email
                </label>
                <input type="text" className="input" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="label">
                  Subject
                </label>
                <input type="text" className="input" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="label">
                  Your message(optional)
                </label>
                <textarea type="text" className="input" rows={4} />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="label">
                  Attach your document(optional)
                </label>
                <input type="file" className="input" />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-darkBlue text-white font-roboto font-semibold text-lg px-10 py-2.5 rounded-lg"
              >
                Submit
              </button>
            </div>
            </motion.div>
          </form>
        </div>
        <div className="basis-[40%] bg-blue flex justify-center items-center">
          <Image
            src="/assets/contact.png"
            alt="contact"
            width={300}
            height={300}
            className=""
          />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Contact;

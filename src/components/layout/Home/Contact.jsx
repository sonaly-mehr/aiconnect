"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Motion";
import React, { useEffect, useRef } from "react";

const Contact = () => {
  const myRef = useRef();
  useEffect(() => {
    if (window.location.search === "?goTo=contact") {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=""
    >
      <div className="container pt-20 pb-16 lg:pb-28 " id="contact" ref={myRef}>
        <div className="flex contact-bg  shadow-[0px_0px_10px_1px_#d8d8d8] rounded-lg">
          <div className="lg:basis-[50%] bg-gray px-4 py-7 lg:py-10 lg:px-10 relative z-10 w-full">
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <h2 className="heading mb-5 lg:mb-10 text-center lg:text-left">Contact Us</h2>
            </motion.div>
            <form action="">
              <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
                <div className="flex flex-col gap-2.5 lg:gap-4">
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
                <div className="mt-6 lg:mt-8 flex md:block justify-center">
                  <button
                    type="submit"
                    className="bg-darkBlue text-white font-geometria font-medium uppercase text-sm lg:text-base px-10 py-2 lg:py-2.5 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

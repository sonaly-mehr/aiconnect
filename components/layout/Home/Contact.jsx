"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/Motion";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const myRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null, // Add file state
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (files[0].size > 10 * 1024 * 1024) {
        toast.error("File size exceeds the 10 MB limit.");
        return;
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);
    if (formData.file) {
      formPayload.append("file", formData.file); // Append the file if provided
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formPayload, // Send the form data as multipart/form-data
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          file: null,
        });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

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
    >
      <div className="container pt-20 pb-16 lg:pb-28" id="contact" ref={myRef}>
        <div className="flex contact-bg shadow-[0px_0px_10px_1px_#d8d8d8] rounded-lg">
          <div className="lg:basis-[50%] bg-gray px-4 py-7 lg:py-10 lg:px-10 relative z-10 w-full">
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <h2 className="heading mb-5 lg:mb-10 text-center lg:text-left">
                Contact Us
              </h2>
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="input"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="input"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="input"
                rows={4}
              />
              <input
                type="file"
                name="file"
                onChange={handleChange} // Handle file change
                className="input"
              />
              <button
                type="submit"
                className="bg-darkBlue text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
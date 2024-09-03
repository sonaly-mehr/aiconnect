'use client'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/Motion";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner"; // Import Sonner for notifications

const Contact = () => {
  const myRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('message', formData.message);
    if (formData.file) {
      data.append('file', formData.file);
    }

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error(result.message || "Unable to send email");
      }
    } catch (error) {
      toast.error("Unable to send email");
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
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input"
                required
              />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="input"
                required
              />
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="input"
              />
              <button
                type="submit"
                className="bg-darkBlue text-white font-geometria font-medium uppercase text-sm lg:text-base px-10 py-2 lg:py-2.5 rounded-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
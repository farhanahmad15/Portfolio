"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:thefarhan@duck.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex items-center justify-center py-20 px-4"
    >
      <motion.div
        className="glass-box w-full max-w-[900px] p-14 rounded-[20px] mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <h2 className="text-[2.2rem] font-bold text-[#065f6a] text-center mb-8 tracking-tight">
          Email Me!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-0">
          <div className="relative">
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="block w-full h-14 px-5 py-4 font-medium text-[#1a1a1a] text-base border-2 border-[#065f6a]/20 rounded-xl bg-white/90 focus:border-[#065f6a] focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,95,106,0.1)] focus:-translate-y-0.5 focus:outline-none transition-all placeholder:text-black/40 placeholder:font-normal"
              placeholder="Subject"
              required
            />
          </div>

          <div className="relative mt-6">
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={8}
              className="block w-full min-h-[10rem] h-48 px-5 py-4 font-medium text-[#1a1a1a] text-base border-2 border-[#065f6a]/20 rounded-xl bg-white/90 focus:border-[#065f6a] focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,95,106,0.1)] focus:-translate-y-0.5 focus:outline-none transition-all resize-vertical placeholder:text-black/40 placeholder:font-normal"
              placeholder="Message"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full h-14 mt-8 bg-gradient-to-r from-[#065f6a] to-[#089099] text-white font-semibold text-[1.05rem] tracking-[0.5px] rounded-xl shadow-[0_4px_15px_rgba(6,95,106,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(6,95,106,0.4)] active:translate-y-0 active:shadow-[0_2px_10px_rgba(6,95,106,0.3)] transition-all duration-300 cursor-pointer relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/20 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-600 hover:before:w-[300px] hover:before:h-[300px]"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 1 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

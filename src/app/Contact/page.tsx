"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const contactDetails = [
    {
      id: "email",
      icon: "📧",
      title: "Email",
      value: "shahisujit9@gmail.com", //[cite: 2]
      href: "mailto:shahisujit9@gmail.com",
    },
    {
      id: "phone",
      icon: "📞",
      title: "Phone",
      value: "+977 9861284709", //[cite: 2]
      href: "tel:+9779861284709",
    },
    {
      id: "location",
      icon: "📍",
      title: "Location",
      value: "Chamati, Kathmandu", //[cite: 2]
      href: null,
    },
    {
      id: "linkedin",
      icon: "💼",
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/sujit-shahi-5a6197256/", //[cite: 2]
    },
    {
      id: "github",
      icon: "💻",
      title: "GitHub",
      value: "github.com/sujitshahi",
      href: "https://github.com/sujitshahi", //[cite: 2]
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div id="contact-page" className="w-full min-h-screen text-gray-200 py-8 px-4 md:px-8 bg-[#0a0a0a] ">

    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-left border-b border-zinc-800 pb-4 bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
       Get In <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
    </h1>

  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
      
  
      <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 transition-all duration-300 hover:border-violet-500/40">
        <h3 className="text-3xl font-semibold mb-6 text-violet-400">Let's Connect</h3>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div 
              key={detail.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-[20px] transition-all duration-300 hover:bg-violet-500/15 hover:translate-x-3 hover:scale-[1.02]"
            >
              <div className="text-3xl">{detail.icon}</div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{detail.title}</h4>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.id !== "email" && detail.id !== "phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-lg text-white mt-0.5 break-all hover:text-violet-400 hover:underline font-medium transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-lg text-white mt-0.5 break-all">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>




      <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 transition-all duration-300 hover:border-violet-500/40">
        <h3 className="text-2xl font-semibold mb-4 text-violet-400">Send a Message</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-[20px] text-white font-inherit transition-all duration-300 focus:outline-none focus:border-violet-400 focus:scale-[1.02] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-[20px] text-white font-inherit transition-all duration-300 focus:outline-none focus:border-violet-400 focus:scale-[1.02] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-[20px] text-white font-inherit transition-all duration-300 focus:outline-none focus:border-violet-400 focus:scale-[1.02] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-[20px] text-white font-inherit transition-all duration-300 focus:outline-none focus:border-violet-400 focus:scale-[1.02] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(167,139,250,0.3)] resize-none"
            required
          ></textarea>
          
          {/* Animated HeroUI Interactive Button component configuration */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-fit self-start mt-2"
          >
            <Button 
              type="submit" 
              className="bg-linear-to-r from-violet-400 to-purple-600 text-white font-semibold py-6 px-8 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
            >
              Send Message ✨
            </Button>
          </motion.div>
        </form>
      </div>
      </div>
    </div>
  );
}




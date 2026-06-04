// "use client";

// import { Button } from "@heroui/react";
// import { motion } from "framer-motion";

// export default function page() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.5,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="py-16 px-4 bg-white text-center">

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto mb-12"
//       >
//         <h1 className="text-4xl font-bold text-[#1B3C35] mb-4">Get In Touch</h1>
//         <p className="text-gray-500 leading-relaxed">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo. </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
//       >
//         <motion.div variants={itemVariants} className="flex flex-col items-center">
//           <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//             <i className="fa-solid fa-location-dot text-orange-500 fa-2xl flex items-center"></i>
//           </div>
//           <p className="font-bold text-[#1B3C35]">123 Street, New York, USA</p>
//         </motion.div>

//         <motion.div variants={itemVariants} className="flex flex-col items-center">
//           <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//             <i className="fa-solid fa-envelope-open text-orange-500 fa-2xl flex items-center"></i>
//           </div>
//           <p className="font-bold text-[#1B3C35]">info@example.com</p>
//         </motion.div>

//         <motion.div variants={itemVariants} className="flex flex-col items-center">
//           <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//             <i className="fa-solid fa-phone text-orange-500 fa-2xl flex items-center"></i>
//           </div>
//           <p className="font-bold text-[#1B3C35]">+012 345 6789</p>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-sm border border-gray-100"
//       >
       
//         <div className="bg-[#FFF8F6] p-8 md:p-12 text-left">
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             The contact form is currently inactive. Get a functional and working
//             contact form with Ajax & PHP in a few minutes. Just copy and paste
//             the files, add a little code and you're done.
//             <Button className="text-orange-600 cursor-pointer hover:underline ml-1">
//               Download Now.
//             </Button>
//           </p>

//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white"
//             />
//             <textarea
//               placeholder="Message"
//               rows={5}
//               className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none resize-none bg-white"
//             ></textarea>
       
//             <Button
//              className="w-full py-4 bg-[#FF5733] text-white font-semibold rounded-md hover:bg-[#e64a2e] transition-colors"
//              >Send Message</Button>
//           </form>
//         </div>

        
//         <div className="h-100 lg:h-auto min-h-100">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1704010000000!5m2!1sen!2s"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//           ></iframe>
//         </div>
//       </motion.div>
//     </section>
//   );
// }




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

  // Explicit profile data pulled from Sample_CV.pdf (2)_2.pdf
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div id="contact-page" className="w-full min-h-screen text-gray-200 py-8 px-4 md:px-8">
      {/* Section Title */}
      <div className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-left border-b border-zinc-800 pb-4">
        Get In <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
      </div>

      {/* Contact Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        
        {/* Left Side: Contact Info Block */}
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

        {/* Right Side: Message Input Form Container */}
        <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 transition-all duration-300 hover:border-violet-500/40">
          <h3 className="text-2xl font-semibold mb-4 text-white">Send a Message</h3>
          
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
                className="bg-linear-to-r from-violet-400 to-purple-600 text-white font-semibold py-6 px-8 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
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
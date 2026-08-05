"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const contactDetails = [
    {
      id: "email",
      icon: "📧",
      title: "Email",
      value: "shahisujit9@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shahisujit9@gmail.com",
    },
    {
      id: "phone",
      icon: "📞",
      title: "Phone",
      value: "+977 9861284709",
      href: "tel:+9779861284709",
    },
    {
      id: "location",
      icon: "📍",
      title: "Location",
      value: "Chamati, Kathmandu",
      href: null,
    },
    {
      id: "linkedin",
      icon: "💼",
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/sujit-shahi-5a6197256/",
    },
    {
      id: "github",
      icon: "💻",
      title: "GitHub",
      value: "github.com/sujitshahi",
      href: "https://github.com/sujitshahi",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b0dfab81-5377-4dc0-adad-841d95ce8a69", // <-- Paste your Web3Forms access key here
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New message from Portfolio Contact Form",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen p-10 bg-[#09090b] text-[#f8fafc] font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden flex flex-col justify-between">
        
        {/* Background Ambient Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-20 space-y-12 w-full">
          
          {/* Header Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full text-xs font-semibold text-indigo-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let's Build Something Together
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
              Have an opportunity, project idea, or just want to connect? Drop a message below or reach out via my direct links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            
            {/* Contact Details Card */}
            <div className="md:col-span-5 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/40 transition-all">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Information</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-6">
                  Contact Details
                </h3>

                <div className="space-y-4">
                  {contactDetails.map((detail, index) => (
                    <m.div
                      key={detail.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-zinc-950/60 border border-zinc-800/50 rounded-2xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-zinc-950"
                    >
                      <div className="text-2xl">{detail.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          {detail.title}
                        </h4>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.id !== "email" && detail.id !== "phone" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-white mt-0.5 truncate block hover:text-indigo-400 font-medium transition-colors duration-200"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-white mt-0.5 truncate">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Send a Message Form / Success Screen */}
            <div className="md:col-span-7 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              
              {!isSubmitted ? (
                <>
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Direct Message</span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-6">
                      Send a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="name" className="sr-only">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl text-white text-sm focus:outline-none focus:border-indigo-500 focus:bg-zinc-950 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">Your Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl text-white text-sm focus:outline-none focus:border-indigo-500 focus:bg-zinc-950 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="sr-only">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl text-white text-sm focus:outline-none focus:border-indigo-500 focus:bg-zinc-950 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl text-white text-sm focus:outline-none focus:border-indigo-500 focus:bg-zinc-950 transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <p className="text-xs font-medium text-center py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        {errorMessage}
                      </p>
                    )}

                    <m.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full pt-2"
                    >
                      <Button
                        type="submit"
                        isDisabled={isSubmitting}
                        className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium py-4 px-8 rounded-xl shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-all cursor-pointer text-sm"
                      >
                        {isSubmitting ? "Sending..." : "Send Message ✨"}
                      </Button>
                    </m.div>
                  </form>
                </>
              ) : (
                /* Success Screen Message */
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 my-auto">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-3xl rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-zinc-300 text-base max-w-md mx-auto leading-relaxed">
                      Thank you for sending me an email. I will contact you as soon as I get the mail. Thank you!
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 cursor-pointer transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-zinc-950/50 py-8 mt-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <div>© 2026 Sujit Shahi • Built with Next.js & Tailwind CSS</div>
            <div>Kathmandu, Nepal</div>
          </div>
        </footer>

      </main>
    </LazyMotion>
  );
}
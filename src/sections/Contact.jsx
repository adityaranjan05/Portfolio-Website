import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";

function Contact() {
    return (
        <section id="contact" className="min-h-screen px-8 lg:px-16 py-24 pt-60 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto my-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                {/* Left Side */}
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-5xl lg:text-7xl text-white font-bold tracking-wide leading-relaxed"
                    >
                        LET'S
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-5xl lg:text-7xl text-orange-600 font-bold tracking-wide"
                    >
                        CONNECT
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-zinc-500 mt-10 tracking-wider text-lg leading-loose"
                    >
                        Let's build something amazing together. I'm currently open to internship opportunities, collaborations, and exciting projects.
                    </motion.p>

                    <div className="mt-12 space-y-4">
                        <motion.a
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            href="mailto:aditya.ranjan.cs@gmail.com"
                            className="flex gap-3 items-center p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-500 duration-300 w-fit hover:translate-x-2"
                        >
                            <SiGmail className="text-2xl text-[#EA4335] bg-white rounded-md p-1" /> Email
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
                            viewport={{ once: true, amount: 0.3 }}
                            href="https://github.com/adityaranjan05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3 items-center p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-500 duration-300 w-fit hover:translate-x-2"
                        >
                            <FaGithub className="text-2xl" /> GitHub
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                            viewport={{ once: true, amount: 0.3 }}
                            href="https://linkedin.com/in/adityaranjansinha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3 items-center p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-500 duration-300 w-fit hover:translate-x-2"
                        >
                            <FaLinkedin className="text-2xl text-blue-500" /> LinkedIn
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 1.05 }}
                            viewport={{ once: true, amount: 0.3 }}
                            href="/Aditya_Ranjan_Sinha_Resume.pdf"
                            download
                            className="flex gap-3 items-center p-4 bg-orange-500/70 rounded-xl text-white hover:bg-orange-600 duration-300 w-fit hover:translate-x-2"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </div>

                {/* Right Side */}
                <form className="space-y-6 my-auto flex-1">
                    <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl text-white focus:border-orange-500 outline-none"
                    />

                    <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.95 }}
                        viewport={{ once: true, amount: 0.3 }}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl text-white focus:border-orange-500 outline-none"
                    />

                    <motion.textarea
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        className="w-full p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl text-white focus:border-orange-500 outline-none resize-none"
                    />

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.25 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl duration-300 hover:scale-105 active:scale-95"
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

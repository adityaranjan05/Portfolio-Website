import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";

function HeroText () {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100, scale:1.5 }}
            animate={{ opacity: 1, x: 0, scale:1 }}
            transition={{ duration: 0.8 }} 
            className="my-auto mx-auto lg:mx-14"
        >
            <p className="max-w-[80vw] text-lg lg:text-xl text-zinc-500">Hi, I am</p>
            <h1 className="max-w-[80vw] text-4xl lg:text-6xl text-white duration-250 hover:scale-105 font-bold tracking-tight my-6">ADITYA RANJAN SINHA</h1>
            <p className="max-w-[80vw] flex flex-col lg:flex-row text-lg lg:text-xl text-orange-500 lg:text-zinc-500  gap-5">
                <span className="bg-[#f973161a] lg:bg-white/3 px-4 py-1 lg:py-1.5 border w-fit border-orange-600 lg:border-white/10 gap-2 rounded-full duration-250  hover:border hover:border-orange-600 hover:text-orange-500 hover:bg-[#f973161a]">Front-end Developer</span>
                <span className="bg-[#f973161a] lg:bg-white/3 px-4 py-1 lg:py-1.5 w-fit border border-orange-600 lg:border-white/10 gap-2 rounded-full duration-250  hover:border hover:border-orange-600 hover:text-orange-500 hover:bg-[#f973161a]">CSE Student</span>
            </p>
            <div className="flex mt-6 gap-5">
                <a
                    href="https://github.com/adityaranjan05"
                    aria-label="GitHub Profile"
                    className="transition-transform cursor-pointer duration-150 hover:scale-110 bg-neutral-900 lg:bg-[#413e3e] p-3 rounded-2xl text-white lg:text-black text-3xl hover:bg-neutral-900 hover:text-white active:scale-95 hover:rotate-6"
                    target="_blank"
                >
                        <FaGithub />
                </a>
                <a
                    href="mailto:aditya.ranjan.sinha@gmail.com"
                    aria-label="Gmail"
                    className="transition-transform cursor-pointer duration-150 hover:scale-110 bg-[#FFFFFF] lg:bg-[#413e3e] p-3 rounded-2xl hover:bg-[#FFFFFF] text-[#EA4335] lg:text-black text-3xl hover:text-[#EA4335] active:scale-95 hover:rotate-6"
                    target="_blank"
                >
                        <SiGmail />
                </a>
                <a
                    href="https://www.linkedin.com/in/adityaranjansinha"
                    aria-label="LinkedIn Profile"
                    className="transition-transform cursor-pointer duration-150 hover:scale-110 hover:bg-[#0A66C2] hover:text-white text-white lg:text-black bg-[#0A66C2] lg:bg-[#413e3e] p-3 rounded-2xl text-3xl active:scale-95 hover:rotate-6"
                    target="_blank"
                >
                        <FaLinkedin />
                </a>
            </div>
            <div className="mt-6">
                <a
                    href="/Aditya_Ranjan_Sinha_Resume.pdf"
                    target="_blank"
                    className="inline-block px-6 py-2 rounded-full bg-[#f973161a] lg:bg-[#1A1A1A] text-white font-medium transition-transform duration-200 hover:scale-105 border-2 border-orange-600 lg:border-[#2A2A2A] hover:border-orange-600 hover:text-orange-500 hover:bg-[#f973161a] active:scale-95"
                >
                        View Resume
                </a>
            </div>
        </motion.div>
    )
}

export default HeroText
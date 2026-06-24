import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HeroText () {
    return (
        <div className="my-auto mx-14">
            <p className="text-xl text-zinc-500">Hi, I am</p>
            <h1 className="text-6xl text-white duration-250 hover:scale-105 font-bold tracking-tight my-6">ADITYA RANJAN SINHA</h1>
            <p className="flex text-xl text-zinc-500  gap-5">
                <span className="bg-white/3 px-4 py-1.5 border border-white/10 gap-2 rounded-full duration-250  hover:border hover:border-orange-600 hover:text-orange-500 hover:bg-[#f973161a]">Front-end Developer</span>
                <span className="bg-white/3 px-4 py-1.5 border border-white/10 gap-2 rounded-full duration-250  hover:border hover:border-orange-600 hover:text-orange-500 hover:bg-[#f973161a]">CSE Student</span>
            </p>
            <div className="flex mt-6 gap-5">
                <a
                    href="https://github.com/adityaranjan05"
                    aria-label="GitHub Profile"
                    className="transition-transform cursor-pointer duration-150 hover:scale-110 bg-[#413e3e] p-3 rounded-2xl text-3xl hover:bg-neutral-900 hover:text-white active:scale-95"
                    target="_blank"
                >
                        <FaGithub />
                </a>
                {/* <a
                    href="https://www.instagram.com/_adityara_05_/"
                    className="transition-transform cursor-pointer duration-150 hover:scale-120 bg-[#413e3e] p-3 rounded-2xl hove1:bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] duration-200 text-3xl hover:text-white active:scale-95"
                    target="_blank"
                >
                        <FaInstagram />
                </a> */}
                <a
                    href="mailto:aditya.ranjan.sinha@gmail.com"
                    aria-label="Gmail"
                    className="transition-transform cursor-pointer duration-150 hover:scale-110 bg-[#413e3e] p-3 rounded-2xl hover:bg-[#FFFFFF] text-3xl hover:text-[#EA4335] active:scale-95"
                    target="_blank"
                >
                        <SiGmail />
                </a>
                <a
                    href="https://www.linkedin.com/in/adityaranjansinha"
                    aria-label="LinkedIn Profile"
                    className="transition-transform cursor-pointer duration-150 hover:scale-110 hover:bg-[#0A66C2] hover:text-white bg-[#413e3e] p-3 rounded-2xl text-3xl active:scale-95"
                    target="_blank"
                >
                        <FaLinkedin />
                </a>
            </div>
            <div className="mt-6">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-block px-6 py-2 rounded-full bg-[#1A1A1A] text-white font-medium transition-transform duration-200 hover:scale-105 border-2 border-[#2A2A2A] hover:border-orange-600 hover:text-orange-500 hover:bg-[#f973161a] active:scale-95"
                >
                        View Resume
                </a>
            </div>
        </div>
    )
}

export default HeroText
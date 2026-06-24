import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HeroText () {
    return (
        <div className="my-auto mx-14">
            <p className="text-2xl text-zinc-500 duration-250 hover:scale-105">Hi, I am</p>
            <h1 className="text-6xl text-white duration-250 hover:scale-105">ADITYA RANJAN SINHA</h1>
            <p className="text-2xl text-zinc-500 duration-250 hover:scale-105">Front-end Developer/ CSE Student</p>
            <div className="flex mt-5 gap-8">
                <a
                    href="https://github.com/adityaranjan05"
                    className="transition-transform cursor-pointer duration-150 hover:scale-120 bg-[#413e3e] p-3 rounded-xl text-3xl hover:bg-neutral-900 hover:text-white active:scale-95"
                    target="_blank"
                >
                        <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/_adityara_05_/"
                    className="transition-transform cursor-pointer duration-150 hover:scale-120 bg-[#413e3e] p-3 rounded-xl hover:bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] duration-200 text-3xl hover:text-white active:scale-95"
                    target="_blank"
                >
                        <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/adityaranjansinha"
                    className="transition-transform cursor-pointer duration-150 hover:scale-120 hover:bg-[#0A66C2] hover:text-white duration-200 bg-[#413e3e] p-3 rounded-xl text-3xl active:scale-95"
                    target="_blank"
                >
                        <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default HeroText
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HeroText () {
    return (
        <div className="my-auto mx-14">
            <p className="text-2xl duration-250 hover:scale-105">Hi, I am</p>
            <h1 className="text-6xl duration-250 hover:scale-105">ADITYA RANJAN SINHA</h1>
            <p className="text-2xl duration-250 hover:scale-105">Front-end Developer/ CSE Student</p>
            <div className="flex mt-5 gap-4">
                <button className="transition-transform duration-250 hover:scale-120 bg-gray-400/60 p-3 rounded-xl">
                    <a
                        href="https://github.com/adityaranjan05"
                        className="text-3xl"
                        target="_blank"
                    >
                            <FaGithub />
                    </a>
                </button>
                <button className="transition-transform duration-250 hover:scale-120 bg-gray-400/60 p-3 rounded-xl">
                    <a
                        href="https://www.instagram.com/_adityara_05_/"
                        className="text-3xl hover:text-pink-500 duration-200"
                        target="_blank"
                    >
                            <FaInstagram />
                    </a>
                </button>
                <button className="transition-transform duration-250 hover:scale-120 bg-gray-400/60 p-3 rounded-xl">
                    <a
                        href="https://www.linkedin.com/in/adityaranjansinha"
                        className="text-3xl hover:text-blue-600 duration-200"
                        target="_blank"
                    >
                            <FaLinkedin />
                    </a>
                </button>
            </div>
        </div>
    )
}

export default HeroText
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
    return (
        <section id="contact" className="min-h-screen px-8 md:px-16 py-24 pt-60 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto my-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                {/* Left Side */}
                <div className="flex-1">
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-wide">
                        LET'S
                    </h1>

                    <h1 className="text-5xl md:text-7xl text-orange-600 font-bold tracking-wide">
                        CONNECT
                    </h1>

                    <p className="text-zinc-500 mt-10 tracking-wider text-lg leading-loose">
                        Let's build something amazing together. I'm currently open to internship opportunities, collaborations, and exciting projects.
                    </p>

                    <div className="mt-12 space-y-4">
                        <a
                            href="mailto:aditya.ranjan.cs@gmail.com"
                            rel="noopener noreferrer"
                            className=" flex gap-3 items-center p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-500 duration-300 w-fit hover:translate-x-2">
                            <SiGmail className="text-xl text-[#EA4335]" /> Email
                        </a>

                        <a
                            href="https://github.com/adityaranjan05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-3 items-center p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-500 duration-300 w-fit hover:translate-x-2">
                            <FaGithub className="text-xl" /> GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/adityaranjansinha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-3 items-center p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-500 duration-300 w-fit hover:translate-x-2">
                            <FaLinkedin className="text-xl text-blue-500" /> LinkedIn
                        </a>

                        <a
                            href="/Aditya_Ranjan_Sinha_Resume.pdf"
                            download
                            className="flex gap-3 items-center p-4 bg-orange-500/70 rounded-xl text-white hover:bg-orange-600 duration-300 w-fit hover:translate-x-2"
                        >
                                Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <form className="space-y-6 my-auto flex-1">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl text-white focus:border-orange-500 outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl text-white focus:border-orange-500 outline-none"
                    />

                    <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="w-full p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl text-white focus:border-orange-500 outline-none resize-none"
                    />

                    <button
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl duration-300 hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}

export default Contact;
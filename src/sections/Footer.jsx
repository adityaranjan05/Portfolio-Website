import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import FooterList from "../components/FooterList"
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const quickLinks = [
    {id: 1, href: "#home", name: "Home", icon: FaChevronRight, target: null},
    {id: 2, href: "#about", name: "About", icon: FaChevronRight, target: null},
    {id: 3, href: "#skills", name: "Skills", icon: FaChevronRight, target: null},
    {id: 4, href: "#projects", name: "Projects", icon: FaChevronRight, target: null},
    {id: 5, href: "#contact", name: "Contact", icon: FaChevronRight, target: null}
]
// const technologies = [
//     {id: 1, name: "React", icon: FaChevronRight, target: null},
//     {id: 2, name: "JavaScript", icon: FaChevronRight, target: null},
//     {id: 3, name: "Tailwind CSS", icon: FaChevronRight, target: null},
//     {id: 4, name: "HTML", icon: FaChevronRight, target: null},
//     {id: 5, name: "CSS", icon: FaChevronRight, target: null}
// ]
const resources = [
    {id: 1, href: "/Aditya_Ranjan_Sinha_Resume.pdf", name: "Resume", icon: FaChevronRight, target: "_blank"},
    {id: 2, href: "https://github.com/adityaranjan05", name: "GitHub", icon: FaChevronRight, target: "_blank"},
    {id: 3, href: "https://www.linkedin.com/in/adityaranjansinha", name: "LinkedIn", icon: FaChevronRight, target: "_blank"},
    {id: 4, href: "mailto:aditya.ranjan.sinha@gmail.com", name: "Email", icon: FaChevronRight, target: null},
]
const contact = [
    {id: 1, href: "mailto:aditya.ranjan.sinha@gmail.com", name: "aditya.ranjan.cs@gmail.com", icon: MdOutlineEmail, target: null},
    {id: 2, name: "India", icon: IoLocationOutline, target: null},
]

function Footer() {
    return(
        <>
            <section id="footer" className="max-w-full bg-[#0A0A0A]">
                <div className="flex flex-col md:flex-row gap-36 px-8 md:px-16 py-24 pt-40 border-t border-zinc-800">
                    <div className="max-w-xl">
                        <span className="text-white text-4xl md:text-6xl font-bold">ADITYA</span>
                        <span className="text-orange-600 text-4xl md:text-6xl font-bold"> RANJAN</span>
                        <p className="text-zinc-500 pt-6 font-semibold tracking-wider">FRONTEND DEVELOPER | CSE STUDENT</p>
                        <div className="w-20 mt-14 border border-orange-600 rounded-full"></div>
                        <p className="text-zinc-500 text-xl tracking-wider pt-14">Building responsive and user-friendly web applications with modern technlogies.</p>
                        <div className="flex pt-10 gap-6">
                            <a
                                href="https://github.com/adityaranjan05"
                                aria-label="GitHub Profile"
                                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] text-white p-2 rounded-lg text-3xl duration-200 hover:scale-110 hover:rotate-4 hover:border-orange-600"
                            >
                                    <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/adityaranjansinha"
                                aria-label="LinkedIn Profile"

                                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] p-2 rounded-lg text-3xl duration-200 hover:scale-110 hover:rotate-4 hover:border-orange-600"
                            >
                                    <FaLinkedin className="text-blue-500"/>
                            </a>
                            <a
                                href="mailto:aditya.ranjan.sinha@gmail.com"
                                aria-label="Gmail"                                
                                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] text-[#EA4335] p-2 rounded-lg text-3xl duration-200 hover:scale-110 hover:rotate-4 hover:border-orange-600"
                            >
                                    <SiGmail className="bg-[#FFFFFF] p-1 rounded-lg"/>
                            </a>
                        </div>
                    </div>
                    <FooterList
                        title="QUICK LINKS"
                        items={quickLinks}
                    />
                    {/* <FooterList
                        title="TECHNOLOGIES"
                        items={technologies}
                    /> */}
                    <FooterList
                        title="USEFUL LINKS"
                        items={resources}
                    />
                    <FooterList
                        title="CONTACT"
                        items={contact}
                    />
                </div>
                <div className="flex flex-col justify-center md:flex-row gap-30 px-8 md:px-16 py-16 border border-t-zinc-800">
                    <h2 className="text-zinc-500 text-lg">
                        &copy; 2026 Aditya Ranjan Sinha. All rights reserved.
                    </h2>
                </div>
            </section>
        </>
    )
}

export default Footer
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import FooterList from "../components/FooterList"
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const quickLinks = [
    {id: 1, href: "#home", name: "Home", icon: FaChevronRight},
    {id: 2, href: "#about", name: "About", icon: FaChevronRight},
    {id: 3, href: "#skills", name: "Skills", icon: FaChevronRight},
    {id: 4, href: "#projects", name: "Projects", icon: FaChevronRight},
    {id: 5, href: "#contact", name: "Contact", icon: FaChevronRight}
]
const technologies = [
    {id: 1, name: "React", icon: FaChevronRight},
    {id: 2, name: "JavaScript", icon: FaChevronRight},
    {id: 3, name: "Tailwind CSS", icon: FaChevronRight},
    {id: 4, name: "HTML", icon: FaChevronRight},
    {id: 5, name: "CSS", icon: FaChevronRight}
]
const resources = [
    {id: 1, href: "/Aditya_Ranjan_Sinha_Resume.pdf", name: "Resume", icon: FaChevronRight},
    {id: 2, href: "https://github.com/adityaranjan05", name: "GitHub", icon: FaChevronRight},
    {id: 3, href: "https://www.linkedin.com/in/adityaranjansinha", name: "LinkedIn", icon: FaChevronRight},
    {id: 4, href: "mailto:aditya.ranjan.sinha@gmail.com", name: "Email", icon: FaChevronRight},
]
const contact = [
    {id: 1, href: "mailto:aditya.ranjan.sinha@gmail.com", name: "aditya.ranjan.cs@gmail.com", icon: MdOutlineEmail},
    {id: 2, name: "India", icon: IoLocationOutline},
]

function Footer() {
    return(
        <>
            <section id="footer" className="px-8 max-w-full md:px-16 py-24 pt-40 bg-[#0A0A0A] border border-t-zinc-800">
                <div className="flex flex-col md:flex-row gap-30">
                    <div className="max-w-xl">
                        <span className="text-white text-4xl md:text-6xl font-bold">ADITYA</span>
                        <span className="text-orange-600 text-4xl md:text-6xl font-bold"> RANJAN</span>
                        <div className="text-zinc-500 pt-6 font-semibold">FRONTEND DEVELOPER | CSE STUDENT</div>
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
                        icon={quickLinks.icon}
                    />
                    <FooterList
                        title="TECHNOLOGIES"
                        items={technologies}
                        icon={technologies.icon}
                    />
                    <FooterList
                        title="USEFUL LINKS"
                        items={resources}
                        icon={resources.icon}
                    />
                    <FooterList
                        title="CONTACT"
                        items={contact}
                        icon={contact.icon}
                    />
                </div>
            </section>
        </>
    )
}

export default Footer
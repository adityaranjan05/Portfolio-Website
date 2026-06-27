import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import FooterList from "../components/FooterList";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion"; // ✅ use framer-motion

const quickLinks = [
  { id: 1, href: "#home", name: "Home", icon: FaChevronRight },
  { id: 2, href: "#about", name: "About", icon: FaChevronRight },
  { id: 3, href: "#skills", name: "Skills", icon: FaChevronRight },
  { id: 4, href: "#projects", name: "Projects", icon: FaChevronRight },
  { id: 5, href: "#contact", name: "Contact", icon: FaChevronRight }
];

const resources = [
  { id: 1, href: "/Aditya_Ranjan_Sinha_Resume.pdf", name: "Resume", icon: FaChevronRight, target: "_blank" },
  { id: 2, href: "https://github.com/adityaranjan05", name: "GitHub", icon: FaChevronRight, target: "_blank" },
  { id: 3, href: "https://www.linkedin.com/in/adityaranjansinha", name: "LinkedIn", icon: FaChevronRight, target: "_blank" },
  { id: 4, href: "mailto:aditya.ranjan.sinha@gmail.com", name: "Email", icon: FaChevronRight }
];

const contact = [
  { id: 1, href: "mailto:aditya.ranjan.sinha@gmail.com", name: "aditya.ranjan.sinha@gmail.com", icon: MdOutlineEmail },
  { id: 2, name: "India", icon: IoLocationOutline }
];

// Animation variants
const parentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, ease: "easeOut" }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Footer() {
  return (
    <section id="footer" className="max-w-full bg-[#0A0A0A]">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row gap-36 px-8 md:px-16 py-24 pt-40 border-t border-zinc-800 justify-around">
          
          {/* Branding */}
          <motion.div variants={childVariants} className="max-w-xl">
            <span className="text-white text-4xl lg:text-6xl font-bold">ADITYA</span>
            <span className="text-orange-600 text-4xl lg:text-6xl font-bold"> RANJAN</span>
            <p className="text-zinc-500 pt-6 font-semibold tracking-wider">
              FRONTEND DEVELOPER | CSE STUDENT
            </p>
            <div className="w-20 mt-14 border border-orange-600 rounded-full"></div>
            <p className="text-zinc-500 text-xl tracking-wider pt-14">
              Building responsive and user-friendly web applications with modern technologies.
            </p>
            <div className="flex pt-10 gap-6">
              <a
                href="https://github.com/adityaranjan05"
                aria-label="GitHub Profile"
                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] text-white p-2 rounded-lg text-3xl duration-200 hover:scale-110 hover:rotate-4 hover:border-orange-600 active:scale-95"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/adityaranjansinha"
                aria-label="LinkedIn Profile"
                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] p-2 rounded-lg text-3xl duration-200 hover:scale-110 hover:rotate-4 hover:border-orange-600 active:scale-95"
              >
                <FaLinkedin className="text-blue-500" />
              </a>
              <a
                href="mailto:aditya.ranjan.sinha@gmail.com"
                aria-label="Gmail"
                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] text-[#EA4335] p-2 rounded-lg text-3xl duration-200 hover:scale-110 hover:rotate-4 hover:border-orange-600 active:scale-95"
              >
                <SiGmail className="bg-[#FFFFFF] p-1 rounded-lg" />
              </a>
            </div>
          </motion.div>

          {/* Footer Lists */}
          <motion.div variants={childVariants}>
            <FooterList title="QUICK LINKS" items={quickLinks} />
          </motion.div>
          <motion.div variants={childVariants}>
            <FooterList title="USEFUL LINKS" items={resources} />
          </motion.div>
          <motion.div variants={childVariants}>
            <FooterList title="CONTACT" items={contact} />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={childVariants}
          className="flex flex-row justify-center px-8 lg:px-16 py-16 border-t border-zinc-800"
        >
          <h2 className="text-zinc-500 text-md lg:text-lg">
            &copy; 2026 Aditya Ranjan Sinha. All rights reserved.
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Footer;

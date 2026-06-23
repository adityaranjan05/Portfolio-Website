// import { useState } from "react"

const navlinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
];

function Navbar() {
    // const [index, setIndex] = useState(0);
    return (
        <nav className="fixed top-0 left-0 z-50 w-full flex justify-center">
            <ul className="flex list-none gap-12 mt-5 px-6 py-4 w-fit bg-[#1A1A1A] rounded-2xl shadow-lg shadow-[#2A2A2A]">
                {navlinks.map((link) => (
                    <li 
                        key={link}
                        className="text-xl text-white duration-150 hover:text-cyan-400 hover:scale-105 active:scale-95"
                    >
                            <a href={`#${link.toLowerCase()}`}>
                                {link}
                            </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Navbar
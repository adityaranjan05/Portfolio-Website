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
        <nav className="absolute w-full">
            <ul className="flex justify-end list-none gap-12 p-8">
                {navlinks.map((link) => (
                    <li 
                        key={link}
                        className="text-xl text-white duration-250 hover:text-cyan-500 active:scale-95"
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
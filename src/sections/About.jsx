// import Navbar from "../components/Navbar";
import { motion } from "motion/react";

const focus = ["Learning React", 
                "Data Structures & Algorithms", 
                "Problem Solving", 
                "Building Projects"
]

function About() {

    return (
        <section id="about" className="flex flex-col px-16 pb-16 pt-60 items-center relative min-h-screen max-w-full bg-[#0A0A0A]">
            {/* <Navbar /> */}
            <motion.div
                initial={{opacity: 0, y: 100,}}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once:true, amount: 0.3 }}
                className="flex flex-col items-center"
            >
                <h1 className="text-center text-4xl lg:text-7xl p-3 w-fit text-[#FFFFFF] font-bold tracking-wide">EVERYTHING YOU NEED</h1>
                <h1 className="text-center text-4xl lg:text-7xl p-3 w-fit text-orange-600 font-bold tracking-wide">TO KNOW ABOUT ME</h1>
                <div className="flex flex-col items-center text-center mt-24 text-lg leading-loose">
                    <p className="tracking-wide lg:tracking-widest text-zinc-500 max-w-2xl">
                        I’m Aditya Ranjan Sinha, a Computer Science student.
                    </p>
                    <p className="tracking-wide lg:tracking-widest text-zinc-500 max-w-3xl">
                        I am currently focused on learning React, Data Structures & Algorithms,
                        and modern web development through project-based learning.
                    </p>
                    <p className="tracking-wide lg:tracking-widest text-zinc-500 max-w-3xl">
                        I enjoy building projects that help me strengthen my problem-solving
                        skills and gain practical development experience.
                    </p>
                </div>
            </motion.div>
            <div className="flex flex-col lg:flex-row justify-between w-full lg:max-w-5xl mt-24">
                <motion.div
                    initial={{opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once:true, amount: 0.3 }}
                    // className=""
                >
                    <h2 className="text-xl font-bold border-b-2 border-orange-600 pb-2 tracking-widest text-[#FFFFFF]">CURRENT FOCUS</h2>
                    <ul className="list-disc mt-2">
                        {
                            focus.map((text, index) => 
                                <li key={index} className="text-lg leading-8 tracking-wide text-zinc-500">{text}</li>
                            )
                        }
                    </ul>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once:true, amount: 0.3 }}
                >
                    <h2 className="font-bold text-xl mt-5 md:mt-0 border-b-2 border-orange-600 pb-2 tracking-widest text-[#FFFFFF]">GOAL</h2>
                    <p className="mt-2 text-lg leading-8 tracking-wide text-zinc-500 max-w-md">
                        My current goal is become a strong
                        software engineer by continuously
                        improving my programming fundamentals,
                        development skills, and understanding of
                        computer science concepts.
                </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;

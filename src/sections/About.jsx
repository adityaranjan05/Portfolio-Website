import Navbar from "../components/Navbar";

const focus = ["Learning React", 
                "Data Structures & Algorithms", 
                "Problem Solving", 
                "Building Projects"
]

function About() {

    return (
        <section id="about" className="flex flex-col p-16 items-center relative h-screen bg-[#111111] border-t-4 border-[#2A2A2A]">
            <Navbar />
            <h1 className="text-5xl px-18 py-4 mt-26 w-fit border-6 rounded-2xl shadow-2xl shadow-black text-[#FFFFFF]">ABOUT ME</h1>
            <div className="flex flex-col items-center text-center mt-24 text-lg leading-loose">
                <p className="tracking-widest text-shadow-amber-300 text-[#FFFFFF]">
                    I’m Aditya Ranjan Sinha, a Computer Science student at DSCE Bangalore.
                </p>
                <p className="tracking-widest text-[#FFFFFF]">
                    I am currently focused on learning React, Data Structures & Algorithms,
                    and modern web development<br></br>through project-based learning.
                </p>
                <p className="tracking-widest text-[#FFFFFF]">
                    I enjoy building projects that help me strengthen my problem-solving
                    skills and gain practical<br></br>development experience.
                </p>
            </div>
            <div className="flex justify-between w-4xl mt-24">
                <div>
                    <h2 className="text-xl font-bold border-b-2 tracking-widest text-[#FFFFFF]">CURRENT FOCUS</h2>
                    <ul className="list-disc mt-2">
                        {
                            focus.map((text, index) => 
                                <li key={index} className="text-lg leading-8 tracking-wide text-[#A3A3A3]">{text}</li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl border-b-2 tracking-widest text-[#FFFFFF]">GOAL</h2>
                    <p className="mt-2 text-lg leading-8 tracking-wide text-[#A3A3A3]">
                        My current goal is become a strong<br></br>
                        software engineer by continuously<br></br>
                        improving my programming fundamentals,<br></br>
                        development skills, and understanding of<br></br>
                        computer science concepts.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;

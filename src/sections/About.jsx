// import Navbar from "../components/Navbar";

const focus = ["Learning React", 
                "Data Structures & Algorithms", 
                "Problem Solving", 
                "Building Projects"
]

function About() {

    return (
        <section id="about" className="flex flex-col px-16 pb-16 pt-60 items-center relative min-h-screen bg-[#0A0A0A]">
            {/* <Navbar /> */}
            <h1 className="text-5xl p-3 w-fit  rounded-2xl shadow-2xl shadow-black text-[#FFFFFF] font-bold">EVERYTHING YOU NEED</h1>
            <h1 className="text-5xl p-3 w-fit  rounded-2xl shadow-2xl shadow-black text-cyan-400 font-bold">TO KNOW ABOUT ME</h1>
            <div className="flex flex-col items-center text-center mt-24 text-lg leading-loose">
                <p className="tracking-widest text-shadow-amber-300 text-zinc-500">
                    I’m Aditya Ranjan Sinha, a Computer Science student at DSCE Bangalore.
                </p>
                <p className="tracking-widest text-zinc-500">
                    I am currently focused on learning React, Data Structures & Algorithms,
                    and modern web development<br></br>through project-based learning.
                </p>
                <p className="tracking-widest text-zinc-500">
                    I enjoy building projects that help me strengthen my problem-solving
                    skills and gain practical<br></br>development experience.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full md:max-w-5xl mt-24">
                <div>
                    <h2 className="text-xl font-bold border-b-2 tracking-widest text-[#FFFFFF]">CURRENT FOCUS</h2>
                    <ul className="list-disc mt-2">
                        {
                            focus.map((text, index) => 
                                <li key={index} className="text-lg leading-8 tracking-wide text-zinc-500">{text}</li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl mt-5 md:mt-0 border-b-2 tracking-widest text-[#FFFFFF]">GOAL</h2>
                    <p className="mt-2 text-lg leading-8 tracking-wide text-zinc-500 max-w-md">
                        My current goal is become a strong
                        software engineer by continuously
                        improving my programming fundamentals,
                        development skills, and understanding of
                        computer science concepts.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;

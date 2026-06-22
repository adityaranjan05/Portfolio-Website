import SkillsCard from "../components/SkillsCard"

function Skills() {
    return (
        <>
            <section id="skills" className="flex flex-col items-center relative min-h-screen p-18 bg-[#D9D9D9] border-t-4">
                <h1 className="text-5xl px-18 py-4 w-fit border-6 rounded-2xl shadow-2xl shadow-black">SKILLS</h1>
                <div className="flex relative flex-col justify-center w-1/2 mt-18 p-4">
                    {/* <h2 className="tracking-widest text-xl">FRONTEND:</h2> */}
                    <span className="relative overflow-hidden w-full">
                        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#D9D9D9] to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#D9D9D9] to-transparent z-10"></div>
                        <SkillsCard />
                    </span>
                </div>
            </section>        
        </>
    )
}

export default Skills
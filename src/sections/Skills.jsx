import SkillsCard from "../components/SkillsCard"

function Skills() {
    return (
        <>
            <section id="skills" className="flex flex-col items-center relative min-h-screen p-16 bg-[#111111] border-t-4 border-[#2A2A2A]">
                <h1 className="text-5xl px-18 py-4 w-fit border-6 mt-24 rounded-2xl shadow-2xl shadow-black text-[#FFFFFF]">SKILLS</h1>
                <div className="flex relative flex-col justify-center w-[60vw] mt-18 p-4">
                    <span className="relative overflow-hidden w-full">
                        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#111111] to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#111111] to-transparent z-10"></div>
                        <SkillsCard />
                    </span>
                </div>
            </section>        
        </>
    )
}

export default Skills
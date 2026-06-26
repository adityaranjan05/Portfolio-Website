import SkillsCard from "../components/SkillsCard"

function Skills() {
    return (
        <>
            <section id="skills" className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center relative min-h-screen max-w-full px-16 bg-[#0A0A0A]">
                <div className="flex flex-col items-center md:self-center">
                    <h1 className="text-7xl p-3 w-fit rounded-2xl shadow-2xl shadow-black font-bold text-[#FFFFFF] tracking-wide">TECHNICAL</h1>
                    <h1 className="text-7xl p-3 w-fit text-orange-500 font-bold tracking-wide">SKILLS</h1>
                </div>
                <div className="flex relative flex-col justify-center w-full md:max-w-4xl mt-18 md:mt-0 p-4">
                    <span className="relative overflow-hidden w-full">
                        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
                        <SkillsCard />
                    </span>
                </div>
            </section>        
        </>
    )
}

export default Skills
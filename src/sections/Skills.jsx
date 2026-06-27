import SkillsCard from "../components/SkillsCard"
import { motion } from "motion/react"

function Skills() {
    return (
        <>
            <section id="skills" className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center relative min-h-screen max-w-full px-2 lg:px-16 bg-[#0A0A0A]">
                <motion.div 
                    initial={{opacity: 0, x:-200,}}
                    animate={{opacity: 1, x:0}}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once:true, amount: 0.3 }}
                    className="flex flex-col items-center lg:self-center"
                >
                        <h1 className="text-4xl lg:text-7xl p-3 w-fit rounded-2xl shadow-2xl shadow-black font-bold text-[#FFFFFF] tracking-wide">TECHNICAL</h1>
                        <h1 className="text-4xl lg:text-7xl p-3 w-fit text-orange-500 font-bold tracking-wide">SKILLS</h1>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, x:200,}}
                    animate={{opacity: 1, x:0}}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once:true, amount: 0.3 }}
                    className="flex relative flex-col justify-center w-full lg:max-w-4xl mt-18 lg:mt-0 p-4"
                >
                    <span className="relative overflow-hidden w-full">
                        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
                        <SkillsCard />
                    </span>
                </motion.div>
            </section>        
        </>
    )
}

export default Skills
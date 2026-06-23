function ProjectCard(props) {
    return (
        <>
            <div className="bg-neutral-900 p-5 rounded-2xl z-10 shadow-lg shadow-black/20 border-2 border-[#2A2A2A] hover:scale-[1.02] hover:rotate-y-1 hover:shadow-xl transition-all duration-300">

                <img 
                    src={props.screenshot} 
                    className="text-neutral-400 rounded-2xl h-96 object-cover border-2 border-[#2A2A2A]" 
                />

                <div className="tracking-widest mt-4">
                    <h1 className="text-[#FFFFFF] text-2xl">{props.title}</h1>
                </div>

                <div className="text-neutral-400 tracking-wider mt-4 text-lg leading-relaxed">
                    {props.description}
                </div>

                <div className="flex gap-4 mt-4">
                    <a 
                        href={props.github} 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        className="text-white py-1 px-3 rounded-lg tracking-widest bg-[#222222] border-2 border-[#333333] shadow-lg shadow-black/30 duration-200 hover:border-[#555555] hover:bg-[#2E2E2E]"
                    >
                        GitHub
                    </a>

                    <a 
                        href={props.demo} 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        className="text-white py-1 px-3 rounded-lg tracking-widest bg-[#222222] border-2 border-[#333333] shadow-lg shadow-black/30 duration-200 hover:border-[#555555] hover:bg-[#2E2E2E]"
                    >
                        Demo
                    </a>
                </div>

                <div className="text-neutral-400 ">
                    <ul className="flex flex-wrap gap-4 mt-4">
                        {props.techStack.map((tech, index) =>
                            <li 
                                key={index}
                                className="tracking-wider py-1 px-3 rounded-full bg-[#111111] border border-[#2A2A2A] text-[#A3A3A3] duration-200 hover:bg-[#2A2A2A] hover:text-white hover:border-white"
                            >
                                {tech}
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default ProjectCard
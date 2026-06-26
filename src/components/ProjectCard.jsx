function ProjectCard(props) {
    return (
        <>
            <div className="bg-[#111111] p-5 rounded-2xl z-10 shadow-md shadow-black/20 border-2 border-[#1A1A1A] hover:scale-[1.02] hover:shadow-xl hover:border-orange-600/50 hover:shadow-orange-400/20 transition-all duration-300 hover:rotate-1">

                <a 
                    href={props.demo} 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img 
                        src={props.screenshot}
                        alt={`${props.title} Screenshot`} 
                        className="rounded-2xl h-46 lg:h-96 object-cover border-2 border-[#2A2A2A]" 
                    />
                </a>

                <div className="tracking-wide lg:tracking-widest mt-4">
                    <h1 className="text-[#FFFFFF] text-2xl">{props.title}</h1>
                </div>

                <div className="text-neutral-400 tracking-wider mt-4 text-md lg:text-lg leading-relaxed">
                    {props.description}
                </div>

                <div className="text-neutral-400 ">
                    <ul className="flex flex-wrap gap-4 mt-4">
                        {props.techStack?.map((tech, index) =>
                            <li 
                                key={index}
                                className="tracking-wider py-1 px-3 rounded-full bg-[#111111] border border-[#2A2A2A] text-[#A3A3A3] duration-200 hover:border hover:border-orange-600 hover:text-orange-500 hover:bg-orange-400/10"
                            >
                                {tech}
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex gap-4 mt-4">
                    <a 
                        href={props.github} 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        aria-label={`View ${props.title} source code on GitHub`}
                         className="text-orange-500 py-1 px-3 rounded-lg tracking-widest border border-orange-500 hover:bg-[#f973161a] duration-200 hover:scale-105 active:scale-95"
                    >
                        GitHub
                    </a>

                    <a 
                        href={props.demo} 
                        rel="noopener noreferrer" 
                        target="_blank"
                        aria-label={`View ${props.title} live demo`}
                        className="text-orange-500 py-1 px-3 rounded-lg tracking-widest border border-orange-500 hover:bg-[#f973161a] duration-200 hover:scale-105 active:scale-95"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
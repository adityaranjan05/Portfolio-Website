function ProjectCard() {
    return (
        <>
            <div className="bg-neutral-900 p-5 w-1/2 rounded-2xl z-10 shadow-lg shadow-black/20 border-2 border-[#2A2A2A] hover:scale-[1.02] hover:rotate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="text-neutral-400 ">Screenshot</div>
                <div className="text-neutral-400 ">Title</div>
                <div className="text-neutral-400 ">Description</div>
                <div className="text-neutral-400 ">Tech Stack</div>
            </div>
        </>
    )
}

export default ProjectCard
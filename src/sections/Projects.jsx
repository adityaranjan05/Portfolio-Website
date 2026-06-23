import ProjectCard from "../components/ProjectCard"
import AirQuality from "../assets/AirQuality.png" 
import BgChanger from "../assets/BgChanger.png" 
import BrainLyx from "../assets/BrainLyx.png" 
import Netflix from "../assets/Netflix.png" 
import Portfolio from "../assets/Portfolio.png" 
import ToDo from "../assets/ToDo.png" 


const projects = [
    {
        id: 1,
        screenshot: AirQuality,
        title: "Air Quality Dashboard",
        description: "An interactive dashboard that retrieves real-time Air Quality Index (AQI) data from an external API and presents pollution metrics through a clean and responsive user interface.",
        github: "https://github.com/adityaranjan05/Air_Quality_Dashboard",
        demo: "https://03-air-quality-dashboard.vercel.app/",
        techStack: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        screenshot: Portfolio,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects, skills, and learning journey as a frontend developer.",
        github: "https://github.com/adityaranjan05/Portfolio-Website",
        demo: "",
        techStack: ["React", "Tailwind CSS"]
    },
    {
        id: 3,
        screenshot: BrainLyx,
        title: "BrainLyx",
        description: "An educational platform that teaches climate change concepts to children through interactive learning content and engaging lessons.",
        github: "https://github.com/adityaranjan05/BrainLyx",
        demo: "https://brain-lyx.vercel.app/",
        techStack: ["HTML", "CSS", "JS"]
    },
    {
        id: 4,
        screenshot: ToDo,
        title: "Todo App",
        description: "A task management application that allows users to create, complete, and delete tasks while storing data locally in the browser.",
        github: "https://github.com/adityaranjan05/Basic-React-Projects/tree/main/03_To-Do_App",
        demo: "https://01-to-do-reactapp.vercel.app/",
        techStack: ["HTML", "CSS", "JS"]
    },
    {
        id: 5,
        screenshot: Netflix,
        title: "Netflix Clone",
        description: "A Netflix-inspired web application built to practice responsive layouts, component-based development, and modern frontend design principles.",
        github: "https://github.com/adityaranjan05/Netflix-Clone",
        demo: "https://04-netflix-clone.vercel.app/",
        techStack: ["HTML", "CSS", "JS"]
    },
    {
        id: 6,
        screenshot: BgChanger,
        title: "Background Color Changer",
        description: "A simple React application that dynamically changes the background color based on user interaction, helping reinforce React state management concepts.",
        github: "https://github.com/adityaranjan05/Basic-React-Projects/tree/main/02_bgchanger",
        demo: "https://02-bgchanger-reactapp.vercel.app/",
        techStack: ["React", "CSS"]
    },
]

function Projects() {
    return (
        <>
            <section id="projects" className="flex flex-col items-center relative min-h-screen p-16 bg-[#111111] border-t-4 border-[#2A2A2A]">
                <h1 className="text-5xl px-18 py-4 mt-24 w-fit border-6 rounded-2xl text-[#FFFFFF] shadow-2xl shadow-black">PROJECTS</h1>
                <div className="grid grid-cols-2 w-[80vw] gap-8 mt-18 p-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            screenshot={project.screenshot} 
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            demo={project.demo}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </section>        
        </>
    )
}

export default Projects
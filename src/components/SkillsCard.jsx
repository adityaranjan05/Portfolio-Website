import CSS from "../assets/CSS.png"
import HTML from "../assets/HTML.png"
import JS from "../assets/JS.png"
import React from "../assets/React.png"
import CPP from "../assets/CPP.png"
import Git from "../assets/GIT.png"
import Github from "../assets/GITHUB.png"
import Vercel from "../assets/Vercel.png"
import Figma from "../assets/Figma.png"
import SkillItem from "./SkillsItem"

const frontend = [
    { image: HTML, name: "HTML" },
    { image: CSS, name: "CSS" },
    { image: JS, name: "JavaScript" },
    { image: React, name: "React" },
];

const tools = [
    { image: Git, name: "Git" },
    { image: Github, name: "GitHub" },
    { image: Vercel, name: "Vercel" },
    { image: Figma, name: "Figma" }
]

const others = [
    { image: CPP, name: "C++" },
]

function SkillRow(props) {
    return(
        <>
            <h2 className="tracking-widest text-xl mt-10">{props.title}</h2>
            <div className={`flex ${props.animate?"animate-scroll":""} mt-10`}>
                {props.skills.map((skill) => (
                    <SkillItem 
                        key={skill.name}
                        image={skill.image}
                        name={skill.name}
                    />
                ))}
            </div>
        </>
    )
}

function SkillsCard() {
    return (
        <div className="flex flex-col">
            <SkillRow 
                title="FRONTEND"
                skills={[...frontend, ...frontend]}
                animate={true}
            />
            <SkillRow 
                title="TOOLS"
                skills={[...tools, ...tools]}
                animate={true}
            />
            <SkillRow 
                title="OTHERS"
                skills={others}
                animate={false}
            />
        </div>
    )
}

export default SkillsCard
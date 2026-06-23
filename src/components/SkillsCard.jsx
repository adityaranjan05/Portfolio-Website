import CSS from "../assets/CSS.png"
import HTML from "../assets/HTML.png"
import JS from "../assets/JS.png"
import React from "../assets/React.png"
import CPP from "../assets/CPP.png"
import Git from "../assets/GIT.png"
import Github from "../assets/GITHUB.png"
import Vercel from "../assets/Vercel.png"
import Figma from "../assets/Figma.png"
import Tailwind from "../assets/Tailwind.png"
import SkillItem from "./SkillsItem"

const usingNow = [
    { image: HTML, name: "HTML" },
    { image: CSS, name: "CSS" },
    { image: Tailwind, name: "Tailwind CSS" },
    { image: JS, name: "JavaScript" },
    { image: React, name: "React" },
    { image: Git, name: "Git" },
    { image: Github, name: "GitHub" },
    { image: Vercel, name: "Vercel" },
    { image: Figma, name: "Figma" },
    { image: CPP, name: "C++" },
];

const learning = [
    { image: JS, name: "JavaScript" },
    { image: React, name: "React" },
    { image: Tailwind, name: "Tailwind CSS" },
    { image: CPP, name: "C++" },
]

// const others = [
//     { image: CPP, name: "C++" },
// ]

function SkillRow(props) {
    return(
        <>
            <h2 className="tracking-widest text-xl mt-10 ml-14 text-[#FFFFFF]">{props.title}</h2>
            <div className={`flex ${props.animate?"animate-scroll":""} mt-10`}>
                {props.skills.map((skill,index) => (
                    <SkillItem 
                        key={`${skill.name}-${index}`}
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
                title="USING NOW:"
                skills={[...usingNow, ...usingNow]}
                animate={true}
            />
            <SkillRow 
                title="Learning Now:"
                skills={[...learning, ...learning, ...learning, ...learning]}
                animate={true}
            />
            {/* <SkillRow 
                title="OTHER SKILLS:"
                skills={others}
                animate={false}
            /> */}
        </div>
    )
}

export default SkillsCard
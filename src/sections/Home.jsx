// import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import HeroText from "../components/Hero_Text";
// import { motion } from "motion/react"

function Home() {
    return (
        <section id='home' className='flex flex-col-reverse lg:flex-row min-w-full relative min-h-screen bg-[#0A0A0A]'>
            {/* <Navbar /> */}
            <HeroText />
            <Profile />
        </section>
    )
}

export default Home
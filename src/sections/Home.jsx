import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import HeroText from "../components/Hero_Text";

function Home() {
    return (
        <section id='home' className='flex relative h-screen bg-black'>
            <Navbar />
            <div className='flex bg-[#E3E3E3] h-screen flex-1' style={{clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)"}}>
                <HeroText />
            </div>
            <Profile />
        </section>
    )
}

export default Home
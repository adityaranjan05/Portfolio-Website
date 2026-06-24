// import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import HeroText from "../components/Hero_Text";

function Home() {
    return (
        <section id='home' className='flex relative h-screen bg-[#0A0A0A]'>
            {/* <Navbar /> */}
            <HeroText />
            <Profile />
        </section>
    )
}

export default Home
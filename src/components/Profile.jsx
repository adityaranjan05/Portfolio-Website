import profilepic from "../assets/profile2.png";

function Profile() {
    return (
        <img src={profilepic} className='w-[500px] h-[500px] rounded-full mx-auto my-auto border-4 border-cyan-500 shadow-2xl shadow-cyan-500 duration-250 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500 hover:scale-105'></img>
    )
}

export default Profile
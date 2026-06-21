import profilepic from "../assets/profile2.png";

function Profile() {
    return (
        <div className='flex bg-[#000000] h-screen flex-1'>
            <img src={profilepic} className='w-[500px] h-[500px] rounded-full mx-auto my-auto'></img>
        </div>
    )
}

export default Profile
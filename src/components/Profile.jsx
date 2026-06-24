import profilepic from "../assets/profile2.png";

function Profile() {
    return (
        <img src={profilepic} className='w-125 h-125 rounded-full mx-auto my-auto border-2 duration-250 hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/70 hover:scale-105'></img>
    )
}

export default Profile
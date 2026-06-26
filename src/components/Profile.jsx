import profilepic from "../assets/profile2.png";

function Profile() {
    return (
        <img src={profilepic} className='w-75 h-75 lg:w-125 lg:h-125 rounded-full mx-auto my-auto border-2 duration-250 hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/70 hover:scale-105'></img>
    )
}

export default Profile
import profilepic from "../assets/profile2.png";
import { motion } from "motion/react";

function Profile() {
    return (
        <motion.img
            initial={{opacity: 0, x: 100, scale:1.5}}
            animate={{opacity: 1, x: 0, scale:1}}
            transition={{ duration: 0.8 }}
            src={profilepic}
            className='w-75 h-75 lg:w-125 lg:h-125 rounded-full mx-auto my-auto border-2 duration-250 hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/70 hover:scale-105'>
        </motion.img>
    )
}

export default Profile
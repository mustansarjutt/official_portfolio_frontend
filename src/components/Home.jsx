import React from "react"
import { FaNodeJs, FaHtml5, FaCss3, FaGithub } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiMongodb, SiPostman, SiFirebase, SiGit } from "react-icons/si"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const boxVariants1 = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
        hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }
    }
    const boxVariants2 = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeIn" } },
        hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }
    }
    const boxVariants3 = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
        hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }
    }
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        hover: { scale: 1.05, textShadow: "0px 0px 10px rgba(255, 165, 0, 0.7)" }
    }

    const navigate = useNavigate()

    return (
        <div className="flex justify-around p-6 md:flex-row flex-col items-center h-4/5 bg-[url('./assets/bg5.jpg')] bg-cover">
            <div className="flex flex-col gap-y-4">
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="text-3xl"
                >
                    Hii! I am{" "}
                    <motion.span
                        className="font-bold text-orange-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        Mustansar Gill
                    </motion.span>
                </motion.div>
                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl text-gray-700"
                >
                    MERN Stack Developer | Freelancer
                </motion.p>
                <div className="flex flex-row justify-center gap-x-3">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#00897B" }} // Lighter Teal on Hover
                        whileTap={{ scale: 0.9 }}
                        className="bg-teal-700 px-3 py-1.5 text-white font-semibold rounded-2xl cursor-pointer transition-all"
                    >
                        Download CV
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#F57C00" }} // Darker Orange on Hover
                        whileTap={{ scale: 0.9 }}
                        className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-1.5 text-white font-semibold rounded-2xl cursor-pointer transition-all"
                        onClick={() => navigate("/contact-us")}
                    >
                        Contact Me
                    </motion.button>
                </div>
            </div>
            <div className="text-3xl font-medium flex flex-col justify-around gap-y-5">
                <h1 className="text-slate-700 font-mono font-semibold shadow-2xl">Skills & Tools</h1>

                <motion.div
                    variants={boxVariants1}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="flex justify-around gap-3 border-[2px] rounded-xl p-3 bg-gray-200 border-gray-500 cursor-pointer h-20 items-center"
                >
                    <div className="text-[#F7DF1E]"><SiJavascript /></div>
                    <div className="text-[#1572B6]"><FaCss3 /></div>
                    <div className="text-[#E34F26]"><FaHtml5 /></div>
                </motion.div>
                <motion.div
                    variants={boxVariants2}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="flex justify-around gap-3 border-[2px] rounded-xl p-3 bg-gray-200 border-gray-500 cursor-pointer h-20 items-center"
                >
                    <div className="text-[#8CC84B]"><FaNodeJs /></div>
                    <div className="text-[#38B2AC]"><SiTailwindcss /></div>
                    <div className="text-[#47A248]"><SiMongodb /></div>
                </motion.div>
                <motion.div
                    variants={boxVariants3}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="flex justify-around gap-3 border-[2px] rounded-xl p-3 bg-gray-200 border-gray-500 cursor-pointer h-20 items-center"
                >
                    <div className="text-[#181717]"><FaGithub /></div>
                    <div className="text-[#F05032]"><SiGit /></div>
                    <div className="text-[#FFCA28]"><SiFirebase /></div>
                    <div className="text-[#FF6C37]"><SiPostman /></div>
                </motion.div>
            </div>
        </div>
    )
}
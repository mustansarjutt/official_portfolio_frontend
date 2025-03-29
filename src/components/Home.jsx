import React from "react"
import { FaNodeJs, FaHtml5, FaCss3, FaGithub, FaReact } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiMongodb, SiPostman, SiFirebase, SiGit } from "react-icons/si"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import pic from "../assets/me1.png"

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

    const handleDownloadCV = () => {
        const cvUrl = "/mustansar_resume.pdf"
        const link = document.createElement("a")
        link.href = cvUrl
        link.download = "resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="flex flex-col gap-y-6 p-6 min-h-4/5 h-auto bg-[url('./assets/bg5.jpg')] bg-cover">
            <h1 className="text-2xl text-red-600">Contact form and Hire me form may not work due to backend deployment issue</h1>
            <div className="flex justify-around md:flex-row flex-col items-center gap-5">
                <div className="flex flex-col gap-y-4">
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className="text-3xl text-center"
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
                        className="text-3xl text-gray-700 text-center"
                    >
                        MERN Stack Developer | Freelancer
                    </motion.p>
                    <div className="flex flex-row justify-center gap-x-3">
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#00897B" }} // Lighter Teal on Hover
                            whileTap={{ scale: 0.9 }}
                            className="bg-teal-700 px-3 py-1.5 text-white font-semibold rounded-2xl cursor-pointer transition-all"
                            onClick={handleDownloadCV}
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
                <div className="flex justify-center items-center">
                    <motion.img
                        src={pic}
                        alt="me"
                        className="md:w-72 w-56 rounded-4xl border-[4px] border-[#574964] shadow-2xl cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                    />
                </div>
            </div>
            <hr className="border-2 border-slate-900 w-full" />
            <div className="flex justify-center items-center flex-col gap-y-4">
                <h1 className="text-3xl font-sans font-bold text-green-800">Skills & Tools</h1>
                <div className="md:w-[60%] sm:w-[70%] w-[90%] flex justify-around items-center flex-wrap flex-row border-2 border-slate-300 rounded-3xl text-3xl py-5 bg-slate-300/35 gap-3.5">
                    <motion.div
                        variants={boxVariants1}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className="w-[180px] flex justify-around gap-3 border-[2px] rounded-xl p-3 bg-gray-200 border-gray-500 cursor-pointer h-20 items-center"
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
                        className="w-[180px] flex justify-around gap-3 border-[2px] rounded-xl p-3 bg-gray-200 border-gray-500 cursor-pointer h-20 items-center"
                    >
                        <div className="text-cyan-400"><FaReact /></div>
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
                        className="w-[180px] flex justify-around gap-3 border-[2px] rounded-xl p-3 bg-gray-200 border-gray-500 cursor-pointer h-20 items-center"
                    >
                        <div className="text-[#181717]"><FaGithub /></div>
                        <div className="text-[#F05032]"><SiGit /></div>
                        <div className="text-[#FFCA28]"><SiFirebase /></div>
                        <div className="text-[#FF6C37]"><SiPostman /></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
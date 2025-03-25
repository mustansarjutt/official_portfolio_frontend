import { HiMenu, HiX } from "react-icons/hi"
import { NavLink, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Logo from "../assets/Logo"

export default function Nav() {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="select-none sticky top-1 z-50 bg-gradient-to-r from-gray-300/30 via-green-300/30 to-green-500/30 backdrop-blur-xl border-b border-white/10 shadow-lg flex justify-between items-center px-6 h-16 rounded-xl">
            <div className="text-3xl font-bold text-[#36454F]">
                <Link to="/"><Logo /></Link>
            </div>
            <div className="md:flex md:gap-x-5 hidden">
                {["Home", "Services", "About", "Blogs", "Contact Us"].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-orange-600 border-b-2" : "text-gray-500"
                            }
                            to={item === "Home" ? "" : `/${item.toLowerCase().replace(" ", "-")}`}
                        >
                            {item}
                        </NavLink>
                    </motion.div>
                ))}
            </div>
            <div className="text-slate-600 font-bold text-2xl md:hidden block cursor-pointer">
                <AnimatePresence mode="wait">
                    {toggle ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            exit={{ opacity: 0, rotate: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            exit={{ opacity: 0, rotate: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <HiMenu onClick={() => setToggle(true)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-16 left-1/2 transform -translate-x-1/2 
                        bg-gradient-to-br from-gray-700 via-green-700/85 to-gray-400/65 backdrop-blur-3xl rounded-2xl shadow-lg 
                        flex flex-col items-center gap-4 py-4 
                        md:hidden w-[90%] max-w-md mt-4 border border-gray-600/50"
                    >
                        {["Home", "Services", "About", "Blogs", "Contact Us"].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                transition={{
                                    type: "spring", stiffness: 300,
                                    delay: index * 0.2
                                }}
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-full flex justify-between px-6 py-2"
                            >
                                <NavLink
                                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                    onClick={() => setToggle(false)}
                                    className={({ isActive }) =>
                                        `flex justify-between w-full text-[15px] 
                                        ${isActive ? "text-orange-400" : "text-gray-200"}`
                                    }
                                >
                                    <span>{item}</span>
                                    <span>&gt;</span>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
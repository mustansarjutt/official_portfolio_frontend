import React from "react"
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <div className="min-h-4/5 flex md:flex-row flex-col justify-around items-center bg-gray-200">
            <div className="md:w-[45%] w-[80%] text-center flex flex-col space-y-5">
                <h1
                    className="text-center md:text-4xl sm:text-2xl text-2xl font-bold bg-gradient-to-r from-green-500 via-orange-500 to-gray-500 text-transparent bg-clip-text"
                >
                    Let's Connect
                </h1>
                <p className="text-lg tracking-[5px] font-bold text-slate-700">Got a project in MIND? Let's discuss it</p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:w-[40%] sm:w-[80%] w-[90%] mx-auto p-6 bg-white rounded-2xl shadow-xl"
            >
                <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.025 }} className="space-y-1">
                        <label className="block text-gray-600 font-medium">Your Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
                        <label className="block text-gray-600 font-medium">Title:</label>
                        <input
                            type="text"
                            placeholder="Title of your message..."
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
                        <label className="block text-gray-600 font-medium">Message:</label>
                        <textarea
                            rows="3"
                            placeholder="Detail of your message..."
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        ></textarea>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.1 }}>
                        <button className="w-full p-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all">
                            Send Email
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
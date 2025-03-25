import { FaUpwork, FaLinkedin, FaGithub } from "react-icons/fa6"
import { SiFiverr } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="flex md:flex-row flex-col-reverse justify-around items-center bg-gray-300 py-4 md:gap-x-1 gap-y-2">
            <div className="md:w-[50%] flex flex-col gap-y-3">
                <div className="md:text-3xl sm:text-2xl text-xl text-center font-sans md:font-semibold font-medium my-2">
                    Transforming Ideas into Reality with Code
                </div>
                <div className="flex justify-around md:text-3xl text-2xl">
                    <a href="#" rel="noopener noreferrer">
                        <FaGithub className="text-[#181717]" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <FaLinkedin className="text-[#0077B5]" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <FaUpwork className="text-[#6FDA44]" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <SiFiverr className="text-[#1DBF73]" />
                    </a>
                </div>
                <div className="text-center text-gray-600 py-4 text-sm">
                    &copy; {new Date().getFullYear()} MHJutt. All rights reserved.
                </div>
            </div>
            <div className="bg-green-200 backdrop-blur-lg p-6 rounded-lg shadow-lg md:w-[30%] w-[80%]">
                <h1 className="text-2xl font-bold text-slate-700 text-center mb-3">Hire Me</h1>
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full p-1 rounded-md bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
                <textarea
                    placeholder="Project details..."
                    rows="2"
                    className="w-full mt-2 p-1 rounded-md bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                ></textarea>
                <button
                    className="w-full mt-4 py-3 bg-gradient-to-r from-green-500/20 to-gray-500 text-white font-bold rounded-md hover:scale-105 transition-transform cursor-pointer">
                    Send Message
                </button>
            </div>
        </footer>
    )
}
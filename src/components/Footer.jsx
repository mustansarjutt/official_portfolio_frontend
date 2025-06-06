import { FaUpwork, FaLinkedin, FaGithub } from "react-icons/fa6"
import { SiFiverr } from "react-icons/si"
import { useState } from "react"
import { isValidEmail } from "../utils/EmailValidator"
import AlertBox from "../utils/AlertBox"
import { server } from "../constants"

export default function Footer() {

    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [projectDetail, setProjectDetail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    const handleHireMe = async () => {
        if ([email, title, projectDetail].some((field) => field.trim() === "")) {
            setAlert({ message: "All fields are required", type: "error" })
            return
        }
        if (!isValidEmail(email)) {
            setAlert({ message: "Invalid email format", type: "error" })
            return
        }

        const messageDetails = {
            email: email.trim(),
            title: title.trim(),
            projectDetail: projectDetail.trim()
        }

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 20000)

        try {
            setIsLoading(true)
            const response = await fetch(`${server}/api/v1/hire-me`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageDetails),
                signal: controller.signal
            })
            clearTimeout(timeout)
            const data = await response.json()

            if (response.ok) {
                setIsLoading(false)
                setAlert({ message: data.message, type: "success" })
                setEmail("")
                setTitle("")
                setProjectDetail("")
            } else {
                setIsLoading(false)
                setAlert({ message: data.message, type: "error" })
            }
        } catch (err) {
            if (err.name === "AbortError") {
                setIsLoading(false)
                setAlert({ message: "Request timed out. Please try again.", type: "error" })
            } else {
                setIsLoading(false)
                setAlert({ message: err.message || "Something went wrong", type: "error" })
            }
        }
    }

    return (
        <footer className="flex md:flex-row flex-col-reverse justify-around items-center bg-gray-300 py-4 md:gap-x-1 gap-y-2">
            <div className="md:w-[50%] flex flex-col gap-y-3">
                {alert && <AlertBox message={alert?.message} type={alert?.type} onClose={() => setAlert(null)} />}
                <div className="md:text-3xl sm:text-2xl text-xl text-center font-sans md:font-semibold font-medium my-2">
                    Transforming Ideas into Reality with Code
                </div>
                <div className="flex justify-around md:text-3xl text-2xl">
                    <a href="https://github.com/mustansarjutt" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-[#181717]" />
                    </a>
                    <a href="https://www.linkedin.com/in/mustansar-hussain-72973227a" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-[#0077B5]" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0146878121019fca31?mp_source=share" target="_blank" rel="noopener noreferrer">
                        <FaUpwork className="text-[#6FDA44]" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
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
                    className="w-full p-1 rounded-md bg-white/20 text-slate-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="title that describe your project.."
                    className="mt-2 w-full p-1 rounded-md bg-white/20 text-slate-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Project details..."
                    rows="2"
                    className="w-full mt-2 p-1 rounded-md bg-white/20 text-slate-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    value={projectDetail}
                    onChange={(e) => setProjectDetail(e.target.value)}
                ></textarea>
                <button
                    className="w-full mt-4 py-3 bg-gray-700 text-white font-bold rounded-md hover:scale-105 transition-transform cursor-pointer disabled:cursor-not-allowed"
                    disabled={isLoading}
                    onClick={handleHireMe}
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </div>
        </footer>
    )
}
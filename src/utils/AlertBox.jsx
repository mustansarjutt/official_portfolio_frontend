import { useEffect } from "react"

const AlertBox = ({ message, type, onClose }) => {
    if (!message) {
        return null
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 5000)
        return () => clearTimeout(timer)
    }, [message, onClose])

    return (
        <div
            className={`w-full relative p-4 rounded-lg shadow-md ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
            <p className="text-left w-full">{message}</p>
            <button className="font-bold absolute right-1 top-1 cursor-pointer" onClick={onClose}>
                ✖
            </button>
        </div>
    )
}

export default AlertBox
import { useState } from "react";
import { motion } from "framer-motion";
import { isValidEmail } from "../utils/EmailValidator";
import { server } from "../constants";
import { toast } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearFields = () => {
    setName("");
    setEmail("");
    setTitle("");
    setText("");
  };

  const handleContactUs = async () => {
    if ([name, email, title, text].some((field) => !field || field.trim() === "")) {
      toast.error("All fields are required");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Email is invalid");
      return;
    }
    if (text.length < 10) {
      toast.error("Message must consist of at least 10 characters");
      return;
    }

    const messageDetails = {
      name: name.trim(),
      email: email.trim(),
      title: title.trim(),
      message: text.trim()
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      setIsLoading(true);

      const response = await fetch(`${server}/api/v1/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageDetails),
        signal: controller.signal
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully");
        clearFields();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        toast.error("Request timed out. Please try again");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
      clearTimeout(timeout);
    }
  };

  return (
    <div className="min-h-4/5 h-auto p-6 flex md:flex-row flex-col justify-around items-center bg-black">
      <div className="md:w-[45%] w-[80%] text-center flex flex-col space-y-5">
        <h1 className="text-center md:text-4xl sm:text-2xl text-2xl font-bold bg-gradient-to-r from-green-500 via-orange-500 to-gray-500 text-transparent bg-clip-text">
          Let's Connect
        </h1>
        <p className="text-lg tracking-[5px] font-bold text-slate-300">
          Got a project in MIND? Let's discuss it
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-[40%] sm:w-[80%] w-[90%] mx-auto p-6 bg-gray-900 rounded-2xl shadow-xl"
      >
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
            <label className="block text-gray-400 font-medium">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your full name..."
              className="w-full placeholder:text-gray-500 text-gray-300 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
            <label className="block text-gray-400 font-medium">
              Your Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full placeholder:text-gray-500 text-gray-300 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
            <label className="block text-gray-400 font-medium">Title:</label>
            <input
              type="text"
              placeholder="Title of your message..."
              className="w-full placeholder:text-gray-500 text-gray-300 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
            <label className="block text-gray-400 font-medium">Message:</label>
            <textarea
              rows="3"
              placeholder="Detail of your message..."
              className="w-full placeholder:text-gray-500 text-gray-300 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <button
              className="w-full p-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all cursor-pointer disabled:cursor-not-allowed"
              onClick={handleContactUs}
              disabled={isLoading}
            >
              {isLoading ? "Sending Email.." : "Send Email"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
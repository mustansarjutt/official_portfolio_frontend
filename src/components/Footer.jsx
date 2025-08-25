import { FaGithub, FaLinkedin, FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { useState } from "react";
import { isValidEmail } from "../utils/EmailValidator";
import { server } from "../constants";
import { toast } from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [projectDetail, setProjectDetail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const clearFields = () => {
    setEmail("");
    setTitle("");
    setProjectDetail("");
  };

  const handleHireMe = async () => {
    if ([email, title, projectDetail].some((field) => field.trim() === "")) {
      toast.error("All fields are required");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    const messageDetails = {
      email: email.trim(),
      title: title.trim(),
      projectDetail: projectDetail.trim()
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      setIsLoading(true);

      const response = await fetch(`${server}/api/v1/hire-me`, {
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
    <footer className="flex md:flex-row flex-col-reverse justify-around items-center bg-slate-900 py-4 md:gap-x-1 gap-y-2">
      <div className="md:w-[50%] flex flex-col gap-y-3">
        <div className="md:text-3xl sm:text-2xl text-xl text-center font-sans md:font-semibold font-medium my-2 text-white">
          Transforming Ideas into Reality with Code
        </div>
        <div className="flex justify-around md:text-3xl text-2xl">
          <a
            href="https://github.com/mustansarjutt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-[#fff]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mustansar-hussain-72973227a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#0077B5]" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0146878121019fca31?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaUpwork className="text-[#6FDA44]" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SiFiverr className="text-[#1DBF73]" />
          </a>
        </div>
        <div className="text-center text-gray-300 py-4 text-sm">
          &copy; {new Date().getFullYear()} MHJutt. All rights reserved.
        </div>
      </div>
      <div className="bg-gray-950 backdrop-blur-lg p-6 rounded-lg shadow-lg md:w-[30%] w-[80%]">
        <h1 className="text-2xl font-bold text-orange-500 text-center mb-3">
          Hire Me
        </h1>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-1 rounded-md bg-white/20 text-slate-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="title that describe your project.."
          className="mt-2 w-full p-1 rounded-md bg-white/20 text-slate-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Project details..."
          rows="2"
          className="w-full mt-2 p-1 rounded-md bg-white/20 text-slate-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          value={projectDetail}
          onChange={(e) => setProjectDetail(e.target.value)}
        ></textarea>
        <button
          className="w-full mt-4 py-2.5 bg-orange-500 text-white font-bold rounded-md hover:scale-105 transition-transform cursor-pointer disabled:cursor-not-allowed"
          disabled={isLoading}
          onClick={handleHireMe}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
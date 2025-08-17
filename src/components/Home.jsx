import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import image from "../assets/m1.png";
import Card from "./Card";
import { BackgroundGradient } from "./ui/background-gradient";

function Home() {
  const handleDownloadCV = () => {
    const cvURL = "/mustansar_resume.pdf";
    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="text-white min-h-screen flex items-center justify-center md:flex-row flex-col p-4 md:p-6 md:gap-y-0 gap-y-6">
        <div className="md:w-[50%] w-full flex flex-col justify-center items-center md:items-start p-6">
          <motion.h1
            className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello! I am
          </motion.h1>
          <motion.h1
            className="sm:text-5xl md:text-6xl text-4xl font-bold text-orange-500 mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Mustansar Jutt
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl mt-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            MERN Stack Developer
          </motion.h2>
          <motion.div
            className="flex md:gap-x-6 gap-x-4 items-center mt-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-3 rounded-full hover:text-[#0077B5] transition-all duration-300"
            >
              <FaLinkedin className="md:text-[28px] sm:text-[23px] text-[20px]" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-3 rounded-full hover:text-[#1DBF73] transition-all duration-300"
            >
              <SiFiverr className="md:text-[28px] sm:text-[23px] text-[20px]" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-3 rounded-full hover:text-[#6FDA44] transition-all duration-300"
            >
              <SiUpwork className="md:text-[28px] sm:text-[23px] text-[20px]" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-3 rounded-full hover:text-[#E4405F] transition-all duration-300"
            >
              <FaInstagram className="md:text-[28px] sm:text-[23px] text-[20px]" />
            </a>
          </motion.div>
        </div>
        <div className="md:w-[50%] w-full flex flex-col justify-center p-6 items-center">
          <BackgroundGradient className="rounded-[22px] lg:w-[400px] md:w-[370px] sm:w-[320px] w-[265px]">
            <motion.img
              src={image}
              alt="img"
              className="w-full rounded-[22px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </BackgroundGradient>
          <motion.div
            className="flex justify-center items-center mt-6 gap-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.button
              className="border-[2px] border-orange-500 bg-black text-orange-500 px-2 py-1.5 rounded-2xl font-semibold cursor-pointer hover:text-black hover:border-black hover:bg-orange-500 transition-all duration-300"
              onClick={handleDownloadCV}
              whileTap={{
                scale: 0.7,
                transition: { duration: 0.15, ease: "easeInOut" },
              }}
            >
              Download CV
            </motion.button>
            <motion.button
              className="border-[2px] border-orange-500 bg-black text-orange-500 px-2 py-1.5 rounded-2xl font-semibold cursor-pointer hover:text-black hover:border-black hover:bg-orange-500 transition-all duration-300"
              onClick={() => navigate("/contact-me")}
              whileTap={{
                scale: 0.7,
                transition: { duration: 0.15, ease: "easeInOut" },
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-950 text-white p-7">
        <h1 className="text-center md:text-5xl sm:text-4xl text-3xl md:font-bold sm:font-semibold py-4">
          Skills
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap mt-6">
          <Card
            heading="Frontend Development"
            description="Skilled in React.js, JSX, responsive design, component architecture, hooks, and dynamic UI development."
          />
          <Card
            heading="Backend Development"
            description="Experienced in Node.js, Express.js, RESTful APIs, MongoDB, authentication, and server-side logic."
          />
          <Card
            heading="Tools"
            description="Proficient with Git, GitHub, VS Code, Postman, npm, SSH, CCleaner, and BleachBit for optimization."
          />
        </div>
      </div>
    </>
  );
}

export default Home
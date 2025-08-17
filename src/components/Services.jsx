import { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaShieldAlt, FaBug, FaDatabase } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";

function Services() {
  const servicesData = [
    {
      icon: <FaLaptopCode />,
      title: "MERN Stack Development",
      desc: "Develop high-performance web applications using MongoDB, Express.js, React, and Node.js. From dynamic dashboards to scalable web platforms, I build efficient and secure full-stack solutions.",
    },
    {
      icon: <MdAnimation />,
      title: "Frontend Animations & UI/UX Enhancement",
      desc: "Add life to your website with interactive animations using Framer Motion. Improve user engagement with smooth transitions, micro-interactions, and modern UI effects.",
    },
    {
      icon: <AiOutlineApi />,
      title: "API Development & Integration",
      desc: "Build and integrate RESTful APIs to connect web and mobile applications efficiently. Whether it's third-party API integration or custom backend services, I ensure seamless data flow.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Web Security & Ethical Hacking",
      desc: "Ensure your web applications are secure with ethical hacking techniques. I help identify vulnerabilities, strengthen security, and protect sensitive data from potential threats.",
    },
    {
      icon: <FaBug />,
      title: "Bug Fixing & Code Refactoring",
      desc: "Troubleshoot and fix issues in existing projects while improving code structure for better maintainability.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design & Management",
      desc: "Efficiently structure and manage databases using MongoDB and other database technologies. I design scalable, secure, and optimized database architectures to ensure smooth data flow, high performance, and reliability.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="min-h-4/5 h-auto p-6 bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <motion.h1
        className="text-3xl text-center text-sky-600 font-bold cursor-pointer mb-9"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scaleX: 1.025 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
      >
        Exclusive <span className="text-orange-400 font-mono">Services</span>
      </motion.h1>
      <div className="flex justify-center gap-x-3 gap-y-4 flex-wrap items-center">
        {servicesData.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="border-2 border-[#E85C0D] rounded-xl min-h-[300px] h-auto w-[280px] bg-gray-800 p-4 flex flex-col gap-y-3 overflow-hidden cursor-pointer shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2 * index,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl text-[#D91656]">{item.icon}</div>
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.4 * index,
                }}
                className="text-xl text-[#9ea59d] font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.p
                className={`text-justify text-[#788670] font-sans transition-all ${
                  isExpanded ? "line-clamp-none" : "line-clamp-3"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.5 * index,
                }}
              >
                {item.desc}
              </motion.p>
              <button
                className="mt-2 text-blue-600 font-semibold hover:underline"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
import { motion } from "framer-motion";

function AboutMe() {
  const journeyData = [
    {
      year: "2022",
      title: "Started Learning Web Development",
      desc: "Began my journey by exploring HTML, CSS, and JavaScript.",
    },
    {
      year: "2023",
      title: "Mastered MERN Stack",
      desc: "Gained proficiency in MongoDB, Express.js, React, and Node.js.",
    },
    {
      year: "2024",
      title: "Explored Networking",
      desc: "Expanded my knowledge in Computer Networking.",
    },
    {
      year: "2025",
      title: "Building a Strong Portfolio",
      desc: "Currently working on advanced projects and seeking new opportunities.",
    },
  ];

  return (
    <motion.div
      className="min-h-4/5 h-auto p-5 flex flex-col lg:flex-row justify-around items-center bg-gradient-to-br from-gray-950 via-black to-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="lg:w-[40%] w-full flex flex-col space-y-3 border-[2px] border-gray-400 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl cursor-pointer"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.025 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center tracking-wide text-slate-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.h2
          className="text-justify leading-relaxed text-slate-200"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          👋 Hi, I'm{" "}
          <span className="uppercase font-bold text-2xl tracking-wider font-mono text-slate-500">
            Mustansar Hussain
          </span>
          , a passionate MERN Stack Developer with a strong focus on building
          efficient, scalable, and user-friendly web applications. With
          expertise in MongoDB, Express.js, React, and Node.js, I turn ideas
          into reality by crafting seamless digital experiences.
        </motion.h2>
        <motion.ul
          className="text-justify"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {[
            {
              title: "Full Stack Web Development",
              desc: "Creating dynamic, responsive, and high-performance applications",
            },
            {
              title: "Frontend Excellence",
              desc: "Designing engaging UIs with React.js & Framer Motion animations",
            },
            {
              title: "Backend Mastery",
              desc: "Building secure and optimized APIs using Node.js & Express.js",
            },
            {
              title: "Database Management",
              desc: "Structuring and handling data efficiently with MongoDB",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <span className="font-bold text-lg text-orange-500 tracking-wide">
                {item.title} -{" "}
              </span>
              <span className="text-slate-200">{item.desc}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="lg:w-[40%] w-full mt-10 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          My Journey
        </h2>
        <div className="flex flex-col items-center">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-[80%] md:w-[60%] mb-6 p-5 border-l-4 border-orange-500 bg-gray-900 shadow-md rounded-lg cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scaleX: 1.025 }}
            >
              <div className="absolute -left-5 top-4 w-10 h-10 bg-orange-500 text-white flex items-center justify-center font-bold rounded-full shadow-lg p-1">
                {item.year}
              </div>
              <h3 className="text-xl font-semibold text-gray-200">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
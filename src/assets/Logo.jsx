import React from "react"
import { motion } from "framer-motion"

export default function MHJuttLogo() {
  return (
    <motion.div
      whileHover={{scale: 1.05, rotate: 5}}
      whileTap={{scale: 0.9}}
      className="md:text-3xl text-2xl text-white"
    >
      <span className="p-0.5 bg-gray-500 border-[1px]">M</span>
      <span className="p-0.5 bg-gray-400 border-[1px]">H</span>
      <span className="p-0.5 bg-gray-300 border-[1px]">J</span>      
      <span className="p-0.5 border-[1px] text-slate-700">Dev</span>      
    </motion.div>
  )
}
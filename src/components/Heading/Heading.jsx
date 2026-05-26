import React from "react";
import "./Heading.css";
import { motion } from "framer-motion";
const Heading = ({text}) =>{

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative w-full py-5 flex flex-col items-center gap-10  z-10">
      <h2 className="head text-4xl font-bold text-white mb-4 text-center">
        {text}
      </h2>
    </motion.div>
  );
};

export default Heading;

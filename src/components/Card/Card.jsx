import React from "react";
import Btn from "../Btn/Btn";
import { motion } from "framer-motion";
export default function Card({
  img = "/assets/1.svg",
  title = "Trendy House Plant",
  description = "Calathea plant",
  price = 100,
}) {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-[450px] rounded-[50px] p-px bg-[rgba(255,255,255,0.08)] backdrop-blur-md text-gray-800 overflow-hidden   shadow-lg cursor-pointer"
    >
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.5)] size-40 absolute z-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      <div className="relative z-10 bg-transparent p-6 h-full w-full rounded-[50px] flex flex-col items-center justify-center text-center">
        <img
          src={img}
          alt={title}
          className="w-3xl  rounded-full my-1 object-cover h-[80%] mt-10"
        />
        <div className="flex flex-col items-center justify-center gap-1 mb-4 h-full">
          <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
          <p className="text-sm text-slate-400 font-medium mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between w-full px-4 mb-[150px]">
            <span className="text-sm text-slate-300 mb-4 text-[18px]">
              Rs. {price}/-
            </span>
            <Btn text="Buy Now" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import Btn from "../Btn/Btn";
import { motion } from "framer-motion";
const HeroCards = ({i}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: i%2 === 0 ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className={`relative z-10 bg-[rgba(255,255,255,0.05)] p-2  w-4/5 mx-auto rounded-[40px] flex ${i % 2 === 0 ? 'md:flex-row-reverse ps-7' : 'md:flex-row'} flex-col items-center justify-between`}
    >
      <div className="img">
        <img
          src="/assets/1.svg"
          alt="Profile"
          className="w-[350px] rounded-full mb-4 object-cover"
          />
        </div>
        <div className="content md:w-[50%] w-full text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-1 text-[30px]">
            For Small Desk Ai Plant
          </h2>
          <p className="text-sm text-slate-300 font-medium mb-4 text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
          </p>
          <p className="text-sm text-slate-300 mb-4 px-4 text-[18px]">
            Rs. 599/-
          </p>

          <Btn text="Buy Now" />
        </div>
      </motion.div>
  );
};
export default HeroCards;

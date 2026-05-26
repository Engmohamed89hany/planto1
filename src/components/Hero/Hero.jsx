import React from "react";
import Card from "../Card/Card";
import Btn from "../Btn/Btn";
import HeroCards from "../HeroCards/HeroCards";
import Heading from "../Heading/Heading";
import { motion } from "framer-motion";
import ClientCard from "../Clients/Client";
const Hero = () => {
  return (
    <>
      <div className=" gap-10 py-16 pt-[170px] bg-[url('/assets/hero.svg')] bg-cover bg-no-repeat  bg-center min-h-[100vh] relative">
        <div className="overlay absolute inset-0 bg-black/40 z-0"></div>
        <div className="min-h-screen w-full text-center md:text-start flex items-center justify-center md:justify-start flex-col md:flex-row">
          <div className="container w-4/5 mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="heading text-center md:text-left w-full md:w-1/2">
              <h1 className="text-5xl font-bold text-white mb-4">
                Breath Natural
              </h1>
              <p className="text-lg text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btns flex space-x-4 mt-8 justify-center md:justify-start">
                <Btn text="Explore..." />
                <Btn text="Live Demo..." />
              </div>
              <ClientCard />
            </motion.div>
            <Card />
          </div>
        </div>
        <Heading text="Our Trendy Plants" />
        <div className="w-full py-16 flex flex-col items-center gap-10 relative z-10">
          <HeroCards i={1} />
          <HeroCards i={2} />
        </div>
      </div>
    </>
  );
};

export default Hero;

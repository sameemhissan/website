"use client";

import { motion } from "framer-motion";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-between w-full"
    >
      <motion.div
        className="md:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-h1Mobile md:text-h1 text-black font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#053B83] font-bold">Hissan Aero</span>
          <br />
          Your Trusted Partner in Aviation Supply
        </motion.p>

        <motion.div
          className="block md:hidden my-[35px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src="/images/heroCustom.svg" alt="hero illustration" />
        </motion.div>

        <motion.p
          className="text-p text-black my-[35px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Based in <span className="font-semibold">United Arab Emirates</span>,
          we specialize in the supply of high-quality aircraft consumables,
          rotables, expendables, tools, and equipment. Our commitment to
          excellence and industry expertise ensures that you receive the
          reliable and efficient service you need to keep your fleet in top
          condition. Whether you're looking for essential consumables or
          specialized tools, we have you covered.
        </motion.p>

        {/* <MainButton
          text="Book a consultation"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        /> */}
      </motion.div>

      <motion.div
        className="hidden md:block pt-24"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img src="/images/heroCustom.svg" alt="hero illustration" width="670" />
      </motion.div>
    </section>
  );
}

export default HeroSection;

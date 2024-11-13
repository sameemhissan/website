import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div className="md:w-[50%]">
        <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">
          <span className="text-blue-500 font-bold">Hissan Aero</span>
          <br />
          Your Trusted Partner in Aviation Supply
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/microphone_illustration.png"
            alt="microphone illustration"
          />
        </div>

        <p className="text-p text-black my-[35px]">
          Based in Ajman, UAE, we specialize in the supply of high-quality
          aircraft consumables, rotables, expendables, tools, and equipment. Our
          commitment to excellence and industry expertise ensures that you
          receive the reliable and efficient service you need to keep your fleet
          in top condition. Whether you're looking for essential consumables or
          specialized tools, we have you covered.
        </p>

        <MainButton
          text="Book a consultation"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="hidden md:block">
        <img
          src="/images/microphone_illustration.png"
          alt="microphone illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;

import React from "react";
import MainButton from "../common/MainButton";

function AboutUs() {
  return (
    <section
      id="about"
      className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative"
    >
      <div className="md:pr-[22rem]">
        <p className="text-h3Mobile md:text-h3 font-medium">About Us</p>
        <p>Empowering Aviation Maintenance with Reliable Supplies</p>
        <p className="my-[26px]">
          Located in Ajman, UAE, Hissan Aero has established itself as a trusted
          supplier in the aviation sector. We understand the critical demands of
          aircraft maintenance and are dedicated to providing top-quality
          consumables, rotables, expendables, and tools that meet stringent
          industry standards. Our team's expertise and dedication drive us to
          deliver tailored solutions and unparalleled customer support.
        </p>
        <MainButton
          text="Get your free proposal"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <img
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
        />
      </div>
    </section>
  );
}

export default AboutUs;

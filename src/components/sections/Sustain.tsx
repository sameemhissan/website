import React from "react";
import ServiceCard from "../cards/ServiceCard";

export default function Sustain() {
  const services = [
    {
      titleTop: "Eco-Friendly Practices",
      titleBottom: "",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_1.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Compliance & Transparency",
      titleBottom: "",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Sustainability
        </div>
        <p className="text-p">
          <span className="font-bold text-2xl">
            Our Commitment to Responsible and Sustainable Operations
          </span>
          <br />
          At <strong className="text-[#053B83]">Hissan Aero</strong>, we're
          committed to sustainability. We work with eco-conscious suppliers and
          follow strict policies to minimize waste and support sustainable
          aviation initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[80px]">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}

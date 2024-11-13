import React from "react";
import ServiceCard from "../cards/ServiceCard";

export default function Solutions() {
  const services = [
    {
      titleTop: "24/7 Availability",
      titleBottom: "",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_1.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Flexible Delivery Options",
      titleBottom: "",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },
    {
      titleTop: "Commitment to Compliance",
      titleBottom: "",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },
  ];
  return (
    <section id="solutions" className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Solutions
        </div>
        <p className="text-p">
          <span className="font-bold text-2xl">
            Customized Aviation Supply Solutions for Unmatched Reliability
          </span>
          <br />
          Our tailored supply solutions are designed to meet the unique needs of
          aircraft maintenance operations across the Middle East and beyond. We
          understand the complexities of fleet maintenance and offer flexible,
          responsive service with access to a vast range of essential products.
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

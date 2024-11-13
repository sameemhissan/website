"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";

function Products() {
  const processes = [
    {
      label: "01",
      title: "Consumables",
      description:
        "Providing a range of consumables essential for maintenance and daily operations, including lubricants, adhesives, and cleaning agents. Our consumables are sourced from trusted brands, ensuring safety and performance with every use.",
    },
    {
      label: "02",
      title: "Rotables",
      description:
        "We offer high-quality rotables that meet OEM standards. Each item is carefully inspected and certified, allowing you to focus on maintaining flight readiness without worry.",
    },
    {
      label: "03",
      title: "Expendables",
      description:
        "Our expendable inventory is fully stocked with fasteners, seals, gaskets, and more, helping your maintenance teams operate efficiently and reduce downtime.",
    },
    {
      label: "04",
      title: "Tools & Equipment",
      description:
        "From specialized tools to standard maintenance equipment, we provide everything your technicians need to perform precise and effective repairs and inspections.",
    },
  ];

  const [value, setValue] = useState("");

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Products & Services
        </div>
        <p className="text-p">About our Products</p>
      </div>

      <div className="mt-[80px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processes.map((process, index) => (
            <WorkingProcessCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Products;

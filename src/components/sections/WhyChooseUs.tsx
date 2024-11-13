import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { title } from "process";

export default function WhyChooseUs() {
  const studies = [
    {
      title: "Strategic Location",
      bio: "Based in Ajman, UAE, for swift access to the Middle Eastern and global markets.",
    },
    {
      title: "Trusted Suppliers",
      bio: "We partner with certified suppliers to ensure product quality and reliability.",
    },
    {
      title: "Client-Centric Approach",
      bio: "From consultation to delivery, we prioritize your needs every step of the way.",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Why Choose Us?
        </div>
        <p className="text-p">Why we are your best choice</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-[45px] gap-[40px] mt-[80px] bg-secondary text-white p-8 md:p-[50px]">
        {studies.map((study, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div>
              <Link href="/">
                <div className="flex gap-2 items-center">
                  <p className="text-primary">{study.title}</p>
                  <div>
                    <img src="/images/arrow_rotate.png" />
                  </div>
                </div>
              </Link>
              <p className="pt-[20px]">{study.bio}</p>
            </div>
            {index !== 2 && (
              <div className="mx-4 xl:mx-[64px] hidden md:block">
                <Separator orientation="vertical" className="h-[186px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

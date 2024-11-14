import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function FooterSection() {
  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  const socials = [
    "/images/linkedin_icon.png",
    "/images/facebook_icon.png",
    "/images/twitter_icon.png",
  ];
  return (
    <section className="bg-secondary rounded-t-[45px] p-8 md:p-[60px]">
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <div>
          <img src="/images/logo.jpg" alt="footer logo" width="100" />
        </div>
        {/* <div className="flex flex-col md:flex-row gap-[40px]">
          {links?.map((link, index) => (
            <p key={index} className="text-white underline text-p">
              {link}
            </p>
          ))}
        </div> */}
        <div className="flex gap-[20px]">
          {socials.map((social, index) => (
            <div key={index}>
              <img src={social} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[66px] flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <div className="px-2 bg-primary inline-block font-medium text-[20px] rounded-md">
            You can connect to us on:
          </div>
          <p className="text-white mt-[27px] text-xl">
            <span className="text-gray-500">e-mail ID: </span>
            <strong>sales@hissan-aero.com</strong>
          </p>
          <p className="text-white mt-[27px] text-xl">
            <span className="text-gray-500">Phone no.: </span>
            <strong>+971588424676</strong>
          </p>
          <p className="text-gray-300 mt-[27px] text-xl">
            <strong>
              Address: # B.C. 1302208, AFZ C1 Building, Ajman Free Zone, United
              Arab Emirates
            </strong>
          </p>
        </div>
        <div className="bg-[#292A32] flex flex-col md:flex-row gap-4 justify-center items-center md:gap-[20px] py-16 px-[40px] rounded-[14px]">
          <Input placeholder="Email" className="h-[58px] rounded-[14px]" />
          <MainButton text="Subscribe to us " classes="bg-primary w-full" />
        </div>
      </div>
      <div className="my-[25px]">
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
        <p className="text-white text-p">
          © 2024 Hissan Aero. All Rights Reserved.
        </p>
        <p className="text-white underline text-p">Privacy Policy</p>
      </div>
    </section>
  );
}

export default FooterSection;

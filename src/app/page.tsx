import NavBar from "@/components/common/NavBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactUsSection from "@/components/sections/ContactUsSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import Products from "@/components/sections/Products";
import ServiceSection from "@/components/sections/Solutions";
import TeamSection from "@/components/sections/TeamSection";
import Sustain from "@/components/sections/Sustain";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mx-4 md:mx-[100px] pt-[70px] flex flex-col gap-[140px]">
        <HeroSection />
        {/* <LogoGroupSection /> */}
        <AboutUs />
        <WhyChooseUs />
        <Products />
        <Solutions />
        <Sustain />
        {/* <TeamSection /> */}
        <ContactUsSection />
        <FooterSection />
      </div>
    </main>
  );
}

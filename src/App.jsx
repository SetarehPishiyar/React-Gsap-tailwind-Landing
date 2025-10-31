import React from "react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
  }, []);
  return (
    <main>
      <NavBar></NavBar>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection></HeroSection>
          <MessageSection></MessageSection>
          <FlavorSection></FlavorSection>
          <NutritionSection></NutritionSection>
          <div>
            <BenefitSection></BenefitSection>
            <TestimonialSection></TestimonialSection>
          </div>
          <FooterSection></FooterSection>
        </div>
      </div>
    </main>
  );
};

export default App;

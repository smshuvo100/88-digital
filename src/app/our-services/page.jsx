import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import SubHero from "../components/SubHero/SubHero";
import Image from "next/image";

import "./OurServices.css";

export default function page() {
  return (
    <>
      <Header2 />
      <SubHero
        subtitle="Our"
        highlight="SERVICES"
        title="ideas into thriving"
        gradientText="Business"
        btnText="Get In Touch"
        btnLink="/contact"
      />

      {/* PLZ add section here */}

      <FAQ />
      <Footer />
    </>
  );
}

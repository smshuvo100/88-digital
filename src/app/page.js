"use client";

import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

import Header from "./components/Header/Header";
import HomeHero from "./components/HomeHero/HomeHero";
import Brands from "./components/Brands/Brands";
import Quote from "./components/Quote/Quote";
import RecentWork from "./components/RecentWork/RecentWork";

export default function Home() {
  return (
    <>
      <Header />

      <HomeHero />
      <Brands />

      <Quote />
      <RecentWork />
      {/* ===== HERO SECTION (SEPARATE) ===== */}

      {/* Next section placeholder */}
      {/* <section className="next-sec">
        <div className="container">
          <h1>This is the next section</h1>
          <h2>This is the next section</h2>
          <h3>This is the next section</h3>
          <h4>This is the next section</h4>
          <h5>This is the next section</h5>
          <h6>This is the next section</h6>

          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </section> */}
    </>
  );
}

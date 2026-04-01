import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import SubHero from "../components/SubHero/SubHero";
import ContactSec from "../components/ContactSec/ContactSec";

import Image from "next/image";

import "./AboutUs.css";

export default function page() {
  return (
    <>
      <Header2 />

      <SubHero
        subtitle="Services"
        highlight="88"
        title="Smart Digital"
        gradientText="Solutions"
        btnText="Explore Services"
        btnLink="/services"
      />

      <section
        className="mission-vision-sec"
        style={{ backgroundImage: "url('/assets/mission-vision.jpg')" }}
      >
        <div className="container">
          <div className="flex-box">
            <div className="vision box">
              <div className="title-box">
                <h1 className="title1 gradient-text">Vision</h1>
                <h4>
                  Our <span className="gradient-text">Vision</span>
                </h4>
              </div>

              <p className="text4">
                A world where anyone can confidently start a successful business
                with expert guidance and proven strategies.
              </p>
            </div>

            <div className="empty-coll"></div>

            <div className="mission box">
              <div className="title-box">
                <h1 className="title1 gradient-text">Mission</h1>
                <h4>
                  Our <span className="gradient-text">Mission</span>
                </h4>
              </div>

              <p className="text4">
                We provide professionals and families with solutions in market
                research, financial planning, branding, and growth marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-values-sec">
        <div className="container">
          <h2 className="uppercase center header">Our Values</h2>
          <div
            className="sphere"
            style={{ backgroundImage: "url('/assets/sphere.png')" }}
          >
            <div className="box">
              <Image
                src="/assets/graph.png"
                alt="our-values"
                width={32}
                height={32}
                className="our-values-img"
              />
              <h2 className="uppercase center">Results</h2>
              <p className="text4 center">Measurable outcomes that matter</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <ContactSec />

      <Footer />
    </>
  );
}

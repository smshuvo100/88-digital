"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./SubHero.css";

export default function SubHero({
  subtitle = "About",
  highlight = "88",
  title = "From Idea to",
  gradientText = "Business",
  btnText = "Get In Touch",
  btnLink = "/about",
}) {
  return (
    <section className="sub-hero-sec">
      <div className="container">
        <div className="wrap">
          {/* Subtitle */}
          <div className="sub-title">
            <p className="text4">{subtitle}</p>
            <h2 className="gradient-text uppercase">{highlight}</h2>
          </div>

          {/* Title */}
          <h2 className="title2 uppercase">
            {title} <br />
            <span className="gradient-text">{gradientText}</span>
          </h2>

          {/* Button */}
          <div className="btn">
            <a href={btnLink}>
              <span>{btnText}</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

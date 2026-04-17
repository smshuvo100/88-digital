"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import "./SubHero.css";

export default function SubHero({
  subtitle = "About",
  highlight = "88",
  title = "From Idea to",
  gradientText = "Business",
  btnText = "Get In Touch",
  btnLink = "/about",
}) {
  // same hero-style stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.25,
      },
    },
  };

  // subtitle animation
  const fadeUpSubTitle = {
    hidden: { y: 44, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.05,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // main title animation
  const fadeUpTitle = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // button animation
  const fadeUpBtn = {
    hidden: { y: 36, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="sub-hero-sec">
      <div className="container">
        <motion.div
          className="wrap"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Subtitle */}
          <motion.div className="sub-title" variants={fadeUpSubTitle}>
            <p className="text4">{subtitle}</p>
            <h2 className="gradient-text uppercase">{highlight}</h2>
          </motion.div>

          {/* Title */}
          <motion.h2 className="title2 uppercase" variants={fadeUpTitle}>
            {title} <br />
            <span className="gradient-text">{gradientText}</span>
          </motion.h2>

          {/* Button */}
          <motion.div className="btn" variants={fadeUpBtn}>
            <a href={btnLink}>
              <span>{btnText}</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// src/app/components/HomeHero/HomeHero.jsx
"use client";

import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import "./HomeHero.css";
import Link from "next/link";

export default function HomeHero() {
  // ✅ slower + deeper from bottom (more distance)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14, // ✅ slower stagger
        delayChildren: 0.25, // ✅ more delay before start
      },
    },
  };

  // ✅ main title: comes more from bottom + slower
  const fadeUpTitle = {
    hidden: { y: 60, opacity: 0 }, // ✅ more from bottom
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25, // ✅ more time
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // ✅ subtitle: slightly less than title but still slow
  const fadeUpText = {
    hidden: { y: 44, opacity: 0 }, // ✅ more from bottom
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.05, // ✅ more time
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // ✅ scroll: slow reveal + gentle float
  const fadeUpScroll = {
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
    <main className="home" id="home-sec">
      <section className="hero-sec">
        {/* Background video area */}
        <div className="bg-video">
          <video className="bg-video__el" autoPlay muted loop playsInline>
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="bg-video__mask" />
        </div>

        {/* Hero content */}
        <div className="hero-content">
          <div className="container">
            <motion.div
              className="hero-inner"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Title */}
              <motion.h1 className="title1" variants={fadeUpTitle}>
                FEEL THE BURN OF <br />
                BETTER <span className="gradient-text">DIGITAL</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p className="text2" variants={fadeUpText}>
                Every pixel, every line of code, every scroll <br />– cooked to
                perfection.
              </motion.p>

              {/* Scroll CTA */}
              <motion.div className="scroll" variants={fadeUpScroll}>
                <p className="text3">Scroll to Feel the Heat</p>
                {/* <a href="#next-section">
                  <div className="arrow">
                    <div className="hover-wrap">
                      <div className="line"></div>
                    </div>
                    <BsArrowDown />
                  </div>
                </a> */}

                <a href="#next-section" className="arrow-link">
                  <div className="arrow">
                    <svg
                      className="scroll-arrow-svg"
                      viewBox="0 0 16 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        className="arrow-extra-line"
                        x1="8"
                        y1="1"
                        x2="8"
                        y2="15"
                      />
                      <path
                        className="arrow-main"
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"></path></svg> */
}

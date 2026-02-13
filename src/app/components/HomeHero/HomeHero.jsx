// src/app/components/HomeHero/HomeHero.jsx
"use client";

import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import "./HomeHero.css";

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
    <main className="home">
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
              <motion.div
                className="scroll"
                variants={fadeUpScroll}
                whileHover={{ y: -3 }}
                animate={{ y: [0, -10, 0] }} // ✅ more visible but still smooth
                transition={{
                  duration: 3.0, // ✅ slower floating
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={() =>
                  document.getElementById("next-section")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <p className="text3">Scroll to Feel the Heat</p>
                <BsArrowDown />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

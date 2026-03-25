"use client";

import "./Quote2.css";
import { BsArrowRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Quote2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 80,
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const btnVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const words = [
    "We help aspiring",
    "entrepreneurs turn",
    "their ideas into",
    "successful business",
  ];

  return (
    <section className="quote-sec">
      <div className="container">
        <motion.div
          ref={ref}
          className="quote-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="quote-text">
            {words.map((word, index) => (
              <div key={index} className="line-mask">
                <motion.span
                  className="line-item"
                  variants={wordVariants}
                  custom={index}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.div
            className="btn smj"
            variants={btnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <a href="/about" className="quote-btn">
              <span>More About Us</span>
              <BsArrowRight className="arrow-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

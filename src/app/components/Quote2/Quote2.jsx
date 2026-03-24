"use client";

import "./Quote2.css";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Quote2() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpTitle = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUpItem = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="quote-sec">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            className="text1 quote-text gradient-text"
            variants={fadeUpTitle}
          >
            &ldquo;We help aspiring entrepreneurs turn their ideas into
            successful Business&rdquo;
          </motion.p>

          <motion.div className="btn" variants={fadeUpItem}>
            <a href="/about">
              <span>More About Us</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

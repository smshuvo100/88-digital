"use client";

import "./Quote2.css";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Quote2() {
  const textAnim = {
    hidden: { y: 80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const btnAnim = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="quote-sec">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="quote-wrap"
        >
          <motion.p className="quote-text gradient-text" variants={textAnim}>
            <span>
              We help aspiring entrepreneurs turn their ideas into successful
              business
            </span>
          </motion.p>

          <motion.div className="btn smj" variants={btnAnim}>
            <a href="/about" className="quote-btn">
              <span>More About Us</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

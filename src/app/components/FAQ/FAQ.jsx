"use client";

import { useRef, useState } from "react";
import "./FAQ.css";
import { motion, useInView } from "framer-motion";

const FAQS = [
  {
    q: "What does your agency do exactly?",
    a: "We help entrepreneurs transform their ideas into real businesses by providing research, branding, digital solutions, and growth strategies — all under one roof.",
  },
  {
    q: "Who can benefit from your services?",
    a: "Startups, small businesses, and growing brands who want strategy + design + development + marketing in one place can benefit the most.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "We focus on measurable outcomes and long-term growth — combining research, design, and engineering with ongoing optimization.",
  },
  {
    q: "Do I need a clear business idea before working with you?",
    a: "Not necessarily. We can help refine your concept, validate the market, and shape a clear plan before execution.",
  },
  {
    q: "How long does it take to launch a business with you?",
    a: "Depending on scope, a typical launch can take 2–8 weeks. We’ll share a timeline after understanding your goals.",
  },
];

export default function FAQ() {
  // ✅ always keep one open
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    if (openIndex !== idx) setOpenIndex(idx);
  };

  // ✅ trigger animation when section is visible (so you don't miss it)
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.55, once: true });

  // ✅ container stagger
  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.18,
      },
    },
  };

  // ✅ each item comes from bottom (slow + deeper)
  const item = {
    hidden: { y: 90, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // ✅ title reveal
  const title = {
    hidden: { y: 34, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="faq-sec" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="faq-title uppercase center"
          variants={title}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        {/* ✅ list reveal (CSS accordion stays as-is) */}
        <motion.div
          className="faq-wrap"
          variants={list}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FAQS.map((itemData, idx) => {
            const isOpen = idx === openIndex;

            return (
              <motion.div
                key={idx}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                variants={item}
              >
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-qtext">{itemData.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* ✅ Keep your CSS slide system exactly same */}
                <div className={`faq-a ${isOpen ? "open" : ""}`}>
                  <div className="faq-a-inner">
                    <p className="faq-atext text5">{itemData.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

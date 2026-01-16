"use client";

import { useState } from "react";
import "./FAQ.css";

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

  return (
    <section className="faq-sec">
      <div className="container">
        <h2 className="faq-title uppercase center">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="faq-wrap">
          {FAQS.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={idx} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-qtext">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* ✅ Smooth slide like your Tailwind version */}
                <div className={`faq-a ${isOpen ? "open" : ""}`}>
                  <div className="faq-a-inner">
                    <p className="faq-atext text5">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

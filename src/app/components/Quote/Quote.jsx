"use client";

import "./Quote.css";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      let splitInstance;
      let st;

      (async () => {
        const SplitType = (await import("split-type")).default;

        splitInstance = new SplitType(textRef.current, {
          types: "lines",
          lineClass: "q-line",
        });

        const lineInners = splitInstance.lines.map((line) => {
          const inner = document.createElement("span");
          inner.className = "q-line-inner";
          inner.innerHTML = line.innerHTML;
          line.innerHTML = "";
          line.appendChild(inner);
          return inner;
        });

        // ✅ initial state (BOTTOM → TOP needs negative yPercent)
        gsap.set(lineInners, { yPercent: -110, opacity: 0 });
        gsap.set(btnRef.current, { y: 14, opacity: 0 });

        // faster timeline
        const tl = gsap.timeline();
        tl.to(lineInners, {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.06,
          duration: 0.55,
        }).to(
          btnRef.current,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 0.35,
          },
          "-=0.15",
        );

        // ✅ No pin → no extra whitespace
        st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 25%",
          scrub: true,
          pin: false,
          animation: tl,
          //markers: true,
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      })();

      return () => {
        splitInstance?.revert();
        st?.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section className="quote-sec" ref={sectionRef}>
      <div className="container">
        <p ref={textRef} className="text1 quote-text gradient-text">
          &ldquo;We help aspiring entrepreneurs turn their ideas into successful
          Business&rdquo;
        </p>

        <div className="btn" ref={btnRef}>
          <a href="/about">
            <span>More About Us</span>
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

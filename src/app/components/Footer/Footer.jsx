"use client";

import "./Footer.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const year = new Date().getFullYear();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      let splitInstance;
      let st;

      (async () => {
        const SplitType = (await import("split-type")).default;

        // ✅ split lines exactly like Quote
        splitInstance = new SplitType(titleRef.current, {
          types: "lines",
          lineClass: "q-line", // ✅ reuse same class name (same CSS behavior)
        });

        const lineInners = splitInstance.lines.map((line) => {
          const inner = document.createElement("span");
          inner.className = "q-line-inner"; // ✅ reuse same inner class
          inner.innerHTML = line.innerHTML;
          line.innerHTML = "";
          line.appendChild(inner);
          return inner;
        });

        // ✅ initial state (BOTTOM → TOP)
        gsap.set(lineInners, { yPercent: -110, opacity: 0 });

        const tl = gsap.timeline();
        tl.to(lineInners, {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: {
            each: 0.08,
            from: "end", // ✅ bottom line first (TOGETHER -> LET'S WORK)
          },
          duration: 0.85, // ✅ little slower for footer
        });

        st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 35%",
          scrub: true,
          pin: false,
          animation: tl,
          // markers: true,
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
    <footer className="ft-sec" ref={sectionRef}>
      <div className="container">
        {/* ✅ heading (ONLY this text animates) */}
        <h2 className="ft-title title1" ref={titleRef}>
          LET’S WORK
          <br />
          TOGETHER
        </h2>

        {/* CTA */}
        <div className="ft-cta">
          <div className="btn">
            <a className="ft-cta-btn" href="#">
              <span>LET’S TALK</span>
              <BsArrowRight />
            </a>
          </div>
        </div>

        {/* logo + tagline */}
        <div className="ft-brand">
          <Image
            src="/assets/logo-footer.png"
            alt="88 Digital"
            width={370}
            height={63}
            priority
            className="ft-logo"
          />
          <p className="ft-tagline">From Idea To Business</p>

          <div className="ft-social">
            <a href="#" aria-label="Facebook" className="ft-social-btn">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="WhatsApp" className="ft-social-btn">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Dribbble" className="ft-social-btn">
              <FaSnapchatGhost />
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="ft-divider" />

        {/* copyright */}
        <p className="ft-copy">© 88 Digital {year}. All Rights Reserved</p>

        {/* scroll top */}
        <button
          type="button"
          className="ft-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BsArrowUp />
        </button>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";

import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import "./HomeHero.css";

export default function HomeHero() {
  return (
    <>
      {/* ===== HERO SECTION (SEPARATE) ===== */}
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
              <div className="hero-inner">
                <h1 className=" title1">
                  FEEL THE BURN OF <br />
                  BETTER <span className="gradient-text">DIGITAL</span>
                </h1>

                <p className="text2">
                  Every pixel, every line of code, every scroll <br />– cooked
                  to perfection.
                </p>

                <div
                  className="scroll"
                  onClick={() =>
                    document.getElementById("next-section")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  <p className="text3">Scroll to Feel the Heat</p>
                  <BsArrowDown />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

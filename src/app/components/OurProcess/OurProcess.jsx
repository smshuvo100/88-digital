"use client";

import "./OurProcess.css";
import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="op-sec">
      <div className="container">
        <h2 className="op-title uppercase center">
          OUR PROCESS FROM IDEA TO SCALE
        </h2>

        <div className="op-box">
          {/* LEFT CONTENT */}
          <div className="op-left">
            <h4 className="op-step">
              <Image src="/assets/i.svg" alt="Step 1" width={23} height={45} />
              <span className="gradient-text">Ideation & Validation</span>
            </h4>

            <p className="text4">
              Empowering entrepreneurs to transform their ideas into validated
              business concepts with expert support.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="op-right">
            <Image
              src="/assets/our-process.png"
              alt="Our Process"
              width={698}
              height={544}
              className="op-img"
            />
            <div className="op-fade" />
          </div>
        </div>
      </div>
    </section>
  );
}

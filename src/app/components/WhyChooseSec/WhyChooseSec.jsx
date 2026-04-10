import React from "react";
import Image from "next/image";
import "./WhyChooseSec.css";
export default function WhyChooseSec() {
  return (
    <>
      <section className="why-choose-sec">
        <div className="container">
          <h2 className="uppercase center">Why Choose Us</h2>

          <div className="wrap">
            <div className="box">
              <div className="text-wrap">
                <h4 className="uppercase">Agile Development</h4>
                <p>Fast, flexible, and focused on you</p>
              </div>

              <Image
                src="/assets/why-bg-1.png"
                alt="Agile Development"
                width={120}
                height={120}
              />
            </div>

            <div className="box">
              <div className="text-wrap">
                <h4 className="uppercase">MVP-First Strategy</h4>
                <p>Build the core, learn from users</p>
              </div>
              <Image
                src="/assets/why-bg-2.png"
                alt="Agile Development"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

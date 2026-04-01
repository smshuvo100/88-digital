import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import ContactSec from "../components/ContactSec/ContactSec";

import Image from "next/image";

import "./Contact.css";

export default function page() {
  return (
    <>
      <Header2 />

      <section className="sub-hero-sec1">
        <div className="container">
          <div className="wrap">
            <div className="call1">
              {/* Subtitle */}
              <div className="sub-title">
                <p className="text4">Contact</p>
                <h2 className="gradient-text uppercase">us</h2>
              </div>
              {/* Title */}
              <h2 className="title2 uppercase">
                Got a question? <br /> we’ll respond <br />
                <span className="gradient-text">in 5 minutes!</span>
              </h2>
            </div>
            <div className="call2">
              <Image
                src="/assets/contact-img.png"
                alt="Contact Us"
                width={319}
                height={491}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactSec />

      <Footer />
    </>
  );
}

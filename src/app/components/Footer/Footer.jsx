"use client";

import "./Footer.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaDribbble } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft-sec">
      {/* top glow corners */}

      <div className="container">
        {/* heading */}
        <h2 className="ft-title title1">
          LET’S WORK
          <br />
          TOGETHER
        </h2>

        {/* CTA */}
        <div className="btn">
          <a className="ft-cta-btn" href="#">
            <span>LET’S TALK</span>
            <BsArrowRight />
          </a>
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
              <FaDribbble />
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
          <span className="ft-top-arrow" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}

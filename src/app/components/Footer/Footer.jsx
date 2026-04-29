"use client";

import "./Footer.css";
import Image from "next/image";
import { BsArrowRight, BsArrowUp } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpTitle = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUpItem = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="ft-sec">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* heading */}
          <motion.h2 className="ft-title title1" variants={fadeUpTitle}>
            LET’S WORK <br />
            TOGETHER
          </motion.h2>

          {/* CTA */}
          <motion.div className="ft-cta" variants={fadeUpItem}>
            <div className="btn">
              <a className="ft-cta-btn" href="#">
                <span>LET’S TALK</span>
                <BsArrowRight />
              </a>
            </div>
          </motion.div>

          {/* logo + tagline */}
          <motion.div className="ft-brand" variants={fadeUpItem}>
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
              <a href="#" aria-label="Snapchat" className="ft-social-btn">
                <FaSnapchatGhost />
              </a>
            </div>
          </motion.div>

          {/* divider */}
          <motion.div className="ft-divider" variants={fadeUpItem} />

          {/* copyright */}
          <motion.p className="ft-copy" variants={fadeUpItem}>
            © 88 Digital {year}. All Rights Reserved
          </motion.p>

          {/* scroll top */}
          {/* scroll top */}
          {/* scroll top */}
          <motion.button type="button" className="ft-top" variants={fadeUpItem}>
            <a href="#home-sec" className="arrow-link">
              <div className="arrow">
                <svg
                  className="scroll-arrow-svg"
                  viewBox="0 0 16 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* এখানে কোনো এক্সট্রা লাইন নেই, শুধু একটিমাত্র মেইন অ্যারো */}
                  <path className="arrow-main" fillRule="evenodd" />
                </svg>
              </div>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

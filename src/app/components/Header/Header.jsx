// src/app/components/Header/Header.jsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

import { motion, AnimatePresence } from "framer-motion";

import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  // Animations (no design change, only transform/opacity)
  const navVariants = {
    hidden: { y: -16, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linksWrapVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05, delayChildren: 0.15 },
    },
  };

  const linkVariants = {
    hidden: { y: -6, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ctaVariants = {
    hidden: { y: -8, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const dropdownMotion = {
    initial: { opacity: 0, y: 8, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: 8,
      scale: 0.985,
      transition: { duration: 0.14, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <header className="nav-section">
      <div className="container">
        <motion.nav
          className="nav"
          variants={navVariants}
          initial="hidden"
          animate="show"
        >
          <motion.a className="brand" href="#" variants={linkVariants}>
            <Image
              src="/assets/logo.png"
              alt="88 Digital"
              width={140}
              height={34}
              priority
            />
          </motion.a>

          <motion.ul
            className="nav-links"
            variants={linksWrapVariants}
            initial="hidden"
            animate="show"
          >
            <motion.li variants={linkVariants}>
              <a className="active" href="#">
                Home
              </a>
            </motion.li>

            <motion.li variants={linkVariants}>
              <a href="#">About us</a>
            </motion.li>

            {/* Services dropdown (hover logic same, only dropdown open/close animated) */}
            <motion.li
              className="has-dropdown"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
              variants={linkVariants}
            >
              <a href="/services" className="nav-link has-sub">
                Services <IoChevronDownOutline />
              </a>

              <AnimatePresence>
                {open && (
                  <motion.div
                    {...dropdownMotion}
                    className={`dropdown show`}
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                  >
                    <a href="/services/market-research">Market Research</a>
                    <a href="/services/financial-study">Financial Study</a>
                    <a href="/services/web-design">Website Design</a>
                    <a href="/services/mobile-design">Mobile Design</a>
                    <a href="/services/software-development">
                      Software Development
                    </a>
                    <a href="/services/marketing">Marketing</a>
                    <a href="/services/business-automation">
                      Business Automation
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li variants={linkVariants}>
              <a href="#">Portfolio</a>
            </motion.li>

            <motion.li variants={linkVariants}>
              <a href="#">Blogs</a>
            </motion.li>

            <motion.li variants={linkVariants}>
              <a href="#">Contact us</a>
            </motion.li>
          </motion.ul>

          <motion.div
            className="btn"
            variants={ctaVariants}
            initial="hidden"
            animate="show"
          >
            <a href="#">
              <span>Let’s Talk</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
}

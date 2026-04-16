"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  IoChevronDownOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false); // desktop dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeTimer = useRef(null);
  const pathname = usePathname();

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

  const mobileMenuMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const mobilePanelMotion = {
    initial: { x: "100%", opacity: 0.8 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      x: "100%",
      opacity: 0.9,
      transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
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
          <motion.a className="brand" href="/" variants={linkVariants}>
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
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className={pathname === "/" ? "active" : ""} href="/">
                Home
              </a>
            </motion.li>

            <motion.li variants={linkVariants}>
              <a
                className={pathname === "/about-us" ? "active" : ""}
                href="/about-us"
              >
                About us
              </a>
            </motion.li>

            <motion.li
              className="has-dropdown"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
              variants={linkVariants}
            >
              <a
                href="/services"
                className={`nav-link has-sub ${
                  pathname.startsWith("/services") ? "active" : ""
                }`}
              >
                Services <IoChevronDownOutline />
              </a>

              <AnimatePresence>
                {open && (
                  <motion.div
                    {...dropdownMotion}
                    className="dropdown show"
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
              <a
                className={pathname === "/portfolio" ? "active" : ""}
                href="/portfolio"
              >
                Portfolio
              </a>
            </motion.li>

            <motion.li variants={linkVariants}>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className={pathname === "/blog" ? "active" : ""} href="/blog">
                Blogs
              </a>
            </motion.li>

            <motion.li variants={linkVariants}>
              <a
                className={pathname === "/contact" ? "active" : ""}
                href="/contact"
              >
                Contact us
              </a>
            </motion.li>
          </motion.ul>

          <motion.div
            className="btn desktop-cta"
            variants={ctaVariants}
            initial="hidden"
            animate="show"
          >
            <a href="#">
              <span>Let’s Talk</span>
              <BsArrowRight />
            </a>
          </motion.div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <IoMenuOutline />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-menu-overlay" {...mobileMenuMotion}>
            <motion.div className="mobile-menu-wrap" {...mobilePanelMotion}>
              <div className="mobile-menu-box">
                <div className="mobile-menu-top">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    className="mobile-brand"
                    href="/"
                    onClick={closeMobileMenu}
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="88 Digital"
                      width={150}
                      height={36}
                      priority
                    />
                  </a>

                  <button
                    className="mobile-close-btn"
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <IoCloseOutline />
                  </button>
                </div>

                <nav className="mobile-nav-links">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>

                  <a
                    href="/about-us"
                    className={pathname === "/about-us" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    About us
                  </a>

                  <div className="mobile-services-block">
                    <div className="mobile-services-header">
                      <a
                        href="/services"
                        className={`mobile-services-link ${
                          pathname.startsWith("/services") ? "active" : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        Services
                      </a>

                      {/* ✅ Icon click = toggle */}
                      <button
                        className={`mobile-services-toggle ${
                          mobileServicesOpen ? "open" : ""
                        }`}
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                      >
                        <IoChevronDownOutline />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          className="mobile-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.28 },
                              opacity: { duration: 0.2, delay: 0.05 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.22 },
                              opacity: { duration: 0.14 },
                            },
                          }}
                        >
                          <div className="mobile-submenu-inner">
                            <a
                              href="/services/market-research"
                              onClick={closeMobileMenu}
                            >
                              Market Research
                            </a>
                            <a
                              href="/services/financial-study"
                              onClick={closeMobileMenu}
                            >
                              Financial Study
                            </a>
                            <a
                              href="/services/web-design"
                              onClick={closeMobileMenu}
                            >
                              Website Design
                            </a>
                            <a
                              href="/services/mobile-design"
                              onClick={closeMobileMenu}
                            >
                              Mobile Design
                            </a>
                            <a
                              href="/services/software-development"
                              onClick={closeMobileMenu}
                            >
                              Software Development
                            </a>
                            <a
                              href="/services/marketing"
                              onClick={closeMobileMenu}
                            >
                              Marketing
                            </a>
                            <a
                              href="/services/business-automation"
                              onClick={closeMobileMenu}
                            >
                              Business Automation
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <a
                    href="/portfolio"
                    className={pathname === "/portfolio" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </a>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/blog"
                    className={pathname === "/blog" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Blogs
                  </a>

                  <a
                    href="/contact"
                    className={pathname === "/contact" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Contact us
                  </a>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

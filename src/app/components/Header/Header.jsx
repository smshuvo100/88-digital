"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    // ছোট delay = hover flicker বন্ধ
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  return (
    <header className="nav-section">
      <div className="container">
        <nav className="nav">
          <a className="brand" href="#">
            <Image
              src="/assets/logo.png"
              alt="88 Digital"
              width={140}
              height={34}
              priority
            />
          </a>

          <ul className="nav-links">
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>

            <li>
              <a href="#">About us</a>
            </li>

            {/* Services = link + dropdown (stable hover) */}
            <li
              className="has-dropdown"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <a href="/services" className="nav-link has-sub">
                Services <IoChevronDownOutline />
              </a>

              <div
                className={`dropdown ${open ? "show" : ""}`}
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
                <a href="/services/business-automation">Business Automation</a>
              </div>
            </li>

            <li>
              <a href="#">Portfolio</a>
            </li>

            <li>
              <a href="#">Blogs</a>
            </li>

            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          <div className="btn">
            <a href="#">
              <span>Let’s Talk</span>
              <BsArrowRight />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

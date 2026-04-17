"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import SubHero from "../components/SubHero/SubHero";
import Image from "next/image";
import Link from "next/link";

import "./OurServices.css";

export default function OurServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const servicesData = [
    {
      num: "01",
      title: "Market Research",
      desc: "Our Market Research service offers detailed analysis of consumer behavior, market trends, and competition. We use advanced tools to gather data, ensuring your business strategies are based on accurate information. Whether launching a new product or understanding your audience, our team delivers actionable insights for success.",
      image: "/assets/img3inone1.png",
      alt: "Market research image",
      link: "/services/market-research",
    },
    {
      num: "02",
      title: "Financial Study",
      desc: "Comprehensive financial modeling and analysis to ensure your business remains profitable and sustainable. We dive deep into numbers so you don't have to worry about the bottom line. Our team of financial experts provides detailed reports and actionable insights.",
      image: "/assets/img3inone1.png",
      alt: "Financial study image",
      link: "/services/financial-study",
    },
    {
      num: "03",
      title: "Website Design",
      desc: "Crafting beautiful and functional websites tailored to your brand identity. We create responsive, user-friendly websites that drive engagement and conversions. Our design process focuses on both aesthetics and functionality.",
      image: "/assets/img3inone1.png",
      alt: "Website design image",
      link: "/services/web-design",
    },
    {
      num: "04",
      title: "Mobile Design",
      desc: "Intuitive and engaging mobile app designs for iOS and Android platforms. We focus on creating seamless user experiences that keep users coming back. Our mobile designs are optimized for performance and usability.",
      image: "/assets/img3inone1.png",
      alt: "Mobile design image",
      link: "/services/mobile-design",
    },
    {
      num: "05",
      title: "Software Development",
      desc: "Custom software solutions built with cutting-edge technologies. We develop scalable, secure, and efficient software tailored to your business needs. From planning to deployment, we handle everything.",
      image: "/assets/img3inone1.png",
      alt: "Software development image",
      link: "/services/software-development",
    },
    {
      num: "06",
      title: "Marketing",
      desc: "Data-driven marketing campaigns to boost your visibility and ROI. We use advanced analytics and targeting strategies to reach your ideal audience. Our marketing solutions drive real results.",
      image: "/assets/img3inone1.png",
      alt: "Marketing image",
      link: "/services/marketing",
    },
    {
      num: "07",
      title: "Business Automation",
      desc: "Streamline your workflows and increase efficiency with smart automation. We help businesses reduce manual work and improve productivity through intelligent automation solutions.",
      image: "/assets/img3inone1.png",
      alt: "Business automation image",
      link: "/services/business-automation",
    },
  ];

  const activeService = servicesData[activeIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const scrollActiveItemIntoView = (index) => {
    if (typeof window === "undefined" || window.innerWidth > 1024) return;

    const target = itemRefs.current[index];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const offset = 16;

    window.scrollTo({
      top: absoluteTop - offset,
      behavior: "smooth",
    });
  };

  const handleTabClick = (idx) => {
    if (idx === activeIndex) {
      if (typeof window !== "undefined" && window.innerWidth <= 1024) {
        scrollActiveItemIntoView(idx);
      }
      return;
    }

    setActiveIndex(idx);
  };

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth > 1024) return;

    const timer = setTimeout(() => {
      scrollActiveItemIntoView(activeIndex);
    }, 460);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <>
      <Header2 />

      <SubHero
        subtitle="Our"
        highlight="SERVICES"
        title="ideas into thriving"
        gradientText="Business"
        btnText="Get In Touch"
        btnLink="/contact"
      />

      <section className="custom-services-section" ref={sectionRef}>
        <div className="custom-services-container container">
          <motion.div
            className="services-nav-list"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.num}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                variants={itemVariants}
                className={`service-accordion-item ${
                  activeIndex === idx ? "active" : ""
                }`}
                layout
                transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div
                  className={`service-nav-item ${
                    activeIndex === idx ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(idx)}
                >
                  <span className="nav-num">{service.num}</span>
                  <span className="nav-title">{service.title}</span>
                </div>

                <AnimatePresence initial={false} mode="wait">
                  {activeIndex === idx && (
                    <motion.div
                      key={`mobile-content-${service.num}`}
                      className="mobile-service-content open"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.22, ease: "easeOut" },
                      }}
                    >
                      <motion.div
                        className="slide-content-wrapper"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{
                          duration: 0.24,
                          ease: "easeOut",
                          delay: 0.05,
                        }}
                      >
                        <div className="service-full-image-wrap">
                          <div className="service-full-image">
                            <Image
                              src={service.image}
                              alt={service.alt}
                              width={1200}
                              height={700}
                              unoptimized
                            />
                          </div>
                        </div>

                        <p className="service-description">{service.desc}</p>

                        <div className="btn">
                          <Link href={service.link} className="gradient-btn">
                            LEARN MORE <BsArrowRight className="btn-icon" />
                          </Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop content area */}
          <div className="services-content-area">
            <motion.div
              key={activeService.num}
              className="slide-content-wrapper"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="service-full-image-wrap"
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="service-full-image">
                  <Image
                    src={activeService.image}
                    alt={activeService.alt}
                    width={1200}
                    height={700}
                    unoptimized
                  />
                </div>
              </motion.div>

              <motion.p
                className="service-description"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {activeService.desc}
              </motion.p>

              <motion.div
                className="btn"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Link href={activeService.link} className="gradient-btn">
                  LEARN MORE <BsArrowRight className="btn-icon" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}

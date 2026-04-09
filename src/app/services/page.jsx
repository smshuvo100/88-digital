"use client";

import React, { useState, useRef } from "react";
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
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const servicesData = [
    {
      num: "01",
      title: "Market Research",
      desc: "Our Market Research service offers detailed analysis of consumer behavior, market trends, and competition. We use advanced tools to gather data, ensuring your business strategies are based on accurate information. Whether launching a new product or understanding your audience, our team delivers actionable insights for success.",
      image: "/assets/img3inone1.png",
      alt: "Market research image",
    },
    {
      num: "02",
      title: "Financial Study",
      desc: "Comprehensive financial modeling and analysis to ensure your business remains profitable and sustainable. We dive deep into numbers so you don't have to worry about the bottom line. Our team of financial experts provides detailed reports and actionable insights.",
      image: "/assets/img3inone1.png",
      alt: "Financial study image",
    },
    {
      num: "03",
      title: "Website Design",
      desc: "Crafting beautiful and functional websites tailored to your brand identity. We create responsive, user-friendly websites that drive engagement and conversions. Our design process focuses on both aesthetics and functionality.",
      image: "/assets/img3inone1.png",
      alt: "Website design image",
    },
    {
      num: "04",
      title: "Mobile Design",
      desc: "Intuitive and engaging mobile app designs for iOS and Android platforms. We focus on creating seamless user experiences that keep users coming back. Our mobile designs are optimized for performance and usability.",
      image: "/assets/img3inone1.png",
      alt: "Mobile design image",
    },
    {
      num: "05",
      title: "Software Development",
      desc: "Custom software solutions built with cutting-edge technologies. We develop scalable, secure, and efficient software tailored to your business needs. From planning to deployment, we handle everything.",
      image: "/assets/img3inone1.png",
      alt: "Software development image",
    },
    {
      num: "06",
      title: "Marketing",
      desc: "Data-driven marketing campaigns to boost your visibility and ROI. We use advanced analytics and targeting strategies to reach your ideal audience. Our marketing solutions drive real results.",
      image: "/assets/img3inone1.png",
      alt: "Marketing image",
    },
    {
      num: "07",
      title: "Business Automation",
      desc: "Streamline your workflows and increase efficiency with smart automation. We help businesses reduce manual work and improve productivity through intelligent automation solutions.",
      image: "/assets/img3inone1.png",
      alt: "Business automation image",
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
                variants={itemVariants}
                className={`service-nav-item ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className="nav-num">{service.num}</span>
                <span className="nav-title">{service.title}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="services-content-area">
            <motion.div
              key={activeService.num}
              className="slide-content-wrapper"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              {/* IMAGE */}
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

              {/* DESCRIPTION */}
              <motion.p
                className="service-description"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {activeService.desc}
              </motion.p>

              {/* BUTTON */}
              <motion.div
                className="btn"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Link href="/contact" className="gradient-btn">
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

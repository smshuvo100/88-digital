"use client";

import "./RecentWork.css";
import Image from "next/image";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function RecentWork() {
  const swiperRef = useRef(null);

  const items = [
    {
      id: 1,
      title: "DIEGO’S Bags – Mobile App",
      img: "/assets/work1.jpg",
      big: "40%",
      bigLabel: "Sales Revenue",
      year: "2025",
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      img: "/assets/work2.jpg",
      big: "30%",
      bigLabel: "Sales Revenue",
      year: "2025",
    },
    {
      id: 3,
      title: "Mobile Banking Reinvented",
      img: "/assets/work3.jpg",
      big: "50%",
      bigLabel: "Sales Revenue",
      year: "2025",
    },
    {
      id: 4,
      title: "DIEGO’S Bags – Mobile App",
      img: "/assets/work4.jpg",
      big: "60%",
      bigLabel: "Sales Revenue",
      year: "2025",
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      img: "/assets/work1.jpg",
      big: "70%",
      bigLabel: "Sales Revenue",
      year: "2025",
    },
    {
      id: 6,
      title: "Mobile Banking Reinvented",
      img: "/assets/work2.jpg",
      big: "80%",
      bigLabel: "Sales Revenue",
      year: "2025",
    },
  ];

  // ✅ Stagger container (one by one)
  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12, // ✅ one-by-one speed
        delayChildren: 0.15,
      },
    },
  };

  // ✅ Each item comes from bottom to top (slow + deeper)
  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { y: 26, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ctaVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  return (
    <section className="rw-sec">
      <div className="container">
        <motion.h2
          className="uppercase center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          RECENT WORK
        </motion.h2>
      </div>

      {/* ✅ swiper OUTSIDE container (right overflow থাকবে) */}
      <div className="rw-outside">
        <div className="container">
          <div className="rw-slider">
            {/* ✅ Wrap Swiper in a motion container for stagger */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                onSwiper={(sw) => (swiperRef.current = sw)}
                slidesPerView="auto"
                spaceBetween={20}
                centeredSlides={false}
                loop={true}
                speed={650}
                grabCursor={true}
                watchSlidesProgress={true}
                observer={true}
                observeParents={true}
                updateOnWindowResize={true}
                pagination={{ clickable: true }}
                className="rw-swiper"
              >
                {items.map((it) => (
                  <SwiperSlide key={it.id} className="rw-slide">
                    {/* ✅ One-by-one item animation */}
                    <motion.article className="rw-card" variants={itemVariants}>
                      <div className="rw-media">
                        <Image
                          src={it.img}
                          alt={it.title}
                          fill
                          className="rw-img"
                          sizes="(max-width: 768px) 90vw, 520px"
                        />
                      </div>

                      <div className="rw-info">
                        <div className="rw-row">
                          <h5 className="rw-name">{it.title}</h5>
                          <span className="rw-year">{it.year}</span>
                        </div>

                        <div className="btn btn2">
                          <a href="#">
                            <span className="gradient-text">
                              VIEW FULL PROJECT
                            </span>
                            <BsArrowRight />
                          </a>
                        </div>

                        <div className="rw-watermark">
                          <span className="rw-big gradient-text">{it.big}</span>
                          <span className="rw-biglabel gradient-text ">
                            {it.bigLabel}
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rw-cta">
          <motion.div
            className="btn"
            variants={ctaVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <a href="#">
              <span>VIEW ALL PROJECTS</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

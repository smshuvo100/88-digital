"use client";

import "./OurServices.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function OurServices() {
  const items = [
    { id: 1, title: "Market\nResearch" },
    { id: 2, title: "Financial\nStudy" },
    { id: 3, title: "Website\nDesign" },
    { id: 4, title: "Mobile\nDesign" },
    { id: 5, title: "Software\nDevelopment" },
    { id: 6, title: "Marketing" },
  ];

  // ✅ loop smooth (RecentWork style: same items repeat)
  const loopItems = [...items, ...items];

  // ✅ Stagger container (item-by-item)
  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12, // ✅ one-by-one
        delayChildren: 0.15,
      },
    },
  };

  // ✅ Right -> Left (comes from right, settles to place)
  const itemVariants = {
    hidden: { x: 70, opacity: 0 }, // ✅ from right
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.85, // ✅ slower feel
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { y: 22, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ctaVariants = {
    hidden: { y: 18, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
    },
  };

  return (
    <section className="os-sec">
      <div className="container">
        <motion.h2
          className="uppercase center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          OUR SERVICES
        </motion.h2>
      </div>

      {/* ✅ EXACT like RecentWork: overflow on RIGHT only */}
      <div className="os-outside">
        <div className="container">
          <div className="os-slider">
            {/* ✅ Wrap swiper in motion container to apply stagger */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                speed={650}
                grabCursor={true}
                centeredSlides={false}
                watchSlidesProgress={true}
                observer={true}
                observeParents={true}
                updateOnWindowResize={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                pagination={{ clickable: true }}
                className="os-swiper"
              >
                {loopItems.map((it, idx) => (
                  <SwiperSlide key={`${it.id}-${idx}`} className="os-slide">
                    {/* ✅ Item-by-item Right -> Left */}
                    <motion.article className="os-card" variants={itemVariants}>
                      <h3 className="os-title">{it.title}</h3>

                      <div className="btn btn2">
                        <a href="#">
                          <span className="gradient-text">
                            VIEW FULL PROJECT
                          </span>
                          <BsArrowRight />
                        </a>
                      </div>

                      {/* light watermark behind text */}
                      <div className="os-water" aria-hidden="true">
                        {it.title}
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
        <div className="os-cta">
          <motion.div
            className="btn"
            variants={ctaVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <a href="#">
              <span>VIEW ALL SERVICES</span>
              <BsArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

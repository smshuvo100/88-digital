"use client";

import "./OurProcess.css";
import Image from "next/image";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { motion, AnimatePresence, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

const processSlides = [
  {
    stepIcon: "/assets/i1.svg",
    title: "Ideation & Validation",
    desc: "Empowering entrepreneurs to transform their ideas into validated business concepts with expert support.",
    image: "/assets/our-process.png",
  },
  {
    stepIcon: "/assets/i2.svg",
    title: "Business Planning & Strategy",
    desc: "Helping entrepreneurs turn their visions into validated business strategies with expert guidance.",
    image: "/assets/our-process2.png",
  },
  {
    stepIcon: "/assets/i4.svg",
    title: "Analyze",
    desc: "Helping entrepreneurs turn their visions into proven business models with professional guidance.",
    image: "/assets/our-process3.png",
  },
  {
    stepIcon: "/assets/i2.svg",
    title: "Business Planning & Strategy",
    desc: "Helping entrepreneurs turn their visions into validated business strategies with expert guidance.",
    image: "/assets/our-process4.png",
  },
  {
    stepIcon: "/assets/i3.svg",
    title: "Digital Presence",
    desc: "Empowering businesses to establish a strong digital presence through expert strategies and support.",
    image: "/assets/our-process5.png",
  },
];

function LeftText({ item, idx }) {
  const leftWrap = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.28,
        delayChildren: 0.08,
      },
    },
  };

  const stepTitle = {
    hidden: { y: 120, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const desc = {
    hidden: { y: 110, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className="op-left" variants={leftWrap}>
      <motion.h4 className="op-step" variants={stepTitle}>
        <Image
          src={item.stepIcon}
          alt={`Step ${idx + 1}`}
          width={47}
          height={45}
        />
        <span className="gradient-text">{item.title}</span>
      </motion.h4>

      <motion.p className="text4" variants={desc}>
        {item.desc}
      </motion.p>
    </motion.div>
  );
}

function RightImage({ item }) {
  const img = {
    hidden: { y: 140, opacity: 0, scale: 0.98 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.45,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.55,
      },
    },
  };

  return (
    <motion.div className="op-right" variants={img}>
      <Image
        src={item.image}
        alt={item.title}
        width={698}
        height={544}
        className="op-img"
      />
      <div className="op-fade" />
    </motion.div>
  );
}

export default function OurProcess() {
  const sectionRef = useRef(null);

  // ✅ only start animations when section becomes visible
  const inView = useInView(sectionRef, { amount: 0.35, once: true });

  // ✅ keep track of active slide so it animates again when slide changes (after inView)
  const [activeIdx, setActiveIdx] = useState(0);

  const slideWrap = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.05,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 44, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="op-sec" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="op-title uppercase center"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // ✅ triggers on scroll
        >
          OUR PROCESS FROM IDEA TO SCALE
        </motion.h2>

        <div className="op-swiper-wrap">
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            onSlideChange={(sw) => setActiveIdx(sw.realIndex)} // ✅ get active slide
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            className="op-swiper"
          >
            {processSlides.map((item, idx) => (
              <SwiperSlide key={idx}>
                <AnimatePresence mode="wait">
                  <motion.div
                    // ✅ re-animate per slide change ONLY after section is in view
                    key={`${activeIdx}-${item.title}-${inView ? "in" : "out"}`}
                    className={`op-box ${idx % 2 ? "op-box-reverse" : ""}`}
                    variants={slideWrap}
                    initial="hidden"
                    animate={inView && activeIdx === idx ? "show" : "hidden"}
                    exit={{
                      opacity: 0,
                      y: -16,
                      transition: { duration: 0.28 },
                    }}
                  >
                    <LeftText item={item} idx={idx} />
                    <RightImage item={item} />
                  </motion.div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

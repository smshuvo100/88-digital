"use client";

import "./SuccessStories.css";
import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function SuccessStories() {
  const sectionRef = useRef(null);

  // ✅ trigger later so you can SEE full animation
  const inView = useInView(sectionRef, { amount: 0.6, once: true });

  const items = [
    {
      id: 1,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "10",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
    {
      id: 2,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "20",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
    {
      id: 3,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "30",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
    {
      id: 4,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "40",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
    {
      id: 5,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "50",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
  ];

  return (
    <section className="ss-sec" ref={sectionRef}>
      <div className="container">
        {/* ✅ title slower + starts a bit later */}
        <motion.h2
          className="ss-title uppercase center"
          initial={{ y: 46, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 46, opacity: 0 }}
          transition={{
            duration: 1.35, // ✅ slower
            delay: 0.25, // ✅ start after you reach section
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          SUCCESS STORIES
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          centeredSlides={false}
          loop={true}
          speed={650}
          grabCursor={true}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          updateOnWindowResize={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="ss-swiper"
        >
          {items.map((it, idx) => (
            <SwiperSlide key={it.id} className="ss-slide">
              {/* ✅ motion wrapper only (card transform stays intact) */}
              <motion.div
                initial={{ y: 140, opacity: 0 }} // ✅ deeper from bottom
                animate={inView ? { y: 0, opacity: 1 } : { y: 140, opacity: 0 }}
                transition={{
                  duration: 1.6, // ✅ slower (so you can see)
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.45 + idx * 0.18, // ✅ more delay between cards
                }}
              >
                <article className="ss-card">
                  <div className="ss-avatar">
                    <Image
                      src={it.avatar}
                      alt={it.name}
                      width={56}
                      height={56}
                    />
                  </div>

                  <h5 className="ss-name">{it.name}</h5>
                  <p className="ss-role text6">{it.role}</p>

                  <div className="ss-stat">
                    <span className="ss-percent">
                      {it.percent}
                      <span className="ss-percent-sign">%</span>
                    </span>
                    <span className="ss-label text6 italic">{it.label}</span>
                  </div>

                  <p className="ss-quote text5 italic">
                    “<span className="ss-strong">88 Digital</span>{" "}
                    <span className="ss-bold">transformed</span> our rough
                    concept into a <span className="ss-bold">$2M</span> ARR SaaS
                    platform. Their team is{" "}
                    <span className="ss-bold">relentless</span>!”
                  </p>
                </article>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

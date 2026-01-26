"use client";

import "./SuccessStories.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Autoplay add

import "swiper/css";
import "swiper/css/pagination";

export default function SuccessStories() {
  const items = [
    {
      id: 1,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "40",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
    {
      id: 2,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "40",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
    {
      id: 3,
      name: "Jane Mark",
      role: "Founder of Ultimate-Tech Solutions, CAN",
      percent: "40",
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
      percent: "40",
      label: "Extra Sales Revenue",
      avatar: "/assets/avata.png",
    },
  ];

  return (
    <section className="ss-sec">
      <div className="container">
        <h2 className="ss-title uppercase center">SUCCESS STORIES</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView="auto" // ✅ CSS will control widths
          spaceBetween={10}
          centeredSlides={false} // ✅ active center
          loop={true}
          speed={650}
          grabCursor={true}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          updateOnWindowResize={true}
          // autoplay={{
          //   delay: 5000, // ✅ autoplay speed (2.5s)
          //   disableOnInteraction: false, // ✅ swipe করলে থামবে না
          //   pauseOnMouseEnter: true, // ✅ hover করলে pause হবে
          // }}
          pagination={{ clickable: true }}
          className="ss-swiper"
        >
          {items.map((it) => (
            <SwiperSlide key={it.id} className="ss-slide">
              <article className="ss-card">
                <div className="ss-avatar">
                  <Image src={it.avatar} alt={it.name} width={56} height={56} />
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
                  <span className="ss-bold">transformed</span> our rough concept
                  into a <span className="ss-bold">$2M</span> ARR SaaS platform.
                  Their team is <span className="ss-bold">relentless</span>!”
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

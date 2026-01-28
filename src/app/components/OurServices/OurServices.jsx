"use client";

import "./OurServices.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

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

  return (
    <section className="os-sec">
      <div className="container">
        <h2 className="uppercase center">OUR SERVICES</h2>
      </div>

      {/* ✅ EXACT like RecentWork: overflow on RIGHT only */}
      <div className="os-outside">
        <div className="container">
          <div className="os-slider">
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
                delay: 5000, // ✅ same as your RecentWork
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              pagination={{ clickable: true }}
              className="os-swiper"
            >
              {loopItems.map((it, idx) => (
                <SwiperSlide key={`${it.id}-${idx}`} className="os-slide">
                  <article className="os-card">
                    <h3 className="os-title">{it.title}</h3>

                    <div className="btn btn2">
                      <a href="#">
                        <span className="gradient-text">VIEW FULL PROJECT</span>
                        <BsArrowRight />
                      </a>
                    </div>

                    {/* light watermark behind text */}
                    <div className="os-water" aria-hidden="true">
                      {it.title}
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="os-cta">
          <div className="btn">
            <a href="#">
              <span>VIEW ALL SERVICES</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

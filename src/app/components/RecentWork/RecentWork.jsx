"use client";

import "./RecentWork.css";
import Image from "next/image";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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

  return (
    <section className="rw-sec">
      <div className="container">
        <h2 className="uppercase center">RECENT WORK</h2>
      </div>

      {/* ✅ swiper OUTSIDE container (right overflow থাকবে) */}
      <div className="rw-outside">
        <div className="container">
          <div className="rw-slider">
            <Swiper
              modules={[Pagination, Autoplay]}
              onSwiper={(sw) => (swiperRef.current = sw)}
              slidesPerView="auto"
              spaceBetween={20}
              centeredSlides={false} // ✅ SS-এর মতো: featured right-most
              loop={true}
              speed={650}
              grabCursor={true}
              watchSlidesProgress={true}
              observer={true}
              observeParents={true}
              updateOnWindowResize={true}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              //   pauseOnMouseEnter: false,
              // }}
              pagination={{ clickable: true }}
              className="rw-swiper"
            >
              {items.map((it) => (
                <SwiperSlide key={it.id} className="rw-slide">
                  <article className="rw-card">
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
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rw-cta">
          <div className="btn">
            <a href="#">
              <span>VIEW ALL PROJECTS</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

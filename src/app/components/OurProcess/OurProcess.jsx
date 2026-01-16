"use client";

import "./OurProcess.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Autoplay add

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    title: "Analyze ",
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
  return (
    <div className="op-left">
      <h4 className="op-step">
        <Image
          src={item.stepIcon}
          alt={`Step ${idx + 1}`}
          width={47}
          height={45}
        />
        <span className="gradient-text">{item.title}</span>
      </h4>
      <p className="text4">{item.desc}</p>
    </div>
  );
}

function RightImage({ item }) {
  return (
    <div className="op-right">
      <Image
        src={item.image}
        alt={item.title}
        width={698}
        height={544}
        className="op-img"
      />
      <div className="op-fade" />
    </div>
  );
}

export default function OurProcess() {
  return (
    <section className="op-sec">
      <div className="container">
        <h2 className="op-title uppercase center">
          OUR PROCESS FROM IDEA TO SCALE
        </h2>

        <div className="op-swiper-wrap">
          <Swiper
            modules={[Autoplay]} // ✅ add
            slidesPerView={1}
            spaceBetween={0}
            loop={true} // ✅ loop on
            autoplay={{
              delay: 2500, // ✅ speed
              disableOnInteraction: false, // ✅ click করলে autoplay বন্ধ হবে না
              pauseOnMouseEnter: true, // ✅ hover করলে pause (optional)
            }}
            className="op-swiper"
          >
            {processSlides.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className={`op-box ${idx % 2 ? "op-box-reverse" : ""}`}>
                  <LeftText item={item} idx={idx} />
                  <RightImage item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

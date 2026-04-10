import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import FAQ from "../../components/FAQ/FAQ";
import SubHero from "../../components/SubHero/SubHero";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import RecentWork from "../../components/RecentWork/RecentWork";
import ContactSec from "../../components/ContactSec/ContactSec";
import ServiceCtaSec from "../../components/ServiceCtaSec/ServiceCtaSec";
import WhyChooseSec from "../../components/WhyChooseSec/WhyChooseSec";
import BrandLogoSec from "../../components/BrandLogoSec/BrandLogoSec";

import Image from "next/image";
import Link from "next/link";

import "../OurServices.css";

export default function page() {
  return (
    <>
      <Header2 />

      <section className="service-hero-sec">
        <div
          className="service-hero-image"
          style={{ backgroundImage: `url(/assets/work2.jpg)` }}
        >
          <div className="service-hero-content">
            <div className="container">
              <h1 className="title3 uppercase">marketing</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="service-intro-sec">
        <div className="container">
          <div className="title-wrap">
            <p className="text4">{`Sick of a good-looking site that doesn't perform?`}</p>
            <p className="text4">
              We design smarter — more traffic, better engagement, higher
              conversions.
            </p>
          </div>
        </div>
      </section>

      <section className="service-design-sec">
        <div className="container">
          <div className="design-wrap">
            <div className="box">
              <Image
                src="/assets/sar-icon-1.png"
                alt="Service Design"
                width={50}
                height={50}
              />

              <h4 className="gradient-text uppercase">UX/UI Web Design</h4>
              <p>{`Design that doesn't just look good — it guides users, converts visitors, and builds trust.`}</p>

              <ul>
                <li>User Research</li>
                <li>Wireframes & Prototypes</li>
                <li>Responsive Design</li>
                <li>Conversion-Focused Layouts</li>
                <li>Accessibility & Usability</li>
              </ul>
            </div>
            <div className="box">
              <Image
                src="/assets/sar-icon-2.png"
                alt="Service Design"
                width={50}
                height={50}
              />

              <h4 className="gradient-text uppercase">Website Development</h4>
              <p>{`Fast, secure, SEO-ready builds that scale — WordPress, Laravel, React, Shopify integrations.`}</p>

              <ul>
                <li>Frontend & Backend</li>
                <li>Custom Web Apps</li>
                <li>CMS & API Integrations</li>
                <li>Page Speed & Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-process-sec">
        <div className="container">
          <h2 className="uppercase center">Our Process</h2>

          <div className="process-wrap">
            <div className="box">
              <Image
                src="/assets/sar-icon-1.png"
                alt="Service Design"
                width={50}
                height={50}
              />

              <h4 className="gradient-text uppercase text2">
                Market Study & Discovery
              </h4>
              <p>{`Deep dive into your audience and competitors to uncover opportunities`}</p>
            </div>

            <div className="box">
              <Image
                src="/assets/sar-icon-1.png"
                alt="Service Design"
                width={50}
                height={50}
              />

              <h4 className="gradient-text uppercase text2">
                UX/UI Strategy & Design
              </h4>
              <p>{`Create user-centered designs that drive engagement and conversions`}</p>
            </div>

            <div className="box">
              <Image
                src="/assets/sar-icon-1.png"
                alt="Service Design"
                width={50}
                height={50}
              />

              <h4 className="gradient-text uppercase text2">
                Development & Implementation
              </h4>
              <p>{`Build fast, secure, and scalable solutions that perform flawlessly`}</p>
            </div>
          </div>
        </div>
      </section>

      <BrandLogoSec />

      <RecentWork />

      <WhyChooseSec />

      <SuccessStories />

      <FAQ />

      <ContactSec />

      <ServiceCtaSec />

      <Footer />
    </>
  );
}

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
              <h1 className="title3 uppercase">Website Design</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="text4">{`Sick of a good-looking site that doesn't perform?`}</p>
        <p className="text4">
          We design smarter — more traffic, better engagement, higher
          conversions.
        </p>
      </section>

      <section className="brand-logo-sec">
        <div className="container">
          <h2 className="uppercase center">Technologies We Master</h2>

          <div className="brand-logos-wrap">
            <div className="box">
              <Image
                src="/assets/brand-1.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>
            <div className="box">
              <Image
                src="/assets/brand-2.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-3.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-4.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-5.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-6.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-7.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-8.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-9.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-10.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-11.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>

            <div className="box">
              <Image
                src="/assets/brand-12.png"
                alt="Tech 1"
                width={85}
                height={45}
              />
            </div>
          </div>
        </div>
      </section>

      <RecentWork />

      <section className="why-choose-sec">
        <div className="container">
          <h2 className="uppercase center">Why Choose Us</h2>

          <div className="wrap">
            <div className="box">
              <div className="text-wrap">
                <h4 className="uppercase">Agile Development</h4>
                <p>Fast, flexible, and focused on you</p>
              </div>

              <Image
                src="/assets/why-bg-1.png"
                alt="Agile Development"
                width={120}
                height={120}
              />
            </div>

            <div className="box">
              <div className="text-wrap">
                <h4 className="uppercase">MVP-First Strategy</h4>
                <p>Build the core, learn from users</p>
              </div>
              <Image
                src="/assets/why-bg-2.png"
                alt="Agile Development"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </section>

      <SuccessStories />

      <FAQ />
      <ContactSec />

      <section className="service-cta-sec">
        <div className="container">
          <div className="title-wrap">
            <h2 className="uppercase center">From Idea to Startups</h2>
            <p className="center text4">
              We partner with Individuals, startups, SMEs, Clients to transform
              ideas into powerful digital products
            </p>
          </div>
          <div className="btn-group">
            <div className="btn">
              <Link href="/contact" className="flex items-center gap-2">
                <span>Discover more</span>
                <BsArrowRight />
              </Link>
            </div>
            <div className="btn border">
              <Link href="/contact" className="flex items-center gap-2">
                <span>View Our Portfolio</span>
                <BsArrowRight />
              </Link>
            </div>
          </div>{" "}
        </div>
      </section>

      <Footer />
    </>
  );
}

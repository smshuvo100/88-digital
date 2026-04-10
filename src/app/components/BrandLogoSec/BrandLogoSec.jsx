import React from "react";
import Image from "next/image";
import "./BrandLogoSec.css";

export default function BrandLogoSec() {
  return (
    <>
      {" "}
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
    </>
  );
}

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import "./ServiceCtaSec.css";

export default function ServiceCtaSec() {
  return (
    <>
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
          </div>
        </div>
      </section>
    </>
  );
}

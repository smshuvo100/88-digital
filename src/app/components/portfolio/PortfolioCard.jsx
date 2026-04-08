"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function PortfolioCard({ portfolio }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link href={`/portfolio/${portfolio.slug}`} className="portfolio-card">
        <div className="card-wrapper">
          <div className="card-image">
            <Image
              src={portfolio.featureImage}
              alt={portfolio.title}
              width={800}
              height={500}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </div>

          <div className="card-content">
            <div className="portfolio-title-row">
              <h2 className="card-title">{portfolio.title}</h2>
              <span className="portfolio-year">{portfolio.year}</span>
            </div>

            <div className="portfolio-tags">
              {portfolio.tags?.map((tag, index) => (
                <span key={index} className="card-category">
                  {tag}
                </span>
              ))}
            </div>

            <div className="card-meta portfolio-card-meta">
              <div className="portfolio-sales">
                <span className="sales-label">Sales Revenue</span>
                {/* ডাটাবেজ থেকে আসা salesRevenue ব্যবহার করা হয়েছে */}
                <h3>{portfolio.salesRevenue}%</h3>
              </div>

              <div className="btn-wrap">
                <span className="read-more">
                  <BsArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

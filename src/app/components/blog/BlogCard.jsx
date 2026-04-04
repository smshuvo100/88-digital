"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
export default function BlogCard({ blog }) {
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
      <Link href={`/blog/${blog.slug}`} className="blog-card">
        <div className="card-wrapper">
          <div className="card-image">
            <Image
              src={blog.featureImage}
              alt={blog.title}
              width={800}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <span className="card-category">{blog.category}</span>
            <h2 className="card-title">{blog.title}</h2>
            <div className="card-meta">
              <div className="mata-wrap">
                <span>
                  <FaCalendar className="meta-icon" size={12} />
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                {/* <span>
                  <FaClock className="meta-icon" size={12} />
                  {blog.time}
                </span> */}
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

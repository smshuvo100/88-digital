// src/app/blog/[slug]/page.js
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import { blogsData } from "../../../data/blogs";
import { FaCalendar, FaClock } from "react-icons/fa";
import Image from "next/image";
import "./../Blog.css";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params.slug;
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const blog = blogsData.blogs.find((b) => b.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Simple animation variants - all elements animate on page load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  if (!blog) {
    return (
      <>
        <Header2 />
        <div className="single-blog-container">
          <div className="single-blog-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="no-results"
            >
              <h2>Blog post not found</h2>
              <p>The article you&apos;re looking for doesn&apos;t exist.</p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header2 />
      <div className="container">
        <div className="single-blog-wrapper">
          <motion.article
            variants={containerVariants}
            initial="hidden"
            animate={!isLoading && isVisible ? "visible" : "hidden"}
            className="blog-article"
          >
            <div className="article-content">
              {/* Category */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <span className="article-category">{blog.category}</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={slideUpVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.05 }}
                className="article-title"
              >
                {blog.title}
              </motion.h2>

              {/* Date and Time */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
                className="article-meta"
              >
                <div className="article-meta-item">
                  <FaCalendar className="meta-icon" />
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="article-meta-item">
                  <FaClock className="meta-icon" />
                  <span>{blog.time}</span>
                </div>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                variants={scaleVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.15 }}
                className="article-image"
              >
                <Image
                  src={blog.featureImage}
                  alt={blog.title}
                  width={900}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                  priority={true}
                  className="featured-image"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                className="blog-content"
              >
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </motion.div>
            </div>
          </motion.article>
        </div>
      </div>
      <Footer />
    </>
  );
}

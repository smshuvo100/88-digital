"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="category-tabs"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          variants={buttonVariants}
          onClick={() => onCategoryChange(category)}
          className={`category-btn ${
            selectedCategory === category ? "category-btn-active" : ""
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}

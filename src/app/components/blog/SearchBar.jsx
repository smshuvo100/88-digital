"use client";

import { FaSearch } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  const searchRef = useRef(null);
  const isInView = useInView(searchRef, { once: true, amount: 0.2 });

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={searchRef}
      className="search-container"
      variants={searchVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by title or category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => onSearchChange("")}
            className="search-clear"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

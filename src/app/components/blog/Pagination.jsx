// src/app/components/blog/Pagination.jsx
"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const paginationRef = useRef(null);
  const isInView = useInView(paginationRef, { once: true, amount: 0.2 });

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (totalPages <= 1) return null;

  return (
    <motion.div
      ref={paginationRef}
      className="pagination"
      variants={paginationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        <FaChevronLeft />
      </motion.button>

      {getPageNumbers().map((page, index) => (
        <motion.button
          key={index}
          whileHover={typeof page === "number" ? { scale: 1.05, y: -2 } : {}}
          whileTap={typeof page === "number" ? { scale: 0.95 } : {}}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`pagination-number ${
            currentPage === page ? "pagination-number-active" : ""
          }`}
          disabled={typeof page !== "number"}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        <FaChevronRight />
      </motion.button>
    </motion.div>
  );
}

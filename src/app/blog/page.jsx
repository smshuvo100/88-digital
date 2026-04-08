// src/app/blog/page.jsx
"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import BlogCard from "../components/blog/BlogCard";
import SearchBar from "../components/blog/SearchBar";
import CategoryTabs from "../components/blog/CategoryTabs";
import Pagination from "../components/blog/Pagination";
import { blogsData } from "../../data/blogs";
import "./Blog.css";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allBlogs = blogsData.blogs;

  const categories = ["All", ...new Set(allBlogs.map((blog) => blog.category))];

  // Fixed filtering logic - no setState inside
  const filteredBlogs = useMemo(() => {
    let filtered = allBlogs;

    // Apply search filter if search term exists
    if (searchTerm) {
      filtered = allBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else {
      // Only apply category filter when not searching
      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (blog) => blog.category === selectedCategory,
        );
      }
    }

    return filtered;
  }, [searchTerm, selectedCategory, allBlogs]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Handle category change - clears search and resets page
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (searchTerm) {
      setSearchTerm(""); // Clear search when changing category
    }
    setCurrentPage(1);
  };

  // Handle search - resets category to All and resets page
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term && selectedCategory !== "All") {
      setSelectedCategory("All"); // Reset to All when searching
    }
    setCurrentPage(1);
  };

  // Scroll-triggered animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  // Refs for scroll animation triggers
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const categoryRef = useRef(null);
  const gridRef = useRef(null);
  const paginationRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const searchInView = useInView(searchRef, { once: true, amount: 0.2 });
  const categoryInView = useInView(categoryRef, { once: true, amount: 0.2 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const paginationInView = useInView(paginationRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <>
      <Header2 />
      <div className="container">
        <div className="blog-container">
          {/* Header with scroll animation */}
          <motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="blog-header"
          >
            <h2 className="uppercase">
              Our <span className="gradient-text">Stories</span>
            </h2>
            <p>Founder guides: validate ideas, design UX, launch MVPs.</p>
          </motion.div>

          {/* Search with scroll animation */}
          <motion.div
            ref={searchRef}
            variants={searchVariants}
            initial="hidden"
            animate={searchInView ? "visible" : "hidden"}
          >
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
          </motion.div>

          {/* Category Tabs with scroll animation */}
          <motion.div
            ref={categoryRef}
            variants={categoryVariants}
            initial="hidden"
            animate={categoryInView ? "visible" : "hidden"}
          >
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {currentBlogs.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="no-results"
              >
                <p>No blogs found matching your criteria.</p>
                <p>Try adjusting your search or category filter.</p>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                ref={gridRef}
                variants={gridContainerVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
              >
                <div className="blog-grid">
                  {currentBlogs.map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      variants={cardVariants}
                      custom={index}
                    >
                      <BlogCard blog={blog} />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  ref={paginationRef}
                  variants={paginationVariants}
                  initial="hidden"
                  animate={paginationInView ? "visible" : "hidden"}
                >
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}

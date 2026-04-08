"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import CategoryTabs from "../components/portfolio/CategoryTabs";
import Pagination from "../components/portfolio/Pagination";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import { portfolioData } from "../../data/portfolio";
import "./Portfolio.css";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allPortfolio = useMemo(() => {
    return portfolioData?.portfolios || [];
  }, []);

  const categories = useMemo(() => {
    const allTags = allPortfolio.flatMap((item) => item.tags || []);
    return ["All", ...new Set(allTags)];
  }, [allPortfolio]);

  const filteredPortfolio = useMemo(() => {
    if (selectedCategory === "All") return allPortfolio;

    return allPortfolio.filter((item) =>
      (item.tags || []).includes(selectedCategory),
    );
  }, [selectedCategory, allPortfolio]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPortfolio.length / itemsPerPage),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const currentPortfolio = filteredPortfolio.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    const safePage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(safePage);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  const headerRef = useRef(null);
  const categoryRef = useRef(null);
  const gridRef = useRef(null);
  const paginationRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
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
        <div className="portfolio-container">
          <motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="portfolio-header"
          >
            <h2 className="uppercase">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p>Explore our portfolio of innovative solutions and designs.</p>
          </motion.div>

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
            {currentPortfolio.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="no-results"
              >
                <p>No portfolio items found.</p>
              </motion.div>
            ) : (
              <motion.div
                key={`${selectedCategory}-${safeCurrentPage}`}
                ref={gridRef}
                variants={gridContainerVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "visible"}
              >
                <div className="portfolio-grid">
                  {currentPortfolio.map((portfolio, index) => (
                    <motion.div
                      key={portfolio.id}
                      variants={cardVariants}
                      custom={index}
                    >
                      <PortfolioCard portfolio={portfolio} />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  ref={paginationRef}
                  variants={paginationVariants}
                  initial="hidden"
                  animate={paginationInView ? "visible" : "visible"}
                >
                  <Pagination
                    currentPage={safeCurrentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
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

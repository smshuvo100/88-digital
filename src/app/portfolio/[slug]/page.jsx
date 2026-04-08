"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import { portfolioData } from "../../../data/portfolio";
import Image from "next/image";
import "./../Portfolio.css";

export default function SinglePortfolioPage() {
  const params = useParams();
  const slug = params.slug;
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const portfolio = portfolioData.portfolios.find((item) => item.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  if (!portfolio) {
    return (
      <>
        <Header2 />
        <div className="single-portfolio-container">
          <div className="single-portfolio-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="no-results"
            >
              <h2>Portfolio not found</h2>
              <p>The project you&apos;re looking for doesn&apos;t exist.</p>
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

      <div className="single-portfolio-page">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={!isLoading && isVisible ? "visible" : "hidden"}
          className="portfolio-hero"
        >
          {/* <div className="portfolio-hero-image">
            <Image
              src={portfolio.featureImage}
              alt={portfolio.title}
              width={1600}
              height={850}
              priority
            />
          </div> */}

          <div
            className="portfolio-hero-image"
            style={{ backgroundImage: `url(${portfolio.featureImage})` }}
          >
            <div className="portfolio-hero-content">
              <div className="container">
                <motion.h1
                  variants={slideUpVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="title3"
                >
                  {portfolio.title}
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="portfolio-project-meta">
          <div className="container">
            <div className="project-meta-card">
              <div className="project-meta-top">
                <div>
                  <h4>About this project</h4>
                  <div className="portfolio-tags">
                    {portfolio.tags?.map((tag, index) => (
                      <span key={index} className="card-category">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="project-year">{portfolio.year}</span>
              </div>

              <div className="project-meta-grid">
                <div>
                  <span>Client:</span>
                  <strong>{portfolio.client}</strong>
                </div>
                <div>
                  <span>Industry:</span>
                  <strong>{portfolio.industry}</strong>
                </div>
                <div>
                  <span>Scope:</span>
                  <strong>{portfolio.scope}</strong>
                </div>
                <div>
                  <span>Timeline:</span>
                  <strong>{portfolio.timeline}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="container">
            <div className="portfolio-content-wrap">
              <div className="portfolio-text-block">
                <h4>About this project</h4>
                <p>{portfolio.shortDescription}</p>
              </div>

              <div className="portfolio-text-block">
                <h4>Problem & Goals</h4>
                <p>
                  <strong>Problem Statement:</strong> {portfolio.problem}
                </p>

                <div className="portfolio-list-block">
                  <strong>Goals:</strong>
                  <ul>
                    {portfolio.goals?.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="portfolio-process-section">
                <h2 className="center">Our Process</h2>
                <div className="process-grid">
                  {portfolio.process?.map((step, index) => (
                    <div key={index} className="process-card">
                      <h3 className="process-title">{step.title}</h3>
                      <ul>
                        {step.points?.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="portfolio-text-block">
                <h4>Solutions & Features Delivered</h4>
                <ul>
                  {portfolio.solutions?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-text-block">
                <h4>Results / Outcomes</h4>
                <ul>
                  {portfolio.results?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-text-block">
                <h4>Visual Showcase</h4>
                <ul>
                  {portfolio.visualShowcase?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-cta-strip">
          <div className="container">
            <div className="portfolio-cta-box">
              <h2 className="uppercase">Want results like this?</h2>
              <p>
                We partner with individuals, startups, SMEs, and clients to
                transform ideas into powerful digital products.
              </p>
              <div className="btn">
                <a href="/contact-us" className="portfolio-cta-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

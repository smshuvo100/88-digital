"use client";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./ContactSec.css";

export default function ContactSec() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
  };

  return (
    <section className="contact-sec">
      <div className="container">
        <h2 className="uppercase">Get Your Free Consultation</h2>

        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div
              className={`form-group ${touched.name || formData.name ? "float-up" : ""}`}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" "
                required
              />
              <label>
                Name <span>*</span>
              </label>
            </div>

            <div
              className={`form-group ${touched.email || formData.email ? "float-up" : ""}`}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" "
                required
              />
              <label>
                Email Address <span>*</span>
              </label>
            </div>

            <div
              className={`form-group ${touched.phone || formData.phone ? "float-up" : ""}`}
            >
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" "
              />
              <label>Phone/Whatsapp</label>
            </div>

            <div
              className={`form-group ${touched.message || formData.message ? "float-up" : ""}`}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" "
              />
              <label>Message</label>
            </div>

            {/* Button */}
            <div className="btn">
              <button type="submit">
                <span>SUBMIT</span>
                <BsArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

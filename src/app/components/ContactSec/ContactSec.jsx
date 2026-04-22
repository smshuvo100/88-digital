"use client";

import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import SuccessPopup from "../Popup/SuccessPopup";
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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "",
        });

        setShowPopup(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTouched({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-sec">
        <div className="container">
          <h2 className="uppercase">Get Your Free Consultation</h2>

          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <div
                className={`form-group ${
                  touched.name || formData.name ? "float-up" : ""
                }`}
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
                className={`form-group ${
                  touched.email || formData.email ? "float-up" : ""
                }`}
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
                className={`form-group ${
                  touched.phone || formData.phone ? "float-up" : ""
                }`}
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
                className={`form-group ${
                  touched.message || formData.message ? "float-up" : ""
                }`}
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

              <div className="btn">
                <button type="submit" disabled={loading}>
                  <span>{loading ? "SENDING..." : "SUBMIT"}</span>
                  <BsArrowRight />
                </button>
              </div>

              {status.message && (
                <p
                  style={{
                    marginTop: "15px",
                    color: status.type === "success" ? "green" : "red",
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <SuccessPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}

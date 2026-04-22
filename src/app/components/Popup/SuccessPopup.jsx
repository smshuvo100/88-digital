"use client";

import React from "react";
import "./SuccessPopup.css";
import { BsCheckLg } from "react-icons/bs";

export default function SuccessPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Icon */}
        <div className="icon-wrapper">
          <div className="icon-wrapper2">
            <div className="icon-circle">
              <BsCheckLg />
            </div>
          </div>
        </div>

        {/* Content */}
        <h2>SUCCESS!</h2>
        <p>
          {`We got your message! We'll reach out soon to chat about what you need.`}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./ContactSec.css";

export default function ContactSec() {
  return (
    <>
      <section className="contact-sec">
        <div className="container">
          <h2 className="uppercase">Get Your Free Consultation</h2>

          <div className="form-box">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name *" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Phone/Whatsapp" />
              </div>

              <div className="form-group">
                <textarea placeholder="Message"></textarea>
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
    </>
  );
}

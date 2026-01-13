import "./Quote.css";
import { BsArrowRight } from "react-icons/bs";

export default function Quote() {
  return (
    <section className="quote-sec">
      <div className="container">
        <p className="text1 gradient-text italic">
          &ldquo;We help aspiring entrepreneurs turn their ideas into successful
          Business&rdquo;
        </p>

        <div className="btn">
          <a href="/about">
            <span>More About Us</span>
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

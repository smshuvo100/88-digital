import Image from "next/image";
import "./Brands.css";

export default function Brands() {
  // আপনার ৩টা logo
  const logos = [
    { src: "/assets/brand1.png", alt: "Brand 1" },
    { src: "/assets/brand2.png", alt: "Brand 2" },
    { src: "/assets/brand3.png", alt: "Brand 3" },
  ];

  // ৮টা দেখাতে + smooth loop করতে আমরা list repeat করে দুইটা track বানাব
  // Track-1 এবং Track-2 একই হবে, একটার পরে আরেকটা চলবে
  const track = Array.from({ length: 12 }, (_, i) => logos[i % logos.length]);

  return (
    <section className="brands-sec">
      <div className="brands-wrap">
        <p className="text3">We worked with powerful brands</p>

        <div className="brands-marquee" aria-label="Brands marquee">
          <div className="brands-track">
            {track.map((logo, idx) => (
              <div className="brand-item" key={`t1-${idx}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={46}
                  className="brand-img"
                />
              </div>
            ))}

            {/* duplicate track for seamless loop */}
            {track.map((logo, idx) => (
              <div className="brand-item" key={`t2-${idx}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={46}
                  className="brand-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image
            src="/bw.webp"
            alt="La Palma Padel Club Logo"
            width={140}
            height={140}
            quality={90}
            priority={false}
            className="footer-logo mb-4"
          />

          <p className="tagline">Where energy meets elegance.</p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>Club</h3>
            <ul>
              <li>
                <a href="#courts-section">Courts</a>
              </li>
              <li>
                <a
                  href="https://wa.me/6287788832383"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6287788832383"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6287788832383"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coaching
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#about-section">About Us</a>
              </li>
              <li>
                <a
                  href="https://ayo.co.id/v/lapalma-padel-club-bsd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bookings
                </a>
              </li>
              <li>
                <a href="#facilities-section">Facilities</a>
              </li>
              <li>
                <a href="#proshop-section">Pro Shop</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  href="https://wa.me/6287788832383"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lapalma.padel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:lapalmapadelbsd@gmail.com">Email</a>
              </li>
              <li>
                <a
                  href="https://share.google/XYpNfV69JtsCjjJR5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PT Lapalma Sehat Sejahtera. All Rights Reserved.
        </p>
        <p className="powered">
          Crafted with passion — powered by{" "}
          <span className="text-[#d7f04bde]">Matrix™</span>
        </p>
      </div>

      <p className="built-by">© Built by Michael Florentio</p>
    </footer>
  );
}

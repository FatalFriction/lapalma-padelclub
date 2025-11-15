"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      if (window.innerWidth > 640) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, offsetY: 70 },
      ease: "power3.inOut",
    });

    if (open) toggleMenu();
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);

    if (!mobileMenuRef.current) return;

    if (!open) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div
      id="nav"
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        backdrop-blur-xl bg-black/30
        border-b border-white/10
      "
    >
      {isMobile ? (
        <>
          <img src="/logo.png" alt="logo" />

          <button className="hamburger-btn mr-4" onClick={toggleMenu}>
            <div className={`line ${open ? "line1-open" : ""}`} />
            <div className={`line ${open ? "line2-open" : ""}`} />
            <div className={`line ${open ? "line3-open" : ""}`} />
          </button>

          <div ref={mobileMenuRef} id="mobile-menu" className="mobile-menu">
            <button onClick={() => scrollToSection("main")}>Club</button>
            <button onClick={() => scrollToSection("courts-section")}>Courts</button>
            <button onClick={() => scrollToSection("slider-section")}>Gallery</button>
            <button onClick={() => scrollToSection("outro-wrapper")}>Rules</button>
          </div>
        </>
      ) : (
        <>
          <div id="nav-left">
            <img src="/logo.png" alt="logo" />
            <button className="nav-link" onClick={() => scrollToSection("main")}>
              <a>Club</a>
            </button>
            <button className="nav-link" onClick={() => scrollToSection("courts-section")}>
              <a>Courts</a>
            </button>
          </div>

          <div id="nav-right">
            <button className="nav-link" onClick={() => scrollToSection("slider-section")}>
              <a>Gallery</a>
            </button>
            <button className="nav-link" onClick={() => scrollToSection("outro-wrapper")}>
              <a>Rules</a>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: target,
        offsetY: 70,
      },
      ease: "power3.inOut",
    });
  };
  
  return (
    <div id="nav" className="
        fixed top-0 left-0 w-full z-99
        flex justify-between items-center
        backdrop-blur-xl bg-black/30
        border-b border-white/10
      ">
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
  </div>
  );
}

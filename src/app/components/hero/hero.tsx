"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Shery from "sheryjs";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Shery.imageEffect("#back", {
      style: 5,
      config: { 
        a: { value: 2 },
        b: { value: -0.97 },
        zindex: { value: -9996999 },
        aspect: { value: 2 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
      },
      gooey: true,
    });

    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray<HTMLDivElement>(".elem");

      const groups = elems.map((elem) => {
        const h1s = Array.from(elem.querySelectorAll("h1"));
        return { h1s, index: 0, animating: false };
      });

      const main = document.querySelector("#main");
      if (!main) return;

      main.addEventListener("mouseenter", () => {
        groups.forEach((group) => {
          if (group.animating) return;
          group.animating = true;

          const { h1s, index } = group;

          gsap.to(h1s[index], {
            top: "-=100%",
            ease: "expo.inOut",
            duration: 1,
            onComplete: () => {
              gsap.set(h1s[index], { top: "100%" });
              group.animating = false;
            },
          });

          group.index = (index + 1) % h1s.length;

          gsap.to(h1s[group.index], {
            top: "-=100%",
            ease: "expo.inOut",
            duration: 1,
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="hero">
      <div id="heroleft" ref={heroRef}>
        <div className="elem">
          <h1>David Lie</h1>
          <h1>Brandon Kent</h1>
          <h1>Agatha Marchella</h1>
        </div>

        <div className="elem">
          <h1>plays with flow</h1>
          <h1>moves with balance</h1>
          <h1>finds island calm</h1>
          <h1>swings with joy</h1>
          <h1>lives the padel rhythm</h1>
        </div>

        <div className="elem">
          <h1>Fun.</h1>
          <h1>Composed.</h1>
          <h1>Smoothing.</h1>
          <h1>Happiness.</h1>
          <h1>Cozy.</h1>
        </div>

        <button>Explore Now</button>
      </div>

      <div id="heroright">
        <p>
          "Where precision meets peace — a padel sanctuary crafted for players who appreciate calm, grace, and quiet excellence."
        </p>

        <div id="imagediv"></div>

        <p>
          "Our courts are designed to soothe your senses — soft lighting, gentle acoustics, and a space that elevates every rally into an experience.
        </p>

        <p>
          "Play without pressure, unwind with intention, and enjoy the gentle luxury of a club built to bring joy into every swing.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { slides as originalSlides } from "@/const/slides";
import "./ScrollSlider.css";
import Outro from "../outro/outro";

const ScrollSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides =
    originalSlides.length > 20
      ? [...originalSlides].sort(() => Math.random() - 0.5).slice(0, 10)
      : originalSlides;

  useEffect(() => {
    if (!sliderRef.current) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);
    
    const lenis = new Lenis({ smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const progressBar = sliderRef.current.querySelector(
      ".slider-progress"
    ) as HTMLElement;

    const sliderImages = sliderRef.current.querySelector(
      ".slider-images"
    ) as HTMLElement;

    const sliderTitle = sliderRef.current.querySelector(
      ".slider-title"
    ) as HTMLElement;

    const sliderIndices = sliderRef.current.querySelector(
      ".slider-indices"
    ) as HTMLElement;

    let activeSlide = 0;
    let currentSplit: any = null;

    const pinDistance = window.innerHeight * slides.length;

    function createIndices() {
      sliderIndices.innerHTML = "";

      slides.forEach((_, index) => {
        const indicatorElement = document.createElement("p");
        const indexNum = (index + 1).toString().padStart(2, "0");

        indicatorElement.dataset.index = index.toString();
        indicatorElement.innerHTML = `
          <span class="marker"></span>
          <span class="index">#${indexNum}</span>
        `;

        sliderIndices.appendChild(indicatorElement);

        const indexElement = indicatorElement.querySelector(
          ".index"
        ) as HTMLElement;

        gsap.set(indexElement, {
          opacity: index === 0 ? 1 : 0.35,
          scaleX: index === 0 ? 1 : 0,
        });
      });
    }

    function animateNewTitle(index: number) {
      if (currentSplit) currentSplit.revert();

      sliderTitle.innerHTML = `<h1>${slides[index].title}</h1>`;
      const titleContent = sliderTitle.querySelector("h1")!;

      currentSplit = new SplitText(titleContent, {
        type: "lines",
        linesClass: "lines",
        mask: "lines",
      });

      gsap.set(currentSplit.lines, {
        yPercent: 100,
        opacity: 0,
      });

      gsap.to(currentSplit.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
      });
    }

    function animateIndicators(index: number) {
      const indicators = sliderIndices.querySelectorAll("p");

      indicators.forEach((indicator, i) => {
        const markerElement = indicator.querySelector(".marker") as HTMLElement;
        const indexElement = indicator.querySelector(".index") as HTMLElement;

        if (i === index) {
          gsap.to(indexElement, { opacity: 1, scaleX: 1, duration: 0.3 });
          gsap.to(markerElement, { opacity: 1, scaleX: 1, duration: 0.3 });
        } else {
          gsap.to(indexElement, { opacity: 0.5, scaleX: 0, duration: 0.3 });
          gsap.to(markerElement, { opacity: 0, scaleX: 0, duration: 0.3 });
        }
      });
    }

    async function animateNewSlide(index: number) {
      const newImg = document.createElement("img");
      newImg.src = `${slides[index].image}?w=1600&q=85`;
      newImg.alt = `slide ${index + 1}`;

      gsap.set(newImg, { opacity: 0, scale: 1.1 });
      sliderImages.appendChild(newImg);

      gsap.to(newImg, { opacity: 1, duration: 0.5, ease: "power2.out" });
      gsap.to(newImg, { scale: 1, duration: 1, ease: "power2.out" });

      const allImages = Array.from(sliderImages.querySelectorAll("img"));

      if (allImages.length > 3) {
        const removeCount = allImages.length - 3;
        for (let i = 0; i < removeCount; i++) {
          const img = allImages[i];
          if (img && img.parentNode === sliderImages) {
            img.remove();
          }
        }
      }

      animateNewTitle(index);
      animateIndicators(index);
    }

    createIndices();
    animateNewSlide(0);

    ScrollTrigger.create({
      trigger: sliderRef.current,
      start: "top top",
      end: `+=${pinDistance}px`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        gsap.set(progressBar, { scaleY: self.progress });

        const currentSlide = Math.floor(self.progress * slides.length);

        if (activeSlide !== currentSlide && currentSlide < slides.length) {
          activeSlide = currentSlide;
          animateNewSlide(activeSlide);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div id="slider-section" ref={sliderRef} className="slider">
        <div className="slider-images" />
        <div className="slider-title" />
        <div className="slider-indicator">
          <div className="slider-indices" />
          <div className="slider-progress-bar">
            <div className="slider-progress" />
          </div>
        </div>
      </div>

      <Outro />
    </>
  );
};

export default ScrollSlider;

"use client";

import { useEffect, useState } from "react";
import { CourtCard } from "../card/card";
import CardSwap, { Card } from "@/components/CardSwap";
import Image from "next/image";
import './court.css'

export default function Courts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="courts" className="justify-center text-white">
      <div
        id="courts-section"
        className="
              relative
              flex w-full mx-auto px-8
              items-center
              justify-center
              h-[150vh]
              overflow-hidden
              max-lg:flex-col
              max-lg:py-24
              max-lg:gap-16
            "
                >
        <Image
          src="/courtyard.webp"
          alt="Courtyard background"
          fill
          priority
          quality={75}
          className="object-cover object-top -z-10"
        />
        <section
          className="
            headline-wrapper mx-auto 
            text-center flex flex-col items-center
          "
        >
          <h1
            id="court-h1"
            className="
        drop-shadow-[0_15px_45px_rgba(0,0,0,0.5)]
        text-[8rem]
        max-lg:text-[6rem]
        max-md:text-[4rem]
        max-sm:text-[3rem]
      "
          >
            Our Courts
          </h1>

          <p
            className="
        drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]
        text-[40px]
        max-lg:text-[32px]
        max-md:text-[26px]
        max-sm:text-[22px]
        leading-tight
      "
          >
            Designed for comfort,
            <br /> crafted for precision experience
            <br />
            <span
              className="
          high-wrapper
          text-[#d7f04bde]
          text-[155px]
          max-lg:text-[120px]
          max-md:text-[90px]
          max-sm:text-[70px]
        "
            >
              padel
            </span>
            <br />
            play in a space where
            <br /> luxury meets performance.
          </p>
        </section>

        {/* ---------- CARD SECTION ---------- */}
        <div
          className="
      relative
      max-lg:flex 
      max-lg:justify-center
      max-lg:px-6
    "
          style={{
            width: isMobile ? "125px" : "750px",
            height: isMobile ? "250px" : "",
          }}
        >
          <CardSwap
            cardDistance={isMobile ? 10 : 40}
            verticalDistance={isMobile ? 10 : 70}
            delay={4500}
            pauseOnHover={!isMobile}
            easing="elastic"
          >
            <Card>
              <CourtCard
                title="Indoor Premium Court"
                description="Climate-controlled for consistent play with premium turf and professional lighting."
                image="/court/img6.webp"
              />
            </Card>

            <Card>
              <CourtCard
                title="Golden Sunset Court"
                description="Play under the sky with golden-hour lighting for a calm, unforgettable padel experience."
                image="/court/img17.webp"
              />
            </Card>

            <Card>
              <CourtCard
                title="International Standard Court"
                description="Inspired by pro arenas — fast turf, premium nets, and stadium-style side lighting."
                image="/court/img19.webp"
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

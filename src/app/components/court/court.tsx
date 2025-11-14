"use client";

import { useEffect } from "react";
import { CourtCard } from "../card/card";
import CardSwap, { Card } from "@/components/CardSwap";

export default function Courts() {
  return (
    <section id="courts" className="justify-center text-white">
      <div id="courts-section" className="flex flex-row justify-center items-center w-full h-[150vh] mx-auto px-8 bg-[url('https://fatalfriction.github.io/lapalma-padelclub/courtyard.jpg')] bg-cover bg-top">
        
        <section className="headline-wrapper mx-auto">
          <div className="text-center flex flex-col items-center">
            <h1 id="court-h1" className="text-[8rem] drop-shadow-[0_15px_45px_rgba(0,0,0,0.5)] ">
              Our Courts
            </h1>

            <p className="text-[40px] mx-auto drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
              Designed for comfort, <br/> crafted for precision experience<br/> 
              <span className="high-wrapper text-[#d7f04bde] text-[155px]">padel</span> 
              
              <br/>
              play in a space where <br/> luxury meets performance.
            </p>
          </div>
        </section>


        <div style={{position: "relative", width: "750px"}}>
          <CardSwap
            cardDistance={40}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card>
              <CourtCard
                title=" Indoor Premium Court"
                description="Climate-controlled for consistent play with premium turf and
                  professional-grade lighting."
                image="https://fatalfriction.github.io/lapalma-padelclub/court/img6.jpg"
              />
            </Card>
            <Card>
              <CourtCard
                title="Golden Sunset Court"
                description="Play under the open sky with golden-hour lighting for a
                  calming, unforgettable padel experience."
                image="https://fatalfriction.github.io/lapalma-padelclub/court/img17.jpg"
              />
            </Card>
            <Card>
              <CourtCard
                title="International Standart Court"
                description="Inspired by pro arenas — fast turf, premium nets, and stadium-style side lighting."
                image="https://fatalfriction.github.io/lapalma-padelclub/court/img19.jpg"
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

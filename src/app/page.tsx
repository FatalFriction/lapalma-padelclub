"use client";

import "sheryjs/dist/Shery.css";
import Background from "./components/background/background"; 
import Courts from "./components/court/court";
import ScrollSlider from "./components/Scroll/scroll";
import dynamic from "next/dynamic";
import './components/page/page.css'

const Hero = dynamic(() => import("../../src/app/components/hero/hero"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <div id="main">
          <Background />

          <div id="top">
            <div id="workingarea">
              <Hero />
            </div>
          </div>
        </div>

        <div>
          <Courts/>
        </div>
      </div>
      <ScrollSlider/>
    </>
  );
}

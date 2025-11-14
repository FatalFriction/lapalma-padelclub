import "sheryjs/dist/Shery.css";
import Background from "./components/background/background"; 
import Hero from "./components/hero/hero";
import Courts from "./components/court/court";
import ScrollSlider from "./components/Scroll/scroll";

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

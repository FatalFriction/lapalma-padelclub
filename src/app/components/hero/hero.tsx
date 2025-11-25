import Image from "next/image";
import "./hero.css";

export default function Hero() {
  return (
    <div id="hero">
      <div id="heroleft">
        <div className="elem">
          <h1>Lapalma Padel Club</h1>
        </div>

        <div className="elem">
          <h1>AT BSD.</h1>
        </div>

          <div className="cta-wrapper">
            <a
            href="https://ayo.co.id/v/lapalma-padel-club-bsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Now
          </a>
          </div>
      </div>

      <div id="heroright">
        <p>
          "Where precision meets peace — a padel sanctuary crafted for players
          who appreciate calm, grace, and quiet excellence."
        </p>

        <div className="imagediv">
          <Image
            src="/img8.webp"
            alt="Lapalma Padel Club"
            priority
            width={200}
            height={200}
            className="hero-image bg-cover bg-center"
          />
        </div>

        <p>
          "Our courts are designed to soothe your senses — soft lighting, gentle
          acoustics, and a space that elevates every rally into an experience.
        </p>

        <p>
          "Play without pressure, unwind with intention, and enjoy the gentle
          luxury of a club built to bring joy into every swing.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import "../Scroll/ScrollSlider.css";
import {policies} from '../../../const/rules'

const Outro = () => {
  return (
    <div id="outro-wrapper" className="container outro-wrapper max-w-full py-24 flex flex-col items-center gap-10 relative text-white">
    <div className="absolute blur-[3px] inset-0 bg-[url('/court.jpg')] bg-cover bg-center -scale-x-100"/>

      <section className="outro">
        <h1 className="lg:text-6xl font-bold drop-shadow-xl ">
          New court, new vibes, same fun energy.<br />Let’s padel it up!
        </h1>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl">
        {policies.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="cards-container max-w-88 xl:max-w-full flex justify-center items-center bg-[#d7f04bde]/10 backdrop-blur-lg rounded-xl shadow-md gap-4 h-40 lg:h-32"
            >
              <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#d7f04bde] shrink-0 mx-auto" />

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-[#d7f04bde]">
                  {item.title}
                </h3>
                <p className="opacity-80 leading-relaxed text-[15px] lg:text-[17px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="map-wrapper w-full max-w-88 lg:max-w-6xl h-[420px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8383169395543!2d106.62301777499101!3d-6.284973493703953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fdaf69d4f773%3A0x1aca7d61f1e42a00!2sLaPalma%20Padel%20Club%20by%20Matrix!5e0!3m2!1sen!2sid!4v1763109820360!5m2!1sen!2sid"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Outro;

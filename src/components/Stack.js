import React, { useEffect } from "react";
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import "aos/dist/aos.css";

export default function Stack() {
  useEffect(() => {
    Aos.init({ duration: 2500, anchorPlacement: "top-top" });
  });
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-indigo-50 font-nunito flex-col"
      id="mywork"
    >
      <h1 className="text-5xl font-nunito font-bold mb-10">Web Stack I Use</h1>
      <div>
        <div className="flex flex-wrap  justify-center">
          {content.stack.tech.map((tech, index) => (
            <div
            data-aos={`${index % 2 !== 0 ? "fade-up-left" : "fade-up-right"}`}
          >
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
              }`}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-nunito ">
        {content.stack.desc}.
      </p>
    </div>
  );
}

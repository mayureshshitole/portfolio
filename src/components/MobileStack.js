import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";

const MobileStack = () => {
 
  return (
    <div
      className="min-h-screen p-5 flex items-center justify-center font-nunito flex-col"
      style={{
        background: "#eee",
      }}
    >
      <h1 className="text-5xl font-nunito font-bold mb-10">
        Mobile App Development
      </h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.mobile.tech.map((tech, index) => (
           
              <span
                key={index}
                className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-6 m-2 ${
                  index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
                }`}
              >
                <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
              </span>
          ))}
        </div>
      </div>
      <p className="mt-10 mb-10  max-w-6xl text-left inline-block text-xl md:text-2xl font-nunito  ">
        {content.mobile.desc}.
      </p>
    </div>
  );
};

export default MobileStack;

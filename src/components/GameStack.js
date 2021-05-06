import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";

const GameStack = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center font-nunito bg-indigo-50  flex-col ">
      <h1 className="text-5xl font-nunito font-bold mb-10">
        Game Dev and Designing
      </h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.game.tech.map((tech, index) => (
           
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
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-nunito ">
        {content.game.desc}.
      </p>
    </div>
  );
};

export default GameStack;

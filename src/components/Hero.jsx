import React from "react";
import Video from "../assets/video.mp4";
const Hero = () => {
  return (
    <div className="w-full h-[90vh]  top-[90px] ">
      <video
        src={Video}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover absolute -z-10"
      ></video>
      <div className="w-full h-[90%] flex flex-col justify-center items-center">
        <h1 className="text-white sm:text-4xl md:text-6xl ">Decentralized</h1>
        <h2 className="text-white sm:text-4xl md:text-4xl py-3 font-bold">
          <span className="text-sky-500 ">Trading</span> Protocol
        </h2>
        <p className="text-white text-2xl my-2 sm:px-4 px-8 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
          placeat!
        </p>
        <div>
        <button className="text-white font-bold my-4  ml-4">Use Defi</button>
        <button className="ml-3 text-white">FAQ</button>
      </div>
      </div>
      <div>
        <h2 className="text-center text-white text-3xl font-bold ">Total Volume Secured $42.525</h2>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import React from "react";

export default function MusicExperienceBanner() {
  return (
    <div className="mx-auto mt-16 mb-10 w-[90%] max-w-[1400px] border-[3px] border-none rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-gradient-to-r from-black via-gray-900 to-black p-12" style={{
        minHeight: "350px",
        background: "radial-gradient(circle, #222 75%, #000 100%)",
      }}>
        {}
        <div className="flex flex-col justify-center items-start max-w-[460px]">
          <span className="text-green-400 font-semibold text-lg mb-3">Categories</span>
          <h2 className="text-white text-4xl font-bold mb-5 leading-tight">
            Enhance Your<br />
            Music Experience
          </h2>
          {}
          <div className="flex items-center gap-5 mb-7">
            <div className="flex flex-col items-center">
              <span className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">23</span>
              <span className="text-white text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">05</span>
              <span className="text-white text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">59</span>
              <span className="text-white text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">35</span>
              <span className="text-white text-sm">Seconds</span>
            </div>
          </div>
          {}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md px-10 py-3 transition text-lg">
            Buy Now!
          </button>
        </div>
        {}
        <div className="flex-1 flex justify-end items-center">
          <img
            src="/speaker.png"
            alt="JBL Boombox"
            className="w-[480px] h-auto object-contain drop-shadow-lg mr-40"
            style={{
              filter: "drop-shadow(0 0 60px #222)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
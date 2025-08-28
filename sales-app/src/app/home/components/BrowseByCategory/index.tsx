"use client";

import React, { useState, useRef } from "react";

const categories = [
  {
    name: "Phones",
    icon: (
      
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" >
        <rect x="7" y="2" width="15" height="20" rx="2" stroke="#222" strokeWidth="2"/>
        <circle cx="12" cy="18" r="1" fill="#222"/>
      </svg>
    ),
  },
  {
    name: "Computers",
    icon: (
      
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="20" height="12" rx="2" stroke="#222" strokeWidth="2"/>
        <rect x="8" y="17" width="8" height="2" rx="1" stroke="#222" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "SmartWatch",
    icon: (
      
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="8" y="7" width="10" height="10" rx="2" stroke="#222" strokeWidth="2"/>
        <rect x="10" y="2" width="4" height="3" rx="1" stroke="#222" strokeWidth="2"/>
        <rect x="10" y="19" width="4" height="3" rx="1" stroke="#222" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Camera",
    icon: (
      
      <svg width="43" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="8" width="20" height="10" rx="3" stroke="#fff" strokeWidth="2"/>
        <circle cx="12" cy="13" r="3" stroke="#fff" strokeWidth="2"/>
        <rect x="8" y="5" width="8" height="3" rx="1.5" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "HeadPhones",
    icon: (
      
      <svg width="42" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M4 17v-3a8 8 0 0 1 16 0v3" stroke="#222" strokeWidth="2"/>
        <rect x="2" y="17" width="4" height="5" rx="2" stroke="#222" strokeWidth="2"/>
        <rect x="18" y="17" width="4" height="5" rx="2" stroke="#222" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Gaming",
    icon: (
      
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="10" width="14" height="7" rx="3.5" stroke="#222" strokeWidth="2"/>
        <circle cx="8" cy="13.5" r="1" fill="#222"/>
        <circle cx="16" cy="13.5" r="1" fill="#222"/>
        <rect x="10" y="13" width="4" height="1" rx="0.5" fill="#222"/>
      </svg>
    ),
  },
];

export default function BrowseByCategory() {
  const [activeIdx, setActiveIdx] = useState(3); 
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white pt-10 pb-8 px-0 rounded-lg">
      {}
      <div className="ml-20 mb-1 flex items-center gap-2">
        <span className="block w-3 h-7 bg-[#DB4444] rounded mr-2 ml-12"></span>
        <span className="text-[#DB4444] font-semibold text-lg">Categories</span>
      </div>
      <h2 className="ml-30 text-3xl font-bold mb-8 ">Browse By Category</h2>
      {}
      <div className="flex justify-end mr-20 mb-5 gap-4">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="white"/>
            <path d="M15 6l-6 6 6 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="white"/>
            <path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {}
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto pb-2 ml-35"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((cat, idx) => (
          <button
            key={cat.name}
            onClick={() => setActiveIdx(idx)}
            className={`flex flex-col items-center justify-center w-[200px] h-[170px] rounded-lg border-2
              transition cursor-pointer
              ${activeIdx === idx
                ? "bg-[#DB4444] border-[#DB4444] text-white"
                : "bg-white border-gray-300 text-black hover:border-[#DB4444]"}
            `}
          >
            <span className="mb-3">
              {activeIdx === idx && cat.name === "Camera"
                ? (
                  
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="8" width="18" height="10" rx="3" stroke="#fff" strokeWidth="2"/>
                    <circle cx="12" cy="13" r="3" stroke="#fff" strokeWidth="2"/>
                    <rect x="8" y="5" width="8" height="3" rx="1.5" stroke="#fff" strokeWidth="2"/>
                  </svg>
                )
                : cat.icon
              }
            </span>
            <span className={`font-medium text-base ${activeIdx === idx ? "text-white" : "text-black"}`}>{cat.name}</span>
          </button>
        ))}
      </div>
      {}
      <div className="w-full mt-8 border-b border-gray-200" />
    </div>
  );
}
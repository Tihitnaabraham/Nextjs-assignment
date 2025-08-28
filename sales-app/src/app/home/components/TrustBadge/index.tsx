"use client";

import React from "react";

const features = [
  {
    icon: (
      
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="13" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
        <rect x="15" y="10" width="7" height="5" rx="1" stroke="#fff" strokeWidth="2"/>
        <circle cx="7" cy="17" r="2" fill="#fff"/>
        <circle cx="18" cy="15" r="2" fill="#fff"/>
      </svg>
    ),
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: (
      
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M4 17v-3a8 8 0 0 1 16 0v3" stroke="#fff" strokeWidth="2"/>
        <rect x="2" y="17" width="4" height="5" rx="2" stroke="#fff" strokeWidth="2"/>
        <rect x="18" y="17" width="4" height="5" rx="2" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: (
      
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4v5c0 5-3.5 9.3-8 10-4.5-0.7-8-5-8-10V7l8-4z" stroke="#fff" strokeWidth="2"/>
        <path d="M9 13l2 2l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

export default function ServiceFeatures() {
  return (
    <div className="bg-white py-16 px-0 w-full flex justify-center items-center">
      <div className="flex flex-row gap-18 w-full max-w-4xl justify-center">
        {features.map((f, idx) => (
          <div key={f.title} className="flex flex-col items-center text-center w-[300px]">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center rounded-full bg-black w-[70px] h-[70px] shadow-lg border-4 border-gray-300">
                {f.icon}
              </span>
            </div>
            <div className="font-bold text-lg mb-2">{f.title}</div>
            <div className="text-gray-600 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
      {}
      <button
        className="fixed bottom-8 right-8 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#aaa" strokeWidth="2"/>
          <path d="M12 16V8M8 12l4-4 4 4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
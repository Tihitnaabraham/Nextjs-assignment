"use client";

import React from "react";

const items = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/Frame 684.png",
    button: "Shop Now",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "/woman.jpg",
    button: "Shop Now",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "/another-speakers.png",
    button: "Shop Now",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "/perfume.png",
    button: "Shop Now",
    colSpan: 1,
    rowSpan: 1,
  },
];

function getGridClasses(idx: number) {
  if (idx === 0) return "col-span-2 row-span-2";
  if (idx === 1) return "col-span-2 row-span-1";
  return "col-span-1 row-span-1";
}

export default function NewArrival() {
  return (
    <div className="bg-white pt-8 pb-12 px-0 rounded-lg">
      {}
      <div className="ml-16 mb-2 flex items-center gap-2">
        <span className="block w-3 h-7 bg-[#DB4444] rounded mr-2 ml-20"></span>
        <span className="text-[#DB4444] font-semibold text-lg">Featured</span>
      </div>
      <h2 className="ml-16 text-3xl font-bold mb-10 ml-33">New Arrival</h2>
      {}
      <div className="grid grid-cols-4 grid-rows-2 gap-8 mx-16">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className={`relative rounded-lg overflow-hidden shadow-lg flex ${getGridClasses(idx)}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
              style={{ filter: idx === 1 ? "brightness(0.7) grayscale(1)" : "brightness(0.85)" }}
            />
            {}
            <div className={`absolute left-0 bottom-0 w-full px-7 pb-7 text-left bg-gradient-to-t from-black/80 via-black/10 to-transparent ${idx === 0 ? "pt-6" : "pt-12"}`}>
              <div className="mb-2 text-white font-bold text-xl">{item.title}</div>
              <div className="mb-5 text-gray-200 text-sm">{item.description}</div>
              <button className="border-b border-white text-white text-base font-medium focus:outline-none hover:text-[#DB4444] hover:border-[#DB4444] transition">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ); 
}
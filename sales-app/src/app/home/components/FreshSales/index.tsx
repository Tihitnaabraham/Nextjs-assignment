"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    image: "/game.png",
    rating: 5,
    reviews: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    image: "/keyboard.jpg",
    rating: 4,
    reviews: 75,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    image: "/monitor.jpg",
    rating: 5,
    reviews: 99,
  },
  {
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    image: "/chair.png",
    rating: 4,
    reviews: 99,
  },
  {
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    image: "/chair.png",
    rating: 4,
    reviews: 99,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className="text-[#FFAD33] text-base">
      {"★".repeat(count)}
      <span className="text-gray-300">{Array(5 - count).fill("★").join("")}</span>
    </span>
  );
}

export default function FreshSales() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

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
      <div className="ml-20 mt-15 mb-1 flex items-center gap-2">
        <span className="block w-3 h-7 bg-[#DB4444] rounded mr-2 ml-10"></span>
        <span className="text-[#DB4444] font-semibold text-lg ">Today&apos;s</span>
      </div>
      {}
      <div className="flex items-center justify-between mb-6 ml-29 mr-20">
        {}
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold">Flash Sales</h2>
          {}
          <div className="flex gap-8 text-center">
            <div>
              <span className="font-bold text-2xl">03</span>
              <div className="text-xs mt-1">Days</div>
            </div>
            <div>
              <span className="font-bold text-2xl">23</span>
              <div className="text-xs mt-1">Hours</div>
            </div>
            <div>
              <span className="font-bold text-2xl">19</span>
              <div className="text-xs mt-1">Minutes</div>
            </div>
            <div>
              <span className="font-bold text-2xl">56</span>
              <div className="text-xs mt-1">Seconds</div>
            </div>
          </div>
        </div>
        {}
        <div className="flex gap-5" >
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition "
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
              <circle cx="12" cy="12" r="12" fill="white"/>
              <path d="M15 6l-6 6 6 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition "
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="white"/>
              <path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-2 ml-29 mt-5"
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((p, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-[270px] bg-[#FAFAFA] rounded-lg border border-gray-200 pt-4 px-2 pb-6 flex flex-col items-center ml-13 group cursor-pointer"
            onClick={() => setActiveIdx(idx)}
          >
            {}
            <span className="absolute left-5 top-5 bg-[#DB4444] text-white px-3 py-1 rounded text-xs font-semibold">
              {p.discount}
            </span>
            {}
            <button className="absolute right-5 top-5">
              <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 21s-6.7-5.3-8.5-8C2.1 11.2 2 8.5 4.2 6.7c2.3-1.9 5.4-1.1 6.8 1.1 1.4-2.2 4.6-3 6.8-1.1C22 8.5 21.9 11.2 20.5 13c-1.8 2.7-8.5 8-8.5 8z" />
              </svg>
            </button>
            {}
            <Image
              src={p.image}
              alt={p.name}
              className="w-[160px] h-[130px] object-contain mb-2 bg-white rounded"
            />
            {}
            <div className="font-semibold text-base text-center mb-2">{p.name}</div>
            {}
            <div className="mb-1 text-lg">
              <span className="text-[#DB4444] font-bold">{p.price}</span>
              <span className="text-gray-400 ml-2 line-through">{p.oldPrice}</span>
            </div>
            {}
            {activeIdx === idx && (
              <button className="bg-black w-full mt-3 text-white rounded py-3 font-semibold hover:bg-gray-800 transition mb-2">
                Add To Cart
              </button>
            )}
            {}
            <div className="my-1 text-base flex items-center gap-2">
              <StarRating count={p.rating} />
              <span className="text-gray-500 text-sm">({p.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      {}
      <div className="flex justify-center mt-10">
        <button className="bg-[#DB4444] text-white px-14 py-3 rounded font-semibold hover:bg-[#c52d2d] transition border border-[#DB4444] text-lg">
          View All Products
        </button>
      </div>
    </div>
  );
}
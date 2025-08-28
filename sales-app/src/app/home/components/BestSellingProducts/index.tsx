"use client";

import React from "react";

const products = [
  {
    name: "The north coat",
    price: "$260",
    oldPrice: "$360",
    image: "/coat.png",
    rating: 5,
    reviews: 65,
  },
  {
    name: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    image: "/gucci.jpg",
    rating: 5,
    reviews: 65,
  },
  {
    name: "RGB liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    image: "/cooler.png",
    rating: 5,
    reviews: 65,
    highlight: true,
  },
  {
    name: "Small BookSelf",
    price: "$360",
    oldPrice: "",
    image: "/shelf.png",
    rating: 5,
    reviews: 65,
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

export default function BestSellingProducts() {
  return (
    <div className="bg-white pt-10 pb-8 px-0 rounded-lg">
      {}
      <div className="ml-29 mb-1 flex items-center gap-2">
        <span className="block w-5 h-7 bg-[#DB4444] rounded mr-2"></span>
        <span className="text-[#DB4444] font-semibold text-lg">This Month</span>
      </div>
      {}
      <div className="flex items-center justify-between mr-20 ml-29 mb-8">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <button className="bg-[#DB4444] text-white px-10 py-3 rounded font-semibold hover:bg-[#c52d2d] transition text-lg mr-18">
          View All
        </button>
      </div>
      {}
      <div className="flex gap-16 ml-27">
        {products.map((p, idx) => (
          <div
            key={idx}
            className={`relative flex-shrink-0 rounded-lg pt-8 px-2 pb-6 flex flex-col items-center bg-[#FAFAFA] border border-gray-200 ${
              p.highlight
                ? "w-[400px] h-[420px]" 
                : "w-[340px] h-[360px]" 
            }`}
          >
            {}
            <button className="absolute right-7 top-7">
              <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 21s-6.7-5.3-8.5-8C2.1 11.2 2 8.5 4.2 6.7c2.3-1.9 5.4-1.1 6.8 1.1 1.4-2.2 4.6-3 6.8-1.1C22 8.5 21.9 11.2 20.5 13c-1.8 2.7-8.5 8-8.5 8z" />
              </svg>
            </button>
            <button className="absolute right-7 top-16">
              <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="#333" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="#333" strokeWidth="2"/>
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="#333" strokeWidth="0"/>
              </svg>
            </button>
            {}
            <img
              src={p.image}
              alt={p.name}
              className={`${p.highlight ? "w-[220px] h-[180px] mb-8" : "w-[180px] h-[150px] mb-6"} object-contain bg-white rounded`}
            />
            {}
            <div className="font-semibold text-base text-center mb-2">{p.name}</div>
            {}
            <div className="mb-1 text-lg">
              <span className="text-[#DB4444] font-bold">{p.price}</span>
              {p.oldPrice && (
                <span className="text-gray-400 ml-2 line-through">{p.oldPrice}</span>
              )}
            </div>
            {}
            <div className="my-1 text-base flex items-center gap-2">
              <StarRating count={p.rating} />
              <span className="text-gray-500 text-sm">({p.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
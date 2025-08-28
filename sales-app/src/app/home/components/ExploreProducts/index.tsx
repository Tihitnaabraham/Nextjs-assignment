"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

const products = [
  {
    name: "Breed Dry Dog Food",
    price: "$100",
    image: "/dogfood.png",
    rating: 3,
    reviews: 35,
    isNew: false,
    colors: [],
  },
  {
    name: "CANON EOS DSLR Camera",
    price: "$360",
    image: "/camera.jpg",
    rating: 5,
    reviews: 95,
    isNew: false,
    colors: [],
  },
  {
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    image: "/laptop.png",
    rating: 5,
    reviews: 325,
    isNew: false,
    colors: [],
  },
  {
    name: "Curology Product Set",
    price: "$500",
    image: "/products.jpg",
    rating: 4,
    reviews: 145,
    isNew: false,
    colors: [],
  },
  {
    name: "Kids Electric Car",
    price: "$960",
    image: "/car.jpg",
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["#D9D9D9", "#DB4444"],
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    image: "/soccer.jpg",
    rating: 4,
    reviews: 35,
    isNew: false,
    colors: ["#D9D9D9", "#DB4444"],
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    image: "/video-game.jpg",
    rating: 5,
    reviews: 55,
    isNew: true,
    colors: ["#D9D9D9", "#DB4444"],
  },
  {
    name: "Quilted Satin Jacket",
    price: "$660",
    image: "/jacket.png",
    rating: 5,
    reviews: 55,
    isNew: false,
    colors: ["#D9D9D9", "#DB4444"],
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

export default function ExploreProducts() {
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
    <div className="mx-auto mt-4 mb-10 bg-white pt-8 pb-8 rounded-lg flex flex-col items-center"
         style={{ width: "1550px", minHeight: "1200px" }}>
      {}
      <div className="w-full ml-10 mb-1 flex items-center gap-2">
        <span className="block w-3 h-7 bg-[#DB4444] rounded mr-2"></span>
        <span className="text-[#DB4444] font-semibold text-lg">Our Products</span>
      </div>
      {}
      <div className="w-full flex items-center justify-between mr-10 ml-10 mb-8">
        <h2 className="text-3xl font-bold">Explore Our Products</h2>
        <div className="flex gap-4">
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
      </div>
      {}
      <div
        ref={scrollRef}
        className="grid grid-cols-4 gap-x-16 gap-y-20 px-10"
        style={{ width: "100%", scrollBehavior: "smooth" }}
      >
        {products.map((p, idx) => (
          <div
            key={idx}
            className="relative bg-[#FAFAFA] rounded-lg pt-7 pb-6 px-3 flex flex-col items-center group shadow-md cursor-pointer"
            style={{
              minHeight: "375px",
              maxHeight: "400px",
              width: "370px",
              maxWidth: "390px",
            }}
            onClick={() => setActiveIdx(idx)}
          >
            {}
            {p.isNew && (
              <span className="absolute left-4 top-4 bg-green-500 text-white px-3 py-1 rounded text-xs font-bold">
                NEW
              </span>
            )}
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
              </svg>
            </button>
            {}
            <Image
              src={p.image}
              alt={p.name}
              className="w-[180px] h-[180px] object-contain mb-2 bg-white rounded"
              style={{ maxHeight: "180px", maxWidth: "200px" }}
            />
            {}
            <div className="font-semibold text-base text-center mb-2">{p.name}</div>
            {}
            <div className="mb-1 text-lg">
              <span className="text-[#DB4444] font-bold">{p.price}</span>
            </div>
            {}
            {activeIdx === idx && (
              <button className="bg-black w-full mt-3 text-white rounded py-2 font-semibold hover:bg-gray-800 transition mb-2"
                      style={{ maxWidth: "370px" }}>
                Add To Cart
              </button>
            )}
            {}
            <div className="my-1 text-base flex items-center gap-2 justify-center">
              <StarRating count={p.rating} />
              <span className="text-gray-500 text-sm">({p.reviews})</span>
            </div>
            {}
            <div className="flex gap-2 mt-2">
              {p.colors && p.colors.length > 0 && p.colors.map((c, i) => (
                <span key={i} className={`w-4 h-4 rounded-full border-2 border-white`} style={{ background: c }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {}
      <div className="flex justify-center mt-10">
        <button className="bg-[#DB4444] text-white px-16 py-3 rounded font-semibold hover:bg-[#c52d2d] transition border border-[#DB4444] text-lg">
          View All Products
        </button>
      </div>
    </div>
  );
}
import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: "0.9rem 0",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {}
        <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Exclusive</div>

        {}
        <div style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
          <a href="/home" style={{ color: "#222", textDecoration: "none" }}>
            Home
          </a>
          <a href="/contact" style={{ color: "#222", textDecoration: "none" }}>
            Contact
          </a>
          <a href="/about" style={{ color: "#222", textDecoration: "none" }}>
            About
          </a>
          <a
            href="/signup"
            style={{
              color: "#DB4444",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </a>
        </div>

        {}
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              padding: "0.7rem 2.5rem 0.5rem 0.75rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "250px",
              outline: "none",
            }}
          />
          {}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "16px",
              height: "16px",
              color: "#999",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
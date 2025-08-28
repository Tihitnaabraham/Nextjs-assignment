import React from "react";

export default function Header() {
  return (
    <header style={{
      background: "#222",
      color: "#fff",
      fontSize: "0.95rem",
      padding: "0.4rem 0"
    }}>
      <div style={{
        maxWidth: "1100px",
        marginLeft: "29%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        
      }}>
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%! <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>ShopNow</a>
        </span>
        <span>
          English <span style={{ fontSize: "0.8rem", marginLeft: "0.3rem" }}>▼</span>
        </span>
      </div>
    </header>
  );
}
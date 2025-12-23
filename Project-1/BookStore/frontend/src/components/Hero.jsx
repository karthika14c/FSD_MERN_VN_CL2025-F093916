import React from "react";

export default function Hero() {
  const scrollToBestSeller = () => {
    const section = document.getElementById("bestSellerSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "400px",
        background:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f') center/cover",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <h1>Welcome to StoryShelf</h1>
        <p>Where stories find a place.</p>

        <button
          className="btn btn-warning px-4 py-2 fw-bold"
          onClick={scrollToBestSeller}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

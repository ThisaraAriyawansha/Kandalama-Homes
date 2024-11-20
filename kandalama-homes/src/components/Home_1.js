import React from "react";

const KandalamaHomes = () => {
  return (
<div
  className="min-h-screen overflow-hidden text-white bg-white"
  style={{
    border: "4px solid white",  // Add a small white border
  }}
>      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen">
        {/* Background Image */}
        <img
  src="/images/Rectangle 1.png"
  alt="Kandalama Homes"
  style={{
    width: "100%",
    height: "100%",
  }}
/>


        {/* Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          style={{
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.63) 0%, rgba(84, 44, 1, 0.252) 100%)",
            borderRadius: "47px", // Optional: match the image border radius
          }}
        >
          {/* Description Text */}
          <p
            className="mx-auto text-lg font-light text-white md:text-xl"
            style={{
              width: "80%", // Set width to 80% for responsiveness
              maxWidth: "1086px", // Limit the max width
              marginTop: "20px",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            A construction site thumbnail could feature a busy worksite with cranes, workers in safety gear, and partially built structures. This is where dreams begin.
          </p>

          {/* Main Title */}
          <h1
            className="my-4 text-6xl font-bold tracking-wide text-white md:text-7xl"
            style={{
              fontFamily: "'Milonga', sans-serif",
              fontWeight: "400",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Add shadow for better text visibility
            }}
          >
            Kandalama
          </h1>

          {/* Subtitle */}
          <h2
            className="text-4xl font-light text-white md:text-5xl"
            style={{
              fontFamily: "'Megrim', sans-serif",
              fontSize: "128px",
              fontWeight: "500",
              lineHeight: "1.2",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Add shadow for better text visibility
              marginTop: "20px",
            }}
          >
            Homes
          </h2>
        </div>
      </section>
    </div>
  );
};

export default KandalamaHomes;

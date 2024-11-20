import React from "react";

const KandalamaHomes = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900">

{/* Hero Section */}
<section className="relative">
        {/* Background Image */}
        <img
          src="/images/Rectangle 1.png"
          alt="Kandalama Homes"
          className="object-cover w-full h-screen"
        />
        {/* Overlay */}
            <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.63) 0%, rgba(84, 44, 1, 0.252) 100%)",
            }}
            >         <p className="px-6 mb-4 text-sm text-center text-gray-300">
            A construction site thumbnail could feature a busy worksite with cranes, workers in safety gear, and partially built structures.
          </p>
          <h1 className="text-6xl font-bold tracking-wide">Kandalama</h1>
          <h2 className="mt-2 text-4xl font-light">Homes</h2>
        </div>
      </section>
    </div>
  );
};

export default KandalamaHomes;
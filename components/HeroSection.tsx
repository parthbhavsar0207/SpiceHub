import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-24 max-w-7xl mx-auto gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Delicious food delivered to your doorstep
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          Experience the best flavors in town. We bring fresh, hot, and tasty meals directly to you. Fast delivery and 100% satisfaction guaranteed.
        </p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-700 transition-colors">
          Order Now
        </button>
      </div>
      <div className="flex-1 w-full flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
          alt="Delicious food platter" 
          className="rounded-2xl shadow-xl object-cover w-full max-w-lg aspect-square"
        />
      </div>
    </section>
  );
}

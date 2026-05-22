"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function TrackOrderPage() {
  const dummyOrderId = "ORD-987654321";
  const estimatedDeliveryTime = "30-45 mins";
  const currentStep = 2; // 0: Order Placed, 1: Preparing Food, 2: Out for Delivery, 3: Delivered

  const steps = [
    { label: "Order Placed", icon: "✅" },
    { label: "Preparing Food", icon: "👨‍🍳" },
    { label: "Out for Delivery", icon: "🚚" },
    { label: "Delivered", icon: "📦" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 py-12 max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8 border-b border-gray-100 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Track Order</h1>
              <p className="text-gray-500 text-sm">Order #{dummyOrderId}</p>
            </div>
            <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium border border-orange-100">
              Estimated Delivery: {estimatedDeliveryTime}
            </div>
          </div>

          <div className="relative mb-12 mt-8">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full hidden sm:block"></div>

            {/* Active timeline line */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-orange-500 -translate-y-1/2 rounded-full hidden sm:block transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>

            <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-0">
              {steps.map((step, index) => {
                const isActive = index <= currentStep;
                return (
                  <div key={step.label} className="flex sm:flex-col items-center gap-4 sm:gap-2 relative z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-sm border-2 transition-colors duration-300
                        ${isActive ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-200 text-gray-400'}`}
                    >
                      {step.icon}
                    </div>
                    <div className="sm:text-center">
                      <p className={`text-sm font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.label}
                      </p>
                      {isActive && index === currentStep && (
                        <p className="text-xs text-orange-600 sm:hidden mt-1">Current Status</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 pt-8 border-t border-gray-100">
            <Link
              href="/"
              className="bg-white text-gray-700 px-8 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/order-success"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors shadow-sm text-center"
            >
              View Order Details
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

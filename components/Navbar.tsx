"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-orange-600">
        <Link href="/">SpiceHub</Link>
      </div>
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <Link href="/menu" className="hover:text-orange-600 transition-colors">Menu</Link>

        <Link href="/cart" className="hover:text-orange-600 transition-colors flex items-center relative">
          <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          Cart
          {mounted && cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        <Link href="/#login" className="hover:text-orange-600 transition-colors">Login</Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors hidden md:block">
          Order Now
        </button>
        {/* Mobile menu button could go here */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

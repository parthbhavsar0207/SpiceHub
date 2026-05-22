import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-orange-600">
        <Link href="/">SpiceHub</Link>
      </div>
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <Link href="/#menu" className="hover:text-orange-600 transition-colors">Menu</Link>
        <Link href="/#cart" className="hover:text-orange-600 transition-colors">Cart</Link>
        <Link href="/#login" className="hover:text-orange-600 transition-colors">Login</Link>
      </div>
      <div>
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

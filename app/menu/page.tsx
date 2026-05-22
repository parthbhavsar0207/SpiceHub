"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Classic delight with 100% real mozzarella cheese",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    category: "Pizza",
    description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Cheese Burger",
    category: "Burgers",
    description: "Our signature burger with crunchy cheese patty",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Chicken Burger",
    category: "Burgers",
    description: "Crispy chicken patty with fresh lettuce and mayo",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "White Sauce Pasta",
    category: "Pasta",
    description: "Creamy alfredo pasta with exotic veggies",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Red Sauce Pasta",
    category: "Pasta",
    description: "Tangy arrabbiata pasta with rich tomato flavor",
    price: "₹229",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Cold Coffee",
    category: "Drinks",
    description: "Classic blended cold coffee with vanilla ice cream",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Warm gooey brownie with rich chocolate sauce",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1624353365286-cb18b2e1f547?w=500&auto=format&fit=crop&q=60",
  },
];

const categories = ["All", "Pizza", "Burgers", "Pasta", "Drinks", "Desserts"];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our delicious range of freshly prepared food. From piping hot pizzas to refreshing drinks, we have something for everyone.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 flex flex-col items-center space-y-6">
          <div className="w-full max-w-md relative">
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                <div className="relative h-48 w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-orange-600 font-bold text-xl">{item.price}</span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No food items found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

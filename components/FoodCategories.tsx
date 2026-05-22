import React from "react";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Pasta", icon: "🍝" },
  { name: "Drinks", icon: "🥤" },
  { name: "Desserts", icon: "🍰" },
];

export default function FoodCategories() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Food Categories</h2>
        <p className="text-gray-600">What are you craving today?</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <button 
            key={category.name}
            className="flex flex-col items-center justify-center bg-white w-32 h-32 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100"
          >
            <span className="text-4xl mb-3">{category.icon}</span>
            <span className="font-medium text-gray-800">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

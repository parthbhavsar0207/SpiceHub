import React from "react";

const dishes = [
  {
    id: 1,
    name: "Spicy Beef Burger",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: "$14.50",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    price: "$11.25",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1624353365286-cb18b2e1f547?w=500&auto=format&fit=crop&q=60",
  }
];

export default function FeaturedDishes() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Dishes</h2>
          <p className="text-gray-600">Explore our most popular and highly rated meals.</p>
        </div>
        <button className="text-orange-600 font-medium hover:text-orange-700 hidden sm:block">
          View All &rarr;
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
            <div className="relative h-48 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-bold text-lg">{dish.price}</span>
                <button className="bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

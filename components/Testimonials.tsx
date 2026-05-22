import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The food here is absolutely incredible! Fast delivery and everything arrived hot and fresh. Will definitely be ordering again.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Best burger I've had in a long time. The ordering process was so simple, and the driver was very polite.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "SpiceHub is my go-to for late-night cravings. Their pizza is top tier, and the desserts are to die for!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&q=60",
    rating: 4,
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
        <p className="text-gray-600">Don&apos;t just take our word for it.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex gap-1 mb-4 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-6 flex-grow">&quot;{review.text}&quot;</p>
            <div className="flex items-center gap-4 mt-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-900">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

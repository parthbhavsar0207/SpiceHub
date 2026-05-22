import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedDishes from "../components/FeaturedDishes";
import FoodCategories from "../components/FoodCategories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FoodCategories />
        <FeaturedDishes />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
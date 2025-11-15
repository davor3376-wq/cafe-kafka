import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      <Hero />
      <main>
        <About />
        <MenuSection />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

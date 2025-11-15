import { Coffee } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "/src/assets/hero.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden mt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImage}
          alt="Cafe Kafka Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex justify-center mb-6">
          <Coffee className="w-20 h-20 text-[#d4a574]" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl md:text-7xl mb-4 text-[#d4a574]">
          Cafe Kafka
        </h1>

        <p className="text-xl md:text-2xl mb-2 italic">
          Traditionelles Kaffeehaus seit 1908
        </p>

        <div className="w-32 h-0.5 bg-[#d4a574] mx-auto my-8"></div>

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Charmant-stilvolles Kultlokal für junge Studenten und Genießer der
          entschleunigten Kaffeehauskultur
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-[#8b6f47] text-white px-8 py-3 rounded-md hover:bg-[#6d5636] transition-colors shadow-lg w-full sm:w-auto"
          >
            Speisekarte ansehen
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-[#8b6f47] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
          >
            Tisch reservieren
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

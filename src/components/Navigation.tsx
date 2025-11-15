import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Coffee className="w-6 h-6 text-[#8b6f47]" strokeWidth={2} />
            <span className="text-xl text-[#4a3f35]">Cafe Kafka</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors"
            >
              Speisekarte
            </button>
            <button
              onClick={() => scrollToSection('hours')}
              className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors"
            >
              Öffnungszeiten
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors"
            >
              Kontakt
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#8b6f47] text-white px-6 py-2 rounded-md hover:bg-[#6d5636] transition-colors"
            >
              Tisch reservieren
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4a3f35] p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-[#6b5d52] hover:text-[#8b6f47] transition-colors py-2"
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-[#6b5d52] hover:text-[#8b6f47] transition-colors py-2"
              >
                Speisekarte
              </button>
              <button
                onClick={() => scrollToSection('hours')}
                className="text-left text-[#6b5d52] hover:text-[#8b6f47] transition-colors py-2"
              >
                Öffnungszeiten
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-[#6b5d52] hover:text-[#8b6f47] transition-colors py-2"
              >
                Kontakt
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#8b6f47] text-white px-6 py-2 rounded-md hover:bg-[#6d5636] transition-colors text-center"
              >
                Tisch reservieren
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


export default Navigation;

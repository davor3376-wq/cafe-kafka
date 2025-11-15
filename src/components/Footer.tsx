import { Coffee, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [showImprint, setShowImprint] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3d342b] text-white">
      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8 text-[#d4a574]" strokeWidth={1.5} />
                <span className="text-xl text-[#d4a574]">Cafe Kafka</span>
              </div>
              <p className="text-sm text-white/80">
                Traditionelles Kaffeehaus seit 1908
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="mb-4 text-[#d4a574]">Kontakt</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Capistrangasse 8</p>
                <p>1060 Wien, Austria</p>
                <p>Tel: +43 1 5861317</p>
                <p>Email: kafka@cckg.at</p>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div>
              <h4 className="mb-4 text-[#d4a574]">Öffnungszeiten</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Mo - Do: 08:00 - 00:00</p>
                <p>Fr - Sa: 08:00 - 02:00</p>
                <p>Sonntag: 10:00 - 00:00</p>
              </div>
            </div>

            {/* Social & Info */}
            <div>
              <h4 className="mb-4 text-[#d4a574]">Folgen Sie uns</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.facebook.com/cafekafkawien" // Updated Facebook link
                  className="bg-white/10 p-3 rounded-full hover:bg-[#d4a574] transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/cafe.kafka.1060" // Updated Instagram link
                  className="bg-white/10 p-3 rounded-full hover:bg-[#d4a574] transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => setShowImprint(!showImprint)}
                className="text-sm text-[#d4a574] hover:underline"
              >
                {showImprint ? "Impressum schließen" : "Impressum anzeigen"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impressum Section */}
      {showImprint && (
        <div className="border-t border-white/10 py-8 px-4 bg-[#312921]">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl mb-4 text-[#d4a574]">Impressum</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
              <div>
                <h4 className="text-white mb-2">
                  Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch,
                  §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz
                </h4>
                <div className="space-y-1 mt-4">
                  <p>Dr. Hamid Ajoudan-Garekani</p>
                  <p>Capistrangasse 8</p>
                  <p>1060 Wien, Österreich</p>
                </div>
              </div>
              <div className="space-y-2">
                <p><span className="text-white">Unternehmensgegenstand:</span> Café</p>
                <p><span className="text-white">UID-Nummer:</span> ATU60206903</p>
                <p><span className="text-white">Firmenbuchgericht:</span> Handelsgericht Wien</p>
                <p><span className="text-white">Firmensitz:</span> 1060 Wien</p>
                <p><span className="text-white">Mitglied bei:</span> WKO, Landesinnung, etc.</p>
                <p>
                  <span className="text-white">Berufsrecht:</span> Gewerbeordnung:{" "}
                  <a
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4a574] hover:underline"
                  >
                    www.ris.bka.gv.at
                  </a>
                </p>
                <p><span className="text-white">Aufsichtsbehörde/Gewerbebehörde:</span> Magistrat der Stadt Wien</p>
                <p><span className="text-white">Berufsbezeichnung:</span> Gastgewerbe in der Betriebsart eines Cafés</p>
                <p><span className="text-white">Verleihungsstaat:</span> Österreich</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-4 bg-[#2a231c]">
        <div className="max-w-6xl mx-auto text-center text-sm text-white/60">
          <p>© {currentYear} Dr. Hamid Ajoudan-Garekani. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

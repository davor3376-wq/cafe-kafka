import { useState } from "react";
import { Coffee, Croissant, Leaf, Cake, Beer, Wine, Soup, IceCream } from "lucide-react";
import { MenuItem } from "./MenuItem";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = [
  { id: "breakfast", name: "Frühstück", icon: Croissant },
  { id: "coffee", name: "Kaffee & Tee", icon: Coffee },
  { id: "food", name: "Speisen", icon: Soup },
  { id: "desserts", name: "Desserts & Süsses", icon: Cake },
  { id: "drinks", name: "Getränke", icon: Beer },
];

const menuItems = {
  breakfast: [
    {
      name: "Croissant",
      description: "Frisches Croissant | fresh croissant",
      price: "3,50",
      allergens: "A) G)",
    },
    {
      name: "Kleines Frühstück",
      description: "Semmel, Croissant oder Brioche mit Butter, Marmelade oder Honig",
      descriptionEn: "roll, croissant or brioche with butter, jam or honey",
      price: "4,20",
      allergens: "A) G)",
    },
    {
      name: "Spiegelei",
      description: "2 Spiegeleier mit Gebäck oder Brot",
      descriptionEn: "2 fried eggs with pastries or bread",
      price: "6,80",
      allergens: "A) C) G)",
    },
    {
      name: "Wiener Frühstück",
      description: "Croissant, Semmel, weiches Ei, Käse, 1/8l O-Saft, Butter, Marmelade oder Honig",
      descriptionEn: "croissant, roll, soft egg, cheese, orange juice, butter, jam or honey",
      price: "9,80",
      allergens: "A) C) G)",
    },
    {
      name: "Vitales Frühstück",
      description: "Brot mit Avocado-Smash, weichem Ei & 1/8l O-Saft",
      descriptionEn: "bread with avocado smash, soft egg and orange juice",
      price: "9,80",
      allergens: "A) C) G)",
    },
    {
      name: "Bircher Müsli",
      description: "Müsli mit griechischem Joghurt, frischen Früchten & Honig",
      descriptionEn: "muesli with greek yogurt, fresh fruits and honey",
      price: "8,90",
      allergens: "A) G) F) H)",
    },
    {
      name: "Süsses Brioche",
      description: "Brioche mit Mascarpone-Zimt-Creme & Beeren",
      descriptionEn: "brioche with mascarpone cinnamon cream and berries",
      price: "6,80",
      allergens: "A) G)",
    },
  ],
  coffee: [
    {
      name: "Kleiner Mokka / Kleiner Brauner",
      price: "2,80",
      allergens: "G)",
    },
    {
      name: "Großer Mokka / Großer Brauner",
      price: "4,60",
      allergens: "G)",
    },
    {
      name: "Verlängerter",
      price: "3,60",
      allergens: "G)",
    },
    {
      name: "Melange",
      price: "3,60",
      allergens: "G)",
    },
    {
      name: "Cappuccino",
      price: "3,60",
      allergens: "G)",
    },
    {
      name: "Einspänner",
      price: "4,20",
      allergens: "G)",
    },
    {
      name: "Flat White",
      price: "4,60",
      allergens: "G)",
    },
    {
      name: "Cafe Latte",
      price: "4,60",
      allergens: "G)",
    },
    {
      name: "Chai Latte",
      price: "4,80",
      allergens: "G)",
    },
    {
      name: "Dirty Chai Latte",
      price: "6,20",
      allergens: "G)",
    },
    {
      name: "Amaretto Latte",
      price: "6,80",
      allergens: "G)",
    },
    {
      name: "Baileys Latte",
      price: "6,80",
      allergens: "G)",
    },
    {
      name: "Iced Espresso",
      price: "3,00",
      allergens: "G)",
    },
    {
      name: "Iced Melange",
      price: "4,00",
      allergens: "G)",
    },
    {
      name: "Heiße Schokolade",
      price: "4,40",
      allergens: "G) F)",
    },
    {
      name: "Heiße Schokolade mit Schlagobers",
      price: "5,20",
      allergens: "G) F)",
    },
    {
      name: "Portion Tee",
      description: "Schwarz, Earl Grey, Grüner, Früchte, Bergkräuter, Pfefferminze, Zitronengras, Kamille",
      price: "4,20",
    },
  ],
  food: [
    {
      name: "Linsensuppe",
      description: "mit Gebäck | lentil soup with bread",
      price: "6,80",
      allergens: "G)",
      vegetarian: true,
    },
    {
      name: "Avocado-Tomaten-Brot",
      description: "Brot mit Avocado Smash und Tomaten | bread with avocado smash and tomatoes",
      price: "6,80",
      allergens: "A) G)",
      vegetarian: true,
    },
    {
      name: "Hummusteller",
      description: "mit Oliven und Gebäck | hummus with olives and bread",
      price: "6,80",
      allergens: "A) H) M) G)",
      vegetarian: true,
    },
    {
      name: "Tomaten-Mozzarella Toast",
      description: "Toast mit Tomaten und Mozzarella | toast with tomato and mozzarella",
      price: "6,80",
      allergens: "A) G)",
      vegetarian: true,
    },
    {
      name: "Toast Tomaten-Cheddar",
      description: "Toast mit Tomaten und Cheddar | toast with tomato and cheddar",
      price: "6,80",
      allergens: "A) G)",
      vegetarian: true,
    },
    {
      name: "Toast Zwiebel-Relish",
      description: "Toast mit Zwiebel Relish, Cheddar/Käse | toast with onion relish, cheddar/cheese",
      price: "6,80",
      allergens: "A) G)",
      vegetarian: true,
    },
    {
      name: "Toast Chimichurri",
      description: "Toast mit Chimichurri, Sauerkraut und Käse | toast with chimichurri, sauerkraut and cheese",
      price: "6,80",
      allergens: "A) G)",
      vegetarian: true,
    },
  ],
  desserts: [
    {
      name: "Süsses Croissant",
      description: "mit Mascarpone-Zimt-Creme | croissant with mascarpone cinnamon cream",
      price: "6,80",
      allergens: "A) C) G)",
    },
    {
      name: "Sachertorte",
      description: "mit Schlagobers | sacher torte with whipped cream",
      price: "5,20",
      allergens: "A) C) F) G) H)",
    },
    {
      name: "Cheese Cake",
      description: "mit Kirschsauce und Beeren | cheese cake with cherry sauce and berries",
      price: "5,20",
      allergens: "A) F) G) H) O)",
    },
    {
      name: "Apfelstrudel",
      description: "mit Schlagobers | apple strudel with whipped cream",
      price: "5,20",
      allergens: "A) G)",
    },
  ],
  drinks: [
    {
      name: "Spaten",
      price: "3,80 / 4,80",
      description: "0.3l / 0.5l",
      allergens: "A)",
    },
    {
      name: "Radler sauer oder mit Ingwer",
      price: "3,80 / 4,80",
      description: "0.3l / 0.5l",
      allergens: "A)",
    },
    {
      name: "Hirter Bio-Zwickl",
      price: "3,80 / 4,80",
      description: "0.3l / 0.5l",
      allergens: "A)",
    },
    {
      name: "Hauswein weiß oder rot",
      description: "white wine or red wine | 1/8l",
      price: "3,20",
      allergens: "O)",
    },
    {
      name: "Riesling",
      description: "1/8l",
      price: "4,60",
      allergens: "O)",
    },
    {
      name: "Zweigelt",
      description: "1/8l",
      price: "4,60",
      allergens: "O)",
    },
    {
      name: "Prosecco oder Prosecco Orange",
      description: "0.1l",
      price: "4,20",
      allergens: "O)",
    },
    {
      name: "Aperol Spritz",
      description: "1/4l",
      price: "6,90",
      allergens: "O)",
    },
    {
      name: "Hugo",
      description: "1/4l",
      price: "7,90",
      allergens: "O)",
    },
    {
      name: "Espresso Martini",
      price: "9,20",
    },
    {
      name: "Negroni",
      price: "9,20",
    },
  ],
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  return (
    <section id="menu" className="py-20 px-4 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#4a3f35]">Unsere Karte</h2>
          <div className="w-24 h-1 bg-[#8b6f47] mx-auto mb-6"></div>
          <p className="text-lg text-[#6b5d52] max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl an traditionellen Wiener Kaffeehausspezialitäten
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? "bg-[#8b6f47] text-white shadow-lg"
                    : "bg-white text-[#6b5d52] hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1712723247648-64a03ba7c333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzYzMTI5OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Frisches Gebäck"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-2xl">Frisches Gebäck</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697569465496-5519e5ff9d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWVubmVzZSUyMHBhc3RyeXxlbnwxfHx8fDE3NjMxMzk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hausgemachte Torten"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-2xl">Hausgemachte Torten</h3>
            </div>
          </div>
        </div>

        {/* Allergen Info */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg mb-3 text-[#4a3f35]">Allergeninformation</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-[#6b5d52]">
            <div>A) Glutenhaltiges Getreide</div>
            <div>C) Ei</div>
            <div>F) Soja</div>
            <div>G) Milch oder Laktose</div>
            <div>H) Schalenfrüchte</div>
            <div>M) Senf</div>
            <div>O) Sulfite</div>
          </div>
          <p className="mt-4 text-xs text-[#6b5d52] italic">
            Preise in Euro inkl. aller Steuern und Abgaben. Hafer-Milchalternative (vegan) +0,30€
          </p>
        </div>
      </div>
    </section>
  );
}


export default MenuSection;

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#4a3f35]">Willkommen im Cafe Kafka</h2>
          <div className="w-24 h-1 bg-[#8b6f47] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="mb-4 text-[#6b5d52] leading-relaxed text-lg">
              In unserem charmant-stilvollen Kultlokal finden junge Studenten den perfekten Ort, 
              um zur Ruhe zu kommen und die entschleunigte Kaffeehauskultur zu genießen.
            </p>
            <p className="mb-4 text-[#6b5d52] leading-relaxed text-lg">
              Starten Sie den Tag mit einem köstlichen Frühstück und lassen Sie sich von der 
              gemütlichen Atmosphäre verzaubern.
            </p>
            <p className="text-[#6b5d52] leading-relaxed text-lg">
              Bei uns können Sie in geselliger Runde den Alltag hinter sich lassen.
            </p>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZXxlbnwxfHx8fDE3NjMwNjAzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditioneller Kaffee"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Award className="w-10 h-10 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35]">Seit 1908</h3>
            <p className="text-[#6b5d52]">Über ein Jahrhundert Tradition und Qualität</p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Users className="w-10 h-10 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35]">Gemütliche Atmosphäre</h3>
            <p className="text-[#6b5d52]">Der perfekte Ort zum Entspannen und Verweilen</p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Heart className="w-10 h-10 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35]">Mit Liebe gemacht</h3>
            <p className="text-[#6b5d52]">Hausgemachte Speisen und erstklassiger Kaffee</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

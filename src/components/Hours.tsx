import { Clock } from "lucide-react";

const openingHours = [
  { days: "Montag - Donnerstag", hours: "08:00 - 00:00" },
  { days: "Freitag - Samstag", hours: "08:00 - 02:00" },
  { days: "Sonntag", hours: "10:00 - 00:00" },
];

export function Hours() {
  return (
    <section id="hours" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-[#8b6f47]" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl mb-4 text-[#4a3f35]">Öffnungszeiten</h2>
          <div className="w-24 h-1 bg-[#8b6f47] mx-auto"></div>
        </div>

        <div className="bg-[#faf8f3] rounded-lg shadow-lg overflow-hidden">
          {openingHours.map((schedule, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-8 py-6 ${
                index !== openingHours.length - 1 ? "border-b border-[#8b6f47]/20" : ""
              }`}
            >
              <span className="text-lg text-[#4a3f35]">{schedule.days}</span>
              <span className="text-lg text-[#8b6f47]">{schedule.hours}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-[#6b5d52] italic">
            Wir freuen uns auf Ihren Besuch!
          </p>
          <div className="pt-4">
            <p className="text-sm text-[#6b5d52]">
              <span className="text-[#4a3f35]">WLAN:</span> kafkagast | <span className="text-[#4a3f35]">Passwort:</span> Kafka1070
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hours;

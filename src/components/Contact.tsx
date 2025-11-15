import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-[#4a3f35]">Kontakt & Anfahrt</h2>
          <div className="w-24 h-1 bg-[#8b6f47] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35]">Adresse</h3>
            <p className="text-[#6b5d52]">
              Cafe Kafka<br />
              Capistrangasse 8<br />
              1060 Wien<br />
              Austria
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Phone className="w-8 h-8 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35]">Telefon</h3>
            <a
              href="tel:+4315861317"
              className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors"
            >
              +43 1 5861317
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Mail className="w-8 h-8 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35]">E-Mail</h3>
            <a
              href="mailto:kafka@cckg.at"
              className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors"
            >
              kafka@cckg.at
            </a>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-12">
          <h3 className="text-2xl mb-4 text-[#4a3f35]">Tisch reservieren</h3>
          <p className="text-[#6b5d52] mb-6">
            Rufen Sie uns an oder schreiben Sie uns eine E-Mail, um einen Tisch zu reservieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4315861317"
              className="bg-[#8b6f47] text-white px-8 py-3 rounded-md hover:bg-[#6d5636] transition-colors inline-block"
            >
              Jetzt anrufen
            </a>
            <a
              href="mailto:kafka@cckg.at"
              className="bg-white text-[#8b6f47] border-2 border-[#8b6f47] px-8 py-3 rounded-md hover:bg-[#8b6f47] hover:text-white transition-colors inline-block"
            >
              E-Mail senden
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0!2d16.3522!3d48.1967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136d36f%3A0x8e1e676b6c0c8b0a!2sCapistrangasse%208%2C%201060%20Wien%2C%20Austria!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cafe Kafka Standort"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

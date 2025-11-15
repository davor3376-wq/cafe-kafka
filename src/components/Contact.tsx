import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#faf8f3] dark:bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-[#4a3f35] dark:text-white">
            Kontakt & Anfahrt
          </h2>
          <div className="w-24 h-1 bg-[#8b6f47] mx-auto"></div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35] dark:text-white">
              Adresse
            </h3>
            <p className="text-[#6b5d52] dark:text-gray-300">
              Cafe Kafka<br />
              Capistrangasse 8<br />
              1060 Wien<br />
              Austria
            </p>
          </div>

          <div className="bg-white dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Phone className="w-8 h-8 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35] dark:text-white">
              Telefon
            </h3>
            <a
              href="tel:+4315861317"
              className="text-[#6b5d52] dark:text-gray-300 hover:text-[#8b6f47] transition-colors"
            >
              +43 1 5861317
            </a>
          </div>

          <div className="bg-white dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#8b6f47] bg-opacity-10 p-4 rounded-full">
                <Mail className="w-8 h-8 text-[#8b6f47]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl mb-3 text-[#4a3f35] dark:text-white">E-Mail</h3>
            <a
              href="mailto:kafka@cckg.at"
              className="text-[#6b5d52] dark:text-gray-300 hover:text-[#8b6f47] transition-colors"
            >
              kafka@cckg.at
            </a>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="bg-white dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg text-center mb-12">
          <h3 className="text-2xl mb-4 text-[#4a3f35] dark:text-white">
            Tisch reservieren
          </h3>
          <p className="text-[#6b5d52] dark:text-gray-300 mb-6">
            Rufen Sie uns an oder schreiben Sie uns eine E-Mail, um einen Tisch
            zu reservieren.
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
              className="bg-white dark:bg-transparent text-[#8b6f47] border-2 border-[#8b6f47] px-8 py-3 rounded-md hover:bg-[#8b6f47] hover:text-white transition-colors inline-block"
            >
              E-Mail senden
            </a>
          </div>
        </div>

        {/* MAP BLOCK — Light Mode */}
        <div className="rounded-lg overflow-hidden shadow-xl block dark:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0069156430336!2d16.3499962!3d48.1968631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07f23fc956cf%3A0xa4c670777e23c52d!2sCapistrangasse%208%2C%201060%20Wien!5e0!3m2!1sen!2sat!4v1731682780482!5m2!1sen!2sat"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* MAP BLOCK — Dark Mode */}
        <div className="rounded-lg overflow-hidden shadow-xl hidden dark:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0069156430336!2d16.3499962!3d48.1968631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07f23fc956cf%3A0xa4c670777e23c52d!2sCapistrangasse%208%2C%201060%20Wien!5e0!3m2!1sen!2sat!4v1731682780482!5m2!1sen!2sat&style=feature:all%7Celement:labels.text.fill%7Ccolor:0xffffff"
            width="100%"
            height="450"
            style={{ border: 0, filter: "invert(90%) grayscale(20%)" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-[#020617] via-[#3b0764] to-[#ff6a00] py-24 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Contact Us
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl">
          Have a project in mind? Let’s bring your ideas to life.
          Reach out to AdLabs for printing, digital marketing,
          and event services. All in one stop solution.
        </p>

        <div className="mt-10 space-y-4 text-lg text-gray-200">

          <p>
            📍 No.42, Laxman Mudaliar Street, Veerapillai Cross Road,  
            2nd Parallel to Commercial St, Shivajinagar,  
            Bangalore - 560051, India.
          </p>

          <p>
            📞
            <a href="tel:+919341281491" className="ml-2 hover:text-orange-400">
              +91 93412 81491
            </a>
          </p>

          <p>
            ✉️
            <a href="mailto:info@adlabs.com" className="ml-2 hover:text-orange-400">
              info@adlabs.com
            </a>
          </p>

          <p>
            💬
            <a
              href="https://wa.me/919341281491"
              target="_blank"
              rel="noreferrer"
              className="ml-2 hover:text-green-400"
            >
              Chat on WhatsApp
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}
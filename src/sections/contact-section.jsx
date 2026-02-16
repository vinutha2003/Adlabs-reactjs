export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center bg-gradient-to-b from-black via-zinc-900 to-black text-white"
    >
      <h2 className="text-3xl md:text-4xl font-semibold">
        Contact Us
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        Have a project in mind? Let’s bring your ideas to life.
        Reach out to AdLabs for printing, digital marketing,
        and event services. All in one stop solution.
      </p>

      <div className="mt-10 space-y-3 text-lg">

        <p> Our Address <br/>
        📍No.42.Laxman Mudaliar Street, Veerapillai Cross road,2nd Parallel to Commercial St. Shivajinagar, Bangalore-560051 , India.</p>

        <p>
          
          <a href="📞 +91 9341281491
" className="ml-2 hover:text-orange-400">
           📞 +919341281491
          </a>
        </p>

        <p>
          ✉️
          <a href="📩 : info@adlabs.com" className="ml-2 hover:text-orange-400">
            info@adlabs.com
          </a>
        </p>

        <p>
          💬
          <a
            href="https://wa.me/9341281491"
            target="_blank"
            className="ml-2 hover:text-green-400"
          >
            Chat on WhatsApp
          </a>
        </p>

      </div>
    </section>
  );
}

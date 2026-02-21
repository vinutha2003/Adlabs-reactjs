import { useState } from "react";

export default function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello AdLabs,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;

    const whatsappUrl = `https://wa.me/919341281491?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Get Started With AdLabs
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full rounded-lg bg-white/10 px-4 py-3 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full rounded-lg bg-white/10 px-4 py-3 text-white outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full rounded-lg bg-white/10 px-4 py-3 text-white outline-none"
          />

          <select className="w-full rounded-lg bg-white/10 px-4 py-3 text-white outline-none [&>option]:text-black">
            <option value="">Select Service</option>
            <option>Printing</option>
            <option>Branding</option>
            <option>Digital Marketing</option>
            <option>Event Management</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
            className="w-full rounded-lg bg-white/10 px-4 py-3 text-white outline-none"
          />

          <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 py-3 font-semibold text-white transition hover:opacity-90">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
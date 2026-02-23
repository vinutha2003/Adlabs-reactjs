import SectionTitle from "../components/section-title";
import { Printer, Palette, Calendar, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Printer,
      title: "Premium Branding & Printz",
      description:
        "Give your business a premium edge. Experience superior print quality with vibrant colors and high-end finishes. We deliver high-impact solutions for every occasion from corporate visiting cards and brochures to custom event stationery, large-format banners & many more!"
    },
    {
      icon: Calendar,
      title: "Event Solutions",
      description:
        "From concept to celebration, we handle it all. We offer tailored branding for weddings, birthdays, and corporate events—featuring custom stage setups and stunning backdrops. By combining creative design with technical on-site support, we turn your vision into a flawless, unforgettable experience that makes a lasting impression.",
    },
    {
      icon: Palette,
      title: "Creative & Design",
      description:
        "Transform your ideas into iconic visuals with masterful design. From strategic branding and professional logos to stunning social media creatives and custom invitations, we craft every project as a unique masterpiece—meticulously tailored to resonate with your target market and elevate your brand presence."

,
    },
    {
      icon: Megaphone,
      title: "Comprehensive Digital Growth",
      description:
        "Your brand, amplified. We create stunning digital experiences through professional web design, cohesive online branding, and strategic social media ecosystems. Our growth solutions are meticulously tailored to ensure your business remains relevant, visible, and visually iconic in a crowded market.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-[#020617] via-[#3b0764] to-[#ff6a00] py-24 overflow-hidden"
    >
      <SectionTitle
        title="Our Services"
        description="End To End Printing, Eventz & Digital Solutions Under One Roof"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-xl text-center space-y-4 hover:-translate-y-1 transition"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 260,
              damping: 60,
            }}
          >
            <service.icon className="mx-auto size-8 text-white" />
            <h3 className="text-lg font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

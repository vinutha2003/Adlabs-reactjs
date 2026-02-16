import SectionTitle from "../components/section-title";
import { Users, Target, Award, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const aboutData = [
    {
      icon: Users,
      title: "Who We Are",
      description:
        "AdLabs is a creative powerhouse delivering premium printing, event, and digital solutions. We blend creativity with technology to help brands stand out with impact.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide end-to-end branding, printing, and digital services that elevate businesses, events, and personal celebrations with quality and creativity.",
    },
    {
      icon: Award,
      title: "Why Choose Us",
      description:
        "From concept to execution, we ensure top-tier quality, timely delivery, and customized solutions tailored to your brand’s identity and goals.",
    },
    {
      icon: HeartHandshake,
      title: "Our Commitment",
      description:
        "We believe in long-term partnerships, transparent processes, and delivering results that exceed expectations—every single time.",
    },
  ];

  return (
    <section id="about" className="mt-40">
      <SectionTitle
        title="About Us"
        description="Creative minds. Reliable execution. One trusted partner for printing, events & digital growth."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-12 px-6">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className="glass max-w-80 w-full p-6 rounded-xl space-y-4 hover:-translate-y-1 transition"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
          >
            <item.icon className="size-9 text-white" />
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-gray-100 text-sm leading-7">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

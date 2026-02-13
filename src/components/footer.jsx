import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}

        >
{/* AdLabs Title */}

            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
  AdLabs
</h2>


            {/* Social Icons */}
            <div className="flex items-center gap-6 pb-6 text-gray-200">

                <a href="https://facebook.com" target="_blank"
                    className="hover:-translate-y-1 hover:text-blue-500 transition-all duration-300">
                    <Facebook size={22} />
                </a>

                <a href="https://instagram.com" target="_blank"
                    className="hover:-translate-y-1 hover:text-pink-500 transition-all duration-300">
                    <Instagram size={22} />
                </a>

                <a href="https://twitter.com" target="_blank"
                    className="hover:-translate-y-1 hover:text-sky-400 transition-all duration-300">
                    <Twitter size={22} />
                </a>

                <a href="https://youtube.com" target="_blank"
                    className="hover:-translate-y-1 hover:text-red-500 transition-all duration-300">
                    <Youtube size={22} />
                </a>

            </div>

            <hr className="w-full border-white/20 mt-6" />

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4 py-4">
                <p>Copyright © 2025 AdLabs | All rights reserved.</p>
            </div>

        </motion.footer>
    );
}

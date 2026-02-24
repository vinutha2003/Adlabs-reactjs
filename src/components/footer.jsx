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

                <a href="https://www.facebook.com/profile.php?id=61587557383639" target="_blank"
                    className="hover:-translate-y-1 hover:text-blue-500 transition-all duration-300">
                    <Facebook size={22} />
                </a>

                <a href="https://www.instagram.com/gunaagraphics1/" target="_blank"
                    className="hover:-translate-y-1 hover:text-pink-500 transition-all duration-300">
                    <Instagram size={22} />
                </a>

                <div
  className="opacity-40 cursor-not-allowed relative group"
>
  <Twitter size={22} />
  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 
                   bg-black text-white text-xs px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition">
    Coming Soon
  </span>
</div>
                <div className="opacity-40 cursor-not-allowed relative group">
  <Youtube size={22} />
  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 
                   bg-black text-white text-xs px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition">
    Coming Soon
  </span>
</div>
            </div>

            <hr className="w-full border-white/20 mt-6" />

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4 py-4">
                <p>Copyright © 2025 AdLabs | All rights reserved.</p>
            </div>

        </motion.footer>
    );
}

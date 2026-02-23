import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {

    return (
        <>
            
            <motion.section id="home" className="flex flex-col items-center">
                <motion.div className="flex items-center gap-3 mt-32"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p>Print Your Vision. Market Your Brand. Celebrate Your Events.</p>
                    
                </motion.div>
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                   Create Premium Printz. Scale Digital Presence. Execute Flawless Events. with AdLabs.

                </motion.h1>
                <motion.p className="text-center text-gray-100 text-base/7 max-w-md mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                   One Partner | Infinite Impressions <br/>
                   <span className="whitespace-nowrap md:whitespace-normal">
       Showcase Your Identity. Advertise Your Message. Host Your Moments.
   </span> <br />
   <span className="opacity-80">All From One Comprehensive Hub</span>
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    
                   

<Link to="/quote" className="btn bg-orange-500">
  Get Quote
</Link>
                </motion.div>
            </motion.section>
        </>
    );
}
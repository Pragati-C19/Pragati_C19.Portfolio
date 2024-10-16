
"use client"; // Adding this directive to make it a Client Component

import AboutImage from "@/public/assets/about-me.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBioImage() {
    // Floating animation setup
  const floatAnimation = {
    y: [0, -10, 0], // Moves up and down by 10px
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity, // Loops infinitely
      repeatType: "loop",
    },
  };

  return (
    <motion.div
          className="relative w-full max-w-xs mx-auto"
          animate={floatAnimation} // Apply the floating animation
        >
          <Image
            src={AboutImage}
            className="transform hover:scale-105 transition-transform duration-500"
            alt="About Me Image"
          />
        </motion.div>
  )
}

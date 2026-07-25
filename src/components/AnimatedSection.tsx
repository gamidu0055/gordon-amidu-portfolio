"use client";

import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
};

export default function AnimatedSection({
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.section>
  );
}
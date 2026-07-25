"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Gordon Amidu
        </h1>

        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
          Research Scholar exploring online communities, artificial
          intelligence, digital communication, and social informatics.
        </p>

        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Studying how technology shapes human interaction, information
          behavior, and digital society.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="/publications"
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
          >
            View Publications
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-full border"
          >
            Contact
          </a>

        </div>

      </motion.div>

    </section>
  );
}
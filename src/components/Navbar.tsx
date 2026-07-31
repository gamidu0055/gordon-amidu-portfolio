"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGraduationCap,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Publications", "/publications"],
  ["Research", "/research"],
  ["Teaching", "/teaching"],
  ["Projects", "/projects"],
  ["News", "/news"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        backdrop-blur
        bg-white/70
        dark:bg-black/70
        border-b
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          py-4
        "
      >

        {/* Logo */}

        <Link href="/">
          <h1 className="font-bold text-xl">
            Gordon Amidu
          </h1>
        </Link>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-6 text-sm">

          {links.map(([name, url]) => (

            <Link
              key={name}
              href={url}
              className="hover:text-blue-600 transition"
            >
              {name}
            </Link>

          ))}

        </div>


        {/* Icons */}

        <div className="flex items-center gap-4 text-xl">

          <ThemeToggle />

          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGraduationCap />
          </a>


          <a
            href="https://orcid.org/0000-0002-3136-4806"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiOrcid />
          </a>


          <a
            href="https://linkedin.com/in/gordon-a-45502317a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>


          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>


        </div>


      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <div
          className="
            md:hidden
            bg-white
            dark:bg-black
            border-t
            px-6
            py-5
          "
        >

          <div className="flex flex-col gap-4">

            {links.map(([name, url]) => (

              <Link
                key={name}
                href={url}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                {name}
              </Link>

            ))}

          </div>

        </div>

      )}

    </nav>
  );
}
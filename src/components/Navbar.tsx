"use client";

import Link from "next/link";
import { FaLinkedin, FaGraduationCap } from "react-icons/fa";
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


        {/* Name */}

        <Link href="/">
          <h1 className="font-bold text-xl">
            Gordon Amidu
          </h1>
        </Link>



        {/* Navigation */}

        <div
          className="
          hidden
          md:flex
          gap-6
          text-sm
          "
        >

          {links.map(([name, url]) => (

            <Link
              key={name}
              href={url}
              className="
              hover:text-blue-600
              transition
              "
            >
              {name}
            </Link>

          ))}

        </div>



        {/* Academic Links + Theme */}

        <div
          className="
          flex
          items-center
          gap-4
          text-xl
          "
        >

          {/* Dark Mode */}

          <ThemeToggle />


          {/* Google Scholar */}

          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="Google Scholar"
          >
            <FaGraduationCap />
          </a>



          {/* ORCID */}

          <a
            href="https://orcid.org/0000-0002-3136-4806"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
            aria-label="ORCID"
          >
            <SiOrcid />
          </a>



          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/gordon-a-45502317a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>


        </div>


      </div>

    </nav>
  );
}
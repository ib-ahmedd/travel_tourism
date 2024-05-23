"use client";
import { navLinksArray } from "@constants";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-8 absolute top-0 text-white antialiased z-20">
      <div className="general_width items-center gap-16 hidden md:flex">
        <Link href="/" className="font-serif-display font-medium text-2xl">
          Travel & Tourism
        </Link>
        <div className="flex gap-4 text-sm">
          {navLinksArray.map((item) => (
            <Link key={item.title} href={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <button className="border border-white py-3 px-8">RESERVATION</button>
        </div>
      </div>

      <div className="general_width flex flex-col gap-2 md:hidden">
        <div className="w-full flex justify-between">
          <Link
            href="/"
            className="font-serif-display font-medium text-2xl antialiased"
          >
            Travel & Tourism
          </Link>

          <button
            className="border border-white h-10 w-10 hover:bg-semi-black"
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
          </button>
        </div>
        <div className="w-full overflow-y-hidden">
          <div
            className={`flex flex-col text-sm bg-white text-text-gray shadow-lg transition duration-200 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            {navLinksArray.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="py-4 px-2 border"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

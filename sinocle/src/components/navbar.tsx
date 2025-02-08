"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement your search logic here
  };

  return (
    <nav className="absolute top-0 left-0 w-full text-white py-10 px-10 z-10">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        <ul className="flex justify-center gap-10 text-sm uppercase tracking-wide text-[16px] font-thin font-serif items-center">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300">
              Blog/News
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          {/* Search Box with Icon */}
          <li>
            <form onSubmit={handleSearch} className="relative font-serif">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="bg-transparent border-b border-white/20 pl-2 pr-8 py-1 focus:outline-none focus:border-white/40 w-40 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-gray-300 font-serif"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

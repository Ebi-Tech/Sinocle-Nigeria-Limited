"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search logic here
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-white md:bg-transparent py-5 px-6 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-[16px] text-white font-thin font-serif uppercase tracking-wide items-center">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-400">
              Blog/News
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact Us
            </Link>
          </li>

          {/* Search Box */}
          <li>
            <form onSubmit={handleSearch} className="relative font-serif">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="bg-transparent border-b border-gray-300 pl-2 pr-8 py-1 focus:outline-none focus:border-gray-500 w-40 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-gray-500"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </form>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-5">
          <ul className="flex flex-col gap-5 text-center text-gray-800 text-[16px] font-serif">
            <li>
              <Link
                href="/"
                className="hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog/News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

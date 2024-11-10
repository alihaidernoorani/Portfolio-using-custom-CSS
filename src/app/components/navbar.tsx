"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="navContainer">
        <Link href="/" className="logo">
          <h2 className="logoText">Ali Haider</h2>
        </Link>

        <button onClick={toggleMenu} className="menuButton" aria-label="Toggle menu">
          <FaBars size={24} />
        </button>

        <nav className="desktopMenu">
          <Link href="/" className="menuItem">Home</Link>
          <Link href="/about" className="menuItem">About</Link>
          <Link href="/projects" className="menuItem">Projects</Link>
          <Link href="/contact" className="menuItem">Contact</Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="mobileMenu">
          <Link href="/" className="mobileMenuItem" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="mobileMenuItem" onClick={toggleMenu}>About</Link>
          <Link href="/projects" className="mobileMenuItem" onClick={toggleMenu}>Projects</Link>
          <Link href="/contact" className="mobileMenuItem" onClick={toggleMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

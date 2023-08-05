"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, url: "#home", title: "Home", active:true},
    { id: 2, url: "#about", title: "About", active:false },
    { id: 4, url: "#products", title: "Products", active:false },
    { id: 3, url: "#solutions", title: "Solutions", active:false },
    { id: 5, url: "#contact", title: "Contact", active:false },
  ];

  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-gray px-4 py-2 transition-all duration-900 ease-in scroll-smooth">
      <div className="md:w-[70%] w-[90%] mx-auto flex items-center justify-between flex-wrap">
        <Link href="/"
          className={`flex items-center flex-shrink-0  mr-6`}>
          <img className='w-[150px]' src="https://tradebrains.in/wp-content/uploads/2022/01/Binance-logo.png" alt="" />
        </Link>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white "
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-right text-lg lg:flex-grow">
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                href={nav.url}
                className={`block mt-4 lg:inline-block lg:mt-0 text-[15px] text-light hover:text-orange mr-4`}
                onClick={handleScroll}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Glogo from "../../public/Images/Glogo.png";
import Revlogo from "../../public/Images/RevLogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", active: true },
    { name: "About" },
    { name: "Services" },
    { name: "Products" },
    { name: "Blogs" },
    { name: "Contact" },
  ];

  return (
    <nav className="w-full sticky top-0 left-0 bg-white shadow-md z-50">
      <div className=" mx-auto flex items-center justify-between px-4 md:px-10 h-[70px] md:h-[90px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Glogo} // replace with your icon
            alt="logo"
            className="h-10 md:h-16"
          />
          <img
            src={Revlogo} // replace with your text logo
            alt="logo"
            className="h-5 md:h-8"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`text-[18px] font-medium transition ${
                link.active
                  ? "text-red-600 font-semibold"
                  : "text-black hover:text-red-500"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* CTA Button */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white w-full px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`text-[16px] ${
                link.active
                  ? "text-red-600 font-semibold"
                  : "text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="bg-red-600 text-white py-2 rounded-full mt-2">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
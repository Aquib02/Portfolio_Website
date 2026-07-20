import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-4">

        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer transition duration-300 hover:scale-110 hover:text-pink-400"
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Port
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
            folio
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative inline-block transition duration-300 hover:text-pink-400 hover:scale-110"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="hidden md:block px-6 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 to-orange-400 transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
        >
          Connect
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-[#0f172a] flex flex-col items-center gap-6 py-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-pink-400 transition"
              >
                {item}
              </a>
            </li>
          ))}

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              setMenuOpen(false);
            }}
            className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 to-orange-400 transition duration-300 hover:scale-105"
          >
            Connect
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
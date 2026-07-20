const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-[#0f172a]/80 backdrop-blur-md z-50 px-10 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer 
      transition duration-300 hover:scale-110 hover:text-pink-400">
        A<span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">K</span>
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-8">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative inline-block transition duration-300 
              hover:text-pink-400 hover:scale-110"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 
              transition-all duration-300 
              hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Button */}

      <button

    onClick={()=>{
      document.getElementById("contact").scrollIntoView({behavior:"smooth",});
    }}
            className="px-6 py-3 rounded-full font-medium 
            bg-gradient-to-r from-pink-500 to-orange-400 
            transition duration-300
            hover:scale-105 
            hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
      >
        Connect
      </button>

    </nav>
  );
};

export default Navbar;
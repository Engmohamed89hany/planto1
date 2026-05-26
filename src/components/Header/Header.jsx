import React from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const headerRef = React.useRef(null);
  const navItems = ["Home", "About", "Plantes", "Contact"];
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("bg-[#1C2419]/90", "backdrop-blur-sm", "shadow-lg");
      } else {
        headerRef.current.classList.remove("bg-[#1C2419]/90", "backdrop-blur-sm", "shadow-lg");
      }
    };
    window.onscroll = () => {
      handleScroll();
    };
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="w-full fixed top-0 left-0 z-50 transition-colors duration-300">
      <nav className=" px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative">
        <div className="logo">
          <a href="#">
            <h2 className="text-[25px] font-bold">🪴Planto.</h2>
          </a>
        </div>
        <div className="hidden md:flex items-center   px-1 py-1 gap-5 rounded-full">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`px-4 py-1.5 rounded-full text-md transition-colors ${item === "Home" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600" : "text-zinc-300 hover:text-zinc-200"}`}
            >
              {item}
            </a>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1C2419]/90 backdrop-blur-sm border-t border-[#3f3f47] flex flex-col p-5 gap-1 md:hidden z-50">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`px-4 py-2.5 rounded-lg text-sm ${item === "Home" ? "bg-zinc-50 font-medium text-zinc-800" : "text-zinc-200 hover:bg-zinc-500 hover:text-zinc-100"}`}
              >
                {item}
              </a>
            ))}
            
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;

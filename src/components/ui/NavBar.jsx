const NavBar = () => {
  const toggleMenu = () => {
    const $menu = document.querySelector(".menu-links");
    const $icon = document.querySelector(".hamburger-icon");
    $menu.classList.toggle("open");
    $icon.classList.toggle("open");
  };

  return (
    <>
      {/* Desktop menu */}
      <nav className="hidden md:flex items-center justify-around h-20">
        <p className="text-3xl cursor-default">Damilare</p>
        <ul className="flex gap-8 text-2xl">
          <li>
            <a
              href="#home"
              className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-2"
            >
              Home
            </a>
          </li>
          <a
            href="#about"
            className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-2"
          >
            About
          </a>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu */}
      <nav className="flex md:hidden items-center justify-around h-20">
        <p className="text-3xl cursor-default">Damilare</p>

        <div className="relative inline-block">
          <div
            className="hamburger-icon flex flex-col justify-between h-6 w-8 cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="w-full h-0.5 bg-black transition-all"></span>
            <span className="w-full h-0.5 bg-black transition-all"></span>
            <span className="w-full h-0.5 bg-black transition-all"></span>
          </div>

          <div>
            <ul className="menu-links bg-white flex flex-col gap-5 text-2xl absolute top-full right-0 w-fit max-h-0 overflow-hidden transition-all">
              <li>
                <a
                  href="#home"
                  className="text-black text-2xl hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-1 block p-2.5 text-center transition-all"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <a
                href="#about"
                className="text-black text-2xl hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-1 block p-2.5 text-center transition-all"
                onClick={toggleMenu}
              >
                About
              </a>
              <li>
                <a
                  href="#contact"
                  className="text-black text-2xl hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-1 block p-2.5 text-center transition-all"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

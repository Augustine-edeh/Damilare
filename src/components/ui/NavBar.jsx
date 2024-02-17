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
      <nav className="hidden md:flex items-center justify-around h-[17vh]">
        <p className="text-3xl cursor-default">Damilare</p>
        <ul className="flex gap-8 text-2xl">
          <li>
            <a
              href="#home"
              className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-[rgb(181,181,181)] decoration-2"
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
      <nav className="flex md:hidden items-center justify-around h-[17vh]">
        <p className="text-3xl cursor-default">Damilare</p>

        <div className="relative inline-block">
          <div
            className="hamburger-icon flex flex-col justify-between h-[24px] w-[30px] cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="w-full h-[2px] bg-black transition-all ease-in-out duration-1000"></span>
            <span className="w-full h-[2px] bg-black transition-all ease-in-out duration-1000"></span>
            <span className="w-full h-[2px] bg-black transition-all ease-in-out duration-1000"></span>
          </div>

          <div>
            <ul className="menu-links flex flex-col gap-8 text-2xl absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all ease-in-out duration-1000">
              <li>
                <a
                  href="#home"
                  className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-2 block p-[10px] text-center text-2xl text-black no-underline transition-all ease-in-out duration-1000"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <a
                href="#about"
                className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-2 block p-[10px] text-center text-2xl text-black no-underline transition-all ease-in-out duration-1000"
                onClick={toggleMenu}
              >
                About
              </a>
              <li>
                <a
                  href="#contact"
                  className="text-black hover:text-gray-400 hover:underline underline-offset-8 decoration-black decoration-2 block p-[10px] text-center text-2xl text-black no-underline transition-all ease-in-out duration-1000"
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

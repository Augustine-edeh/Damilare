const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex items-center justify-around h-20">
      <p className="text-3xl cursor-default">Damilare</p>
      <ul className="flex gap-10 text-2xl">
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
  );
};

export default DesktopMenu;

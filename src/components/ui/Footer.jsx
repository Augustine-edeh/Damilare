const Footer = () => {
  return (
    <footer className="bg-gray-800 text-blue-100 pt-6 pb-16">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <p className="text-lg mb-4">Stay Connected</p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-300 hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 0H3C1.35 0 0 1.35 0 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM7.5 18H5.25v-6.75H7.5V18zm-1.125-8.625c-1.125 0-2.025-.9-2.025-2.025s.9-2.025 2.025-2.025c1.125 0 2.025.9 2.025 2.025s-.9 2.025-2.025 2.025zm12.75 8.625h-2.25v-4.5c0-.45.375-.825.825-.825h.825v-2.025h-2.625c-.075-.075-.15-.225-.15-.3v-2.625h3.75v9z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-blue-300 hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.675 10.5c0-.225.075-.45.075-.675s-.075-.375-.15-.525c-.15-.375-.45-.6-.825-.6-.975 0-1.8.975-1.8 2.175s.825 2.175 1.8 2.175c.525 0 .975-.225 1.35-.6l.075.525h1.575v-.825c0-1.575-1.05-2.7-2.625-2.7-.45 0-.9.075-1.2.225-.375.15-.6.45-.6.825s.075.6.225.825c.15.225.375.375.675.45-.3.075-.525.15-.75.3-.225.15-.375.375-.375.6 0 .225.075.45.15.6.075.15.225.3.375.375.15.075.3.15.45.15.15 0 .3-.075.45-.15.15-.075.3-.15.45-.225.15-.075.3-.15.375-.225v-.675h-1.575v-.975h2.025l-.15-.975z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-blue-300 hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.4 0H3.6C1.62 0 0 1.62 0 3.6v16.8c0 1.98 1.62 3.6 3.6 3.6h16.8c1.98 0 3.6-1.62 3.6-3.6V3.6C24 1.62 22.38 0 20.4 0zM12 18c-3.63 0-6.6-2.97-6.6-6.6s2.97-6.6 6.6-6.6S18.6 7.77 18.6 11.4 15.63 18 12 18zM19.5 7.5c-.9 0-1.65.75-1.65 1.65s.75 1.65 1.65 1.65 1.65-.75 1.65-1.65-.75-1.65-1.65-1.65zm-7.35 8.55c-1.41 0-2.73-.6-3.66-1.65-.18-.225-.375-.45-.45-.675-.075-.15 0-.375.075-.525.075-.15.225-.3.375-.45.6-.6 1.41-.975 2.28-.975 1.65 0 3 1.35 3 3v.225c-.03.525-.225.975-.6 1.35-.555.555-1.32.855-2.1.855z" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Oluwadamilare Adamolekun. All rights
          reserved. | Developed by{" "}
          <a
            href="https://github.com/Augustine-edeh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            Augustine
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

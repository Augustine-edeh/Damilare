import DesktopMenu from "./DesktopMenu";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  return (
    <div className="text-white fixed top-0 left-0 right-0 z-20">
      <DesktopMenu />
      <HamburgerMenu />
    </div>
  );
};

export default NavBar;

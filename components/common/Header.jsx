import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

function Header({ containerClassName }) {
  return (
    <header
      id="header"
      className={`sticky top-0 z-10 shadow-sm transition-all duration-300 ease-linear ${containerClassName}`}
    >
      <div className="container hidden lg:block">
        <Navbar />
      </div>

      <div className="lg:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
}

export default Header;

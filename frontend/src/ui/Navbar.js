import "./Navbar.css";

const Navbar = () => (
  <div className="Navbar">
    <div>
      <a href="/">
        <img
          src="https://stat.gov.pl/szablony/portalinformacyjny/images/logo_gus_pl.svg"
          alt="Logo"
        />
      </a>
    </div>
    <div>
      <a href="/" className="NavbarButton">
        WYDARZENIA
      </a>
      <a href="/" className="NavbarButton">
        URZĘDY STATYSTYCZNE
      </a>
      <a href="/" className="NavbarButton">
        DLA MEDIÓW
      </a>
    </div>
  </div>
);

export default Navbar;

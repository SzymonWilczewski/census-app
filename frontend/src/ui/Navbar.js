import "./Navbar.css";

function Navbar({ user, logout }) {
  return (
    <div className="Navbar">
      <div>
        <a href="/">
          <img
            src="https://stat.gov.pl/szablony/portalinformacyjny/images/logo_gus_pl.svg"
            alt="Logo"
          />
        </a>
      </div>
      <div className="NavbarButtons">
        <a href="/news" className="NavbarButton">
          WYDARZENIA
        </a>
        <a href="/offices" className="NavbarButton">
          URZĘDY STATYSTYCZNE
        </a>
        <a href="/contact" className="NavbarButton">
          KONTAKT
        </a>
        {user && (
          <div className="NavbarDropdown">
            <i class="fas fa-user-circle NavbarDropdownButton"></i>
            <div className="NavbarDropdownHidden">
              <div className="NavbarDropdownContent">
                <h4>Witaj {user.login}!</h4>
                <p>Email: {user.email}</p>
                <div className="LoginBoxDiv">
                  <button
                    className="LoginButton"
                    id="secondVariantButton"
                    onClick={logout}
                  >
                    Wyloguj
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

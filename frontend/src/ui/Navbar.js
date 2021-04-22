import "./Navbar.css";
import { getUser } from "../utils";
import { useState } from "react";

function Navbar({ user }) {
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
      <div>
        {user && (
          <a
            href={(user.role == "admin" && "/panel") || "/add"}
            className="NavbarButton"
          >
            {user.role === "admin" ? "PANEL" : "DODAJ"}
          </a>
        )}
        <a href="/news" className="NavbarButton">
          WYDARZENIA
        </a>
        <a href="/offices" className="NavbarButton">
          URZĘDY STATYSTYCZNE
        </a>
        <a href="/contact" className="NavbarButton">
          KONTAKT
        </a>
      </div>
    </div>
  );
}

export default Navbar;

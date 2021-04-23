import "./Home.css";

const Home = ({ user }) => (
  <div className="Home">
    <div className="HomeContainer">
      <div>
        <p className="Writing">Narodowy Spis Powszechny</p>
      </div>
      <div className="LoginButtonDiv">
        <a href="/statistics" className="LoginButton">
          Statystyki
        </a>
      </div>
      <div>
        <p className="InfoNSP">
          Zobacz szczegółowe statystyki dotyczące Narodowego Spisu Powszechnego
          Ludności i Mieszkań 2021. Spisy powszechne w Polsce dostarczają
          kluczowych informacji statystycznych o demografii Polski. Specjalnym
          rodzajem jest przeprowadzany okresowo, na ogół co 10 lat, Narodowy
          Spis Powszechny. Spis taki jest najobszerniejszą informacją
          statystyczną o ludności, jej warunkach bytowania i o innych objętych
          nim zagadnieniach. W Polsce Narodowe Spisy Powszechne przeprowadza
          Główny Urząd Statystyczny.
        </p>
      </div>
    </div>
    <div className="Login">
      <div>
        <p className="Writing">
          {!user
            ? "Logowanie"
            : user.role === "admin"
            ? "Panel administratora"
            : "Formularz dla ankietera"}
        </p>
      </div>
      <div className="LoginButtonDiv">
        <a
          href={!user ? "/login" : user.role === "admin" ? "/panel" : "/survey"}
          className="LoginButton"
          id="secondVariantButton"
        >
          {!user ? "Zaloguj" : "Przejdź"}
        </a>
      </div>
      <div>
        <img
          className="nspLogo"
          src="https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png"
          alt="nsp-logo"
        />
      </div>
    </div>
  </div>
);

export default Home;

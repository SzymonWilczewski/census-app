import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="HomeContainer">
      <p className="Writing">Narodowy Spis Powszechny</p>
      <div className="Statistics">
        <a href="/statistics" className="StatsButton">
          Statystyki
        </a>
        <p className="InfoNSP">
          Zobacz szczegółowe statystyki dotyczące Narodowego Spisu Powszechnego
          Ludności i Mieszkań 2021. <br />
          Spisy powszechne w Polsce dostarczają kluczowych informacji
          statystycznych o demografii Polski. Specjalnym rodzajem jest
          przeprowadzany okresowo, na ogół co 10 lat, Narodowy Spis Powszechny.
          Spis taki jest najobszerniejszą informacją statystyczną o ludności,
          jej warunkach bytowania i o innych objętych nim zagadnieniach. W
          Polsce Narodowe Spisy Powszechne przeprowadza Główny Urząd
          Statystyczny.{" "}
        </p>
      </div>
    </div>
    <div className="Login">
      <p className="AdminLogging">Logowanie</p>
      <a href="/login" className="LoginButton" id="secondVariantButton">
        Zaloguj
      </a>
      <img
        className="nspLogo"
        src="https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png"
        alt="nsp-logo"
      />
    </div>
  </div>
);

export default Home;

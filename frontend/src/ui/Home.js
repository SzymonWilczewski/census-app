import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="HomeContainer">
      <p className="Writing">Narodowy Spis Powszechny</p>
      <div className="Statistics">
        <a href="/statistics" className="LoginButton">
          Statystyki
        </a>
        <p>Zobacz szczegółowe statystyki dotyczące Narodowego Spisu Powszechnego Ludności i Mieszkań 2021.</p>
      </div>
    </div>
    <div className="Login">
      <p className="AdminLogging">Logowanie dla Administratora</p>
      <a href="/login" className="LoginButton" id="secondVariantButton">
        Zaloguj
      </a>
      <img className="nspLogo" src="https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png" alt="nsp-logo"/>
    </div>
  </div>
);

export default Home;

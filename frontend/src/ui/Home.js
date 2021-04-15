import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="Login">
      <a href="/login" className="LoginButton">
        Zaloguj
      </a>
      <a href="/statistics" className="LoginButton">
        Statystyki
      </a>
    </div>
    <div className="Search"></div>
  </div>
);

export default Home;

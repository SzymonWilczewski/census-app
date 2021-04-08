import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="Login">
      <p>Proszę wybrać metodę logowania</p>
      <a href="/login" className="LoginButton">
        Administrator
      </a>
      <a href="/" className="LoginButton">
        Ankieter
      </a>
    </div>
    <div className="Search"></div>
  </div>
);

export default Home;

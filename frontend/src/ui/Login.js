import "./Home.css";

const Login = () => (
  <div className="Home">
    <div className="Login">
      <p>Login:</p>
      <input className="LoginBox"></input>
      <p>Hasło:</p>
      <input className="LoginBox"></input>
      <a href="/" className="LoginButton">
        Zaloguj
      </a>
    </div>
  </div>
);

export default Login;
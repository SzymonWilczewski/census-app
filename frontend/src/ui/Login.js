import "./Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../config";
import axios from "axios";

const Login = ({ setUser }) => {
  const [login, changeLogin] = useState("");
  const [password, changePassword] = useState("");
  const [error, changeError] = useState(false);
  const history = useHistory();

  const handleChangeLogin = (login) => changeLogin(login);
  const handleChangePassword = (password) => changePassword(password);

  const handleClick = () => {
    axios
      .post(`${API_URL}/auth/login`, { login, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        history.push("/");
      })
      .catch(({ response }) => {
        response && changeError(response.data.message);
      });
  };

  return (
    <div className="LoginContainer">
      <h1>Zaloguj się do systemu jako administrator lub ankieter.</h1>
      <div className="LoginBoxes">
        <label className="Label">
          <input
            className="LoginBox"
            placeholder="login"
            onChange={(e) => handleChangeLogin(e.target.value)}
          />
        </label>
        <label className="Label">
          <input
            className="LoginBox"
            type="password"
            placeholder="hasło"
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </label>
        {error && <div className="Error">{error}</div>}
        <button
          className="LoginButton"
          id="secondVariantButton"
          onClick={handleClick}
        >
          Zaloguj
        </button>
      </div>
      <img
        className="nspLogo"
        src="https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png"
        alt="nsp-logo"
      />
    </div>
  );
};

export default Login;

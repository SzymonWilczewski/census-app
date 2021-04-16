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
        if (response.status === 200) {
          setUser(response.data.user);
          history.push("/");
        }
      })
      .catch(({ response }) => {
        response && changeError(response.data.message);
      });
  };

  return (
    <div className="LoginContainer">
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

      <button className="LoginButton" id="secondVariantButton" onClick={handleClick}>
        Zaloguj
      </button>
      <img id="LogoLogging" className="nspLogo" src="https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png" alt="nsp-logo"/>
    </div>
  );
};

export default Login;

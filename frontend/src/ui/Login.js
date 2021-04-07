import "./Login.css";
import { useState } from "react";
const axios = require('axios').default;

const Login = () => {
    const [login, changeLogin] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [error, changeError] = useState(false);

    const handleChangeLogin = (login) => changeLogin(login);
    const handleChangePassword = (password) => changePassword(password);

    const handleClick = () => {
        axios.get('http://localhost:8080/', {login: login, email: email, password: password}).then((resp) => {
            if (resp.status === 200) 
        })
    }

    return (
    <div className="LoginContainer">

      <label className='Label'>Login<br/>
        <input className="LoginBox" onChange={(e) => handleChangeLogin(e.target.value)}></input>
      </label>

      <label className='Label'>Hasło<br/>
        <input className="LoginBox" onChange={(e) => handleChangePassword(e.target.value)}></input>
      </label>

        {error && <div className="Error">Zły login lub hasło.</div>}

      <button className="LoginButton" onClick={handleClick}>
        Zaloguj
      </button>
  </div>)
  };

export default Login;
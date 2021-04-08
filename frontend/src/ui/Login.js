import "./Login.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;

const Login = ( { changeUser }) => {
    const [login, changeLogin] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [error, changeError] = useState(false);
    const history = useHistory();

    const handleChangeLogin = (login) => changeLogin(login);
    const handleChangePassword = (password) => changePassword(password);
    const handleChangeEmail = (email) => changeEmail(email);

    const handleClick = () => {
        axios.get('http://localhost:8080/', {login: login, email: email, password: password})
        .then((resp) => {
            if (resp.status === 200) {
              changeUser(resp.data);
              history.push("/");
            }

            else changeError(true);
        })
        .catch(error => {
          console.log(error);
          changeError(true)
        })
    }

    return (
    <div className="LoginContainer">

      <label className='Label'>Login<br/>
        <input className="LoginBox" onChange={(e) => handleChangeLogin(e.target.value)}></input>
      </label>

      <label className='Label'>Email<br/>
        <input className="LoginBox" onChange={(e) => handleChangeEmail(e.target.value)}></input>
      </label>

      <label className='Label'>Hasło<br/>
        <input className="LoginBox" onChange={(e) => handleChangePassword(e.target.value)}></input>
      </label>

        {error && <div className="Error">Błędny login lub hasło.</div>}

      <button className="LoginButton" onClick={handleClick}>
        Zaloguj
      </button>
  </div>)
  };

export default Login;
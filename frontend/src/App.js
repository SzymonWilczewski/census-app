import "./App.css";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import Login from "./ui/Login";
import Statistics from "./ui/Statistics";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { API_URL } from "./config";

import axios from "axios";
axios.defaults.withCredentials = true; // must be true

function getUser() {
  if (!!localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return null;
}

function App() {
  const [user, setUser] = useState(getUser);

  function logout() {
    axios
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("user");
          setUser(null);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navbar} />
        {user && (
          <div>
            <p>
              login: {user.login} &nbsp; email: {user.email} &nbsp;
              <button onClick={logout}> wyloguj </button>
            </p>
          </div>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={() => <Login setUser={setUser} />} />
          <Route exact path="/statistics" component={Statistics} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

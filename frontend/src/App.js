import "./App.css";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import Login from "./ui/Login";
import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { API_URL } from "./config";

import axios from "axios";
axios.defaults.withCredentials = true; // must be true

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  function fetchUser() {
    axios
      .get(`${API_URL}/auth`)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
        }
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    axios
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        if (response.status === 200) {
          setUser(null);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        {user && (
          // tymczasowe wyswietlanie, zmiencie sobie to jakos potem
          <div>
            <p>id: {user.id}</p>
            <p>login: {user.login}</p>
            <p>email: {user.email}</p>
            <button onClick={logout}> wyloguj </button>
          </div>
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" render={() => <Login setUser={setUser} />} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

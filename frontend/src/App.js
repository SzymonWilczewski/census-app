import "./App.css";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import Login from "./ui/Login";
import Statistics from "./ui/Statistics";
import News from "./ui/News";
import Offices from "./ui/Offices";
import Panel from "./ui/Panel";
import Survey from "./ui/Survey";
import Contact from "./ui/Contact";
import { useState } from "react";
import { getUser } from "./utils";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { API_URL } from "./config";

import axios from "axios";
axios.defaults.withCredentials = true; // must be true

function App() {
  const [user, setUser] = useState(getUser);

  const history = useHistory();

  function logout() {
    axios
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("user");
          setUser(null);
          // temporary ugly hack
          window.location.pathname = "/login";
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Router>
      <div className="App">
        <Route path="/" render={() => <Navbar user={user} />} />
        {user && (
          <div>
            <p>
              login: {user.login} &nbsp; email: {user.email} &nbsp; rola:{" "}
              {user.role === "pollster" ? "ankieter" : "admin"}
              <button onClick={logout}> wyloguj </button>
            </p>
          </div>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login setUser={setUser} />}
          />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/news" component={News} />
          <Route exact path="/offices" component={Offices} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/panel" component={Panel} />
          <Route exact path="/add" component={Survey} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

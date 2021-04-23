import "./App.css";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import Login from "./ui/Login";
import Statistics from "./ui/Statistics";
import News from "./ui/News";
import Offices from "./ui/Offices";
import Contact from "./ui/Contact";
import Survey from "./ui/Survey";
import Panel from "./ui/Panel";
import { useState } from "react";
import { getUser } from "./utils";
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
  const [user, setUser] = useState(getUser);

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
        <Route path="/" render={() => <Navbar user={user} logout={logout} />} />
        <Switch>
          <Route exact path="/" render={() => <Home user={user} />} />
          <Route
            exact
            path="/login"
            render={() => <Login setUser={setUser} />}
          />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/news" component={News} />
          <Route exact path="/offices" component={Offices} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/panel" component={Panel} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

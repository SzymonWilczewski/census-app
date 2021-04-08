import "./App.css";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import Login from "./ui/Login";
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


function App() {
  const [user, changeUser] = useState({});

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={() => <Login changeUser={changeUser}/>} />
          <Redirect to={"/"} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

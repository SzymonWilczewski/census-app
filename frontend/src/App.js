import "./App.css";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import Login from "./ui/Login";
import { useState } from 'react';


function App() {
  const [user, changeUser] = useState({});

  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Login changeUser={changeUser}/> */}
    </div>
  );
}

export default App;

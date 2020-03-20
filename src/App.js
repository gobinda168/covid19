import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { India } from "./components/India/India";
import { Country } from "./components/Country/Country";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/india" component={India} />
          <Route exact path="/country" component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

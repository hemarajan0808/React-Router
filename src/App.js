import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import homePage from "./Components/homePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/"> Home Page </Link>
          <Link to="/About">About Page </Link>
          <Switch>
            <Route exact path="/" component={homePage}></Route>
            <Route  path="/About" component={AboutPage}></Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <Navbar/>
      <Home name="Rookies"/>
    </React.Fragment>
  );
}

export default App;

import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;

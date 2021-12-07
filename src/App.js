import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Video from './components/Video';

class App extends Component {
  constructor() {
    super()
    this.state = {
        currentID: ""
    }
  }

  renderVideo = (props) => {
    const { id } = props.match.params;
    console.log(props)
    return <Video currentID={id} />
  }
  
  changeID = (event) => {
    // console.log(event.target.name)
    this.setState({currentID: event.target.name})
}

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes> 
          <Route exact path="//*" element={<Home changeID={this.changeID} />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<Video currentID={this.state.currentID}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;

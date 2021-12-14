import './App.css';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Video from './components/Video';
import LogIn  from './components/LogIn'
import SignUp  from './components/SignUp'

class App extends Component {

  renderVideo = props => {
    const { id } = props.match.params;
    return <Video currentID={id} />
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* PASS params as props USING react-router-dom V5 */}
          <Route path="/videos/:id" render={this.renderVideo} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          {/* using react-router-dom V6 */}
          {/* <Route path="/videos/:id" element={<Video currentID={this.state.currentID}/>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;

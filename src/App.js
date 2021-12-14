import './App.css';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn  from './components/LogIn'
import SignUp  from './components/SignUp'

import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Video from './components/Video';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoggedIn = (bool) => {
    this.setState({isLoggedIn: bool})
    // window.location.reload(true)
  }
  
  renderVideo = props => {
    const { id } = props.match.params;
    return <Video currentID={id} />
  }
  
  render() {
    return (
      <div className="App">
        <Nav LoggedIn={this.state.isLoggedIn}/>
        <Switch> 
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/login">
          <LogIn handleLoggedIn={this.handleLoggedIn}/>
          </Route>
          <Route path="/signup" component={SignUp}/>
          <Route path="/about" component={About} />
          {/* PASS params as props USING react-router-dom V5 */}
          <Route path="/videos/:id" render={this.renderVideo} />
          {/* using react-router-dom V6 */}
          {/* <Route path="/videos/:id" element={<Video currentID={this.state.currentID}/>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;

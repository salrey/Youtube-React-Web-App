import { Component } from 'react';
import './Home.css';
import Search from 'Search.js'

class Home extends Component {
    render() {
        return (
            <div className="Home"> 
            <Search/>
            </div>
        )
    }
}

export default Home;
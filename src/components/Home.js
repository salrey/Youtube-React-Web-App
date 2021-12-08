import { Component } from 'react';
import './Home.css';
import Search from './Search'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Search />
            </div>
        )
    }
}

export default Home;
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import youtubeLogo from "./youtube.png"

class Nav extends Component {

    render() {
        return (
            <header className="Nav">
            <article>
                <img src={youtubeLogo} alt="youtube-logo" width="100" height="100"/> 
                <h1>
                <Link to="/">Youtube</Link>
                </h1>
            </article>
            <aside>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                </ul>
            </aside>
            </header>
        )
    }
}

export default Nav;
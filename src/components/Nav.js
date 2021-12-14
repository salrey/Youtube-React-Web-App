import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import youtube from "./youtube.png"

class Nav extends Component {

    render() {
        return (
            <header className="Nav">
            <article>
                <h1>
                <Link to="/">                
                    <img src={youtube} alt="font-logo"/> 
                </Link>
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
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                </ul>
            </aside>
            </header>
        )
    }
}

export default Nav;
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import youtube from "./youtube.png"

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            render: true
        }
    }

    handleLogOut = () => {
        localStorage.setItem("isLoggedIn", false)
        this.setState({render: !this.state.render})
    }

    render() {
        console.log(localStorage.getItem("isLoggedIn") === "false")
        const loginOrEdit = localStorage.getItem("isLoggedIn") === "false" ? <li>
            <Link to="/login">Login</Link>
        </li> : <li>
            <Link onClick={this.handleLogOut} to="/">Hi, {localStorage.getItem("userName")}</Link>
        </li>

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
                {loginOrEdit}
                </ul>
            </aside>
            </header>
        )
    }
}

export default Nav;
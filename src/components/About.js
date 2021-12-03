import { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <h2>Project Description</h2>
                <p>Create a youtube react app</p>
                <h2>Team</h2>
                <ul>
                    <li><a href="https://github.com/rosedurandisse">Rose Durandisse</a>:</li>
                    <li><a href="https://github.com/RohanPursuit">Rohan Sterling</a>:</li>
                    <li><a href="https://github.com/salrey">Sal Reyes</a>:</li>
                </ul>
            </div>
        )
    }
}

export default About;
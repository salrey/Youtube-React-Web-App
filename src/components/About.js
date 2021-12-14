import { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <h2>Youtube Project</h2>
                <p>
                    In this project, our team builds a front-end web app that recreates parts of YouTube.com. Our React application lets you search for YouTube videos, using YouTube’s API, and then choose a video from a list to watch. From there, you can view the selected video and add comments. 
                </p>
                <p>
                    Starting with create-react-app and npm to install packages, we create stateful components, customize the configuration of a component using props and develop a single page application using React Router. Lastly, we apply CSS styling to make a responsive and attractive application with a decent user interface.
                </p>
                <p>
                    Throughout the project, our team collaborates via GitHub to manage the repository, Trello for our ticketing system, and Miro for the application’s flowchart.
                </p>
                <p>
                    For more, check out the GitHub repository for our app <a href="https://github.com/salrey/Youtube-React-Web-App">here</a>. 
                </p>
                <h2>Team</h2>
                <ul>
                    <li><a href="https://github.com/salrey">Sal Reyes</a>: Full-Stack Software Engineer, entrepreneur and former banker, embracing advancements that are important to the salvation of the human race. I enjoy a diverse range of interests and fundamentally love to build companies, communities, and transformative experiences.</li>
                    <li><a href="https://github.com/rosedurandisse">Rose Durandisse</a>: Full-Stack Engineer, digital marketing freelancer, and frequent traveler geared towards learning and creating a world in which opportunity and access are granted to anyone willing to learn.</li>
                    <li><a href="https://github.com/RohanPursuit">Rohan Sterling</a>:</li>
                </ul>
            </div>
        )
    }
}

export default About;
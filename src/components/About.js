import { Component } from 'react';
import github from "./github.png";
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="team">
                    <h2>Meet the Team</h2>
                    <a href="https://github.com/salrey">
                        <div className="profile">
                            <div id="name">Sal Reyes</div>
                            <div>
                                <img src={github} alt="github" width="18" height="18" />
                            </div>
                            <div>
                                Sal is a Full Stack Engineer, entrepreneur and former banker, exploring disruptive products and embracing advancements that are important to the salvation of the human race.
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/rosedurandisse">
                        <div className="profile">
                            <div id="name">Rose Durandisse</div>  
                            <div>
                                <img src={github} alt="github" width="18" height="18" />
                            </div>
                            <div>
                                Rose is Full Stack Engineer, digital marketing freelancer, and frequent traveler geared towards learning and creating a world in which opportunity and access are granted to anyone willing to learn.
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/RohanPursuit">
                        <div className="profile">
                            <div id="name">Rohan Sterling</div>
                            <div>
                                <img src={github} alt="github" width="18" height="18" />
                            </div>
                            <div>
                                Rohan is a Full Stack Engineer with experience in Nodejs, React, Python and C++.  A great man once said “{`if (brain !== empty) { keepCoding() } else { orderCoffee() }`}”
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project"> 
                    <h2>Youtube Project</h2>
                    <p>
                        In this project, our team builds a front-end web app that recreates parts of YouTube.com. Our React application lets you search for YouTube videos, using YouTube’s API, and then choose a video from a list to watch. From there, you can view the selected video and add comments. 
                    </p>
                    <p>
                        Starting with create-react-app and npm to install packages, we create stateful components, customize the configuration of a component using props and develop a single page application using React Router. Lastly, we apply CSS styling to make a responsive and attractive application with a decent user interface.
                    </p>
                    <p>
                        Throughout the project, our team collaborates via GitHub to manage the repository, Trello for our ticketing system, as well as Miro and Figma for the application’s flowchart and wireframe, respectively.
                    </p>
                    <p>
                        For more, check out the GitHub repository for our app <a href="https://github.com/salrey/Youtube-React-Web-App">here</a>. 
                    </p>
                </div>
            </div>
        )
    }
}

export default About;
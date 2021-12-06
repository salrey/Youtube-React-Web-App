import { Component } from 'react';
import './Home.css';
import Search from './Search'
import CommentSection from './CommentSection';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Search />
                <CommentSection />
            </div>
        )
    }
}

export default Home;
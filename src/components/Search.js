import { Component } from "react";
import { Link } from "react-router-dom";
import data from "./data"
import './Search.css'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            result: [],
        }
    }

    handleUserInput = (event) => {
        this.setState({userInput: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { userInput } = this.state

        //TESTING 
        this.setState({result: data.items})

        // ********
        // Replace process.env.REACT_APP_API_KEY with process.env.<Your .env variable name>
        // Your environment variable in the .env file must start with React_APP_<...> = <Your Youtube API Key>
        // Then restart npm start in order to update process.env
        // ********

        // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        // .then(response => response.json())
        // .then(result => {
        //     // console.log(result.items)
        //     this.setState({result: result.items})
        // })
        // .catch(console.log)

        event.target.reset();
    }

    render() { 
        
        const videoResults = (this.state.result.length && this.state.result.map((el) => {
            const { title, thumbnails} = el.snippet
            const { etag, id } = el
            const { medium } = thumbnails
            return (
                <div key={etag} name={id.videoId}>
                    <Link to={`/videos/${id.videoId}`}>
                        <img src={medium.url} alt="" />
                        <h3 name="title">{title}</h3>
                    </Link>
                </div> 
            )
        })) || <div className="default-message">"No search results have been added yet"
</div>
        return(
            <div className="Search">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleUserInput} 
                        type="text" 
                        placeholder="Search..." />
                    <input type="submit" value="Search"  />
                </form>
                {videoResults}
            </div>
        )
    }
}

export default Search
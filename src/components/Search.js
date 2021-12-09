import { Component } from "react";
import { Link } from "react-router-dom";
import data from "./data"
import './Search.css'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            amountOfVideos: '',
            result: [],
            order: '',
            safeSearch: '',
            regionCode: '',
        }
    }

    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { userInput } = this.state
        const { amountOfVideos } = this.state
        const { order } = this.state
        const { safeSearch } = this.state
        const { regionCode } = this.state

        //TESTING 
        this.setState({ result: data.items })

        // ********
        // Replace process.env.REACT_APP_API_KEY with process.env.<Your .env variable name>
        // Your environment variable in the .env file must start with React_APP_<...> = <Your Youtube API Key>
        // Then restart npm start in order to update process.env
        // ********

        //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${amountOfVideos}&order=${order}&q=${userInput}&regionCode=${regionCode}&safeSearch=${safeSearch}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        //         .then(response => response.json())
        //         .then(result => {
        //             this.setState({ result: result.items })
        //         })
        //         .catch(console.log)

        //     event.target.reset();
    }

    render() {
        console.log(this.state.result)
        const videoResults = (this.state.result.length && this.state.result.map((el) => {
            const { title, thumbnails } = el.snippet
            const { etag, id } = el
            const { medium } = thumbnails
            return (
                <div className="video-card" key={etag} name={id.videoId}>
                    <Link to={`/videos/${id.videoId}`}>
                        <img src={medium.url} alt="" />
                        <h3 name="title">{title}</h3>
                    </Link>
                </div>
            )
        })) || (<div className="default-message">
            No search results have been added yet
        </div>)
        return (
            <div className="Search">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleUserInput}
                        type="text"
                        placeholder="Search..."
                        name='userInput' />
                    <div>
                        <label for='amountOfVideos'>Amount of Videos (5-10)</label>
                        <input
                            type='number'
                            min='5'
                            max='10'
                            id='amountOfVideos'
                            name='amountOfVideos'
                            onChange={this.handleUserInput}
                        />
                        <label for='order'>Sort By:</label>
                        <select
                            name="order"
                            id="order"
                            onChange={this.handleUserInput}
                        >
                            <option value='relevance' selected>Relevance</option>
                            <option value='date'>Date</option>
                            <option value='rating'>Rating</option>
                            <option value='title'>Title</option>
                        </select>
                        <label for='safeSearch'>Safe Search:</label>
                        <select
                            name="safeSearch"
                            id="safeSearch"
                            onChange={this.handleUserInput}
                        >
                            <option value='safeSearchSettingUnspecified'>Default</option>
                            <option value='none'>None</option>
                            <option value='moderate'>Moderate</option>
                            <option value='strict'>Strict</option>
                        </select>
                        <div>
                            <label for='regionCode'>Region Code</label>
                            <input
                                className='regionCode'
                                type="text"
                                placeholder="Enter 2 Digit Country Code"
                                name='regionCode'
                                maxLength='2'
                                onChange={this.handleUserInput}
                            />
                        </div>
                    </div>
                    <input type="submit" value="Search" />
                </form>
                {videoResults}
            </div>
        )
    }
}

export default Search
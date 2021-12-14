import { Component } from "react";
import { Link } from "react-router-dom";
// import data from "./data"
import saldata from "./saldata";
import rohandata from "./rohandata";
import rosedata from "./rosedata";
import searchimg from "./search.png"
import './Search.css'
import mapFavData from "./helper";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            amountOfVideos: 6,
            result: [],
            order: 'relevance',
            safeSearch: 'safeSearchSettingUnspecified',
            relevanceLanguage: 'en',
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
        const { relevanceLanguage } = this.state

        //TESTING 
        // this.setState({ result: data.items })

        // ********
        // Replace process.env.REACT_APP_API_KEY with process.env.<Your .env variable name>
        // Your environment variable in the .env file must start with React_APP_<...> = <Your Youtube API Key>
        // Then restart npm start in order to update process.env
        // ********

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${amountOfVideos}&order=${order}&q=${userInput}&relevanceLanguage=${relevanceLanguage}&safeSearch=${safeSearch}&type=video&key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result.items)
                this.setState({ result: result.items })
            })
            .catch(console.log)

        event.target.reset();
    }

    render() {

        const videoResults = this.state.result.length && this.state.result.map((el) => {
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
        })

        return (
            <div className="Search">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='UserInput'
                        id='UserInput'
                        type="text"
                        placeholder="Search..."
                        name='userInput'
                        onChange={this.handleUserInput}
                        required
                    />
                    <button><img src={searchimg} alt="search-pic" height="16"/></button>
                    <div>
                        <label htmlFor='amountOfVideos'>Results</label>
                        <input
                            className='AmountOfVideos SearchFeatures'
                            type='number'
                            min='6'
                            max='30'
                            step='6'
                            id='amountOfVideos'
                            name='amountOfVideos'
                            value={this.state.amountOfVideos}
                            onChange={this.handleUserInput}
                        />
                        <label htmlFor='order'>Sort By</label>
                        <select
                            className='Order SearchFeatures'
                            name="order"
                            id="order"
                            onChange={this.handleUserInput}
                        >
                            <option value='relevance'>Relevance</option>
                            <option value='date'>Date</option>
                            <option value='rating'>Rating</option>
                            <option value='title'>Title</option>
                        </select>
                        <label htmlFor='safeSearch'>Safe Search</label>
                        <select
                            className='SafeSearch SearchFeatures'
                            name="safeSearch"
                            id="safeSearch"
                            onChange={this.handleUserInput}
                        >
                            <option value='safeSearchSettingUnspecified'>Default</option>
                            <option value='none'>None</option>
                            <option value='moderate'>Moderate</option>
                            <option value='strict'>Strict</option>
                        </select>
                        <label htmlFor='relevanceLanguage'>Language </label>
                        <select
                            className='relevanceLanguage'
                            name="relevanceLanguage"
                            id="relevanceLanguage"
                            onChange={this.handleUserInput}
                        >
                            <option value='en'>English</option>
                            <option value='es'>Spanish</option>
                            <option value='fr'>French</option>
                            <option value='ar'>Arabic</option>
                        </select>
                    </div>
                </form>
                {this.state.result.length <= 0 && <div className="default-message">
                    No search results have been added yet
                    </div>}
                {this.state.result.length > 0 ? videoResults : 
                <>
                    <div className="favorites">
                        <h1>Rose's Favorites</h1>
                        {mapFavData(rosedata)}
                    </div>
                    <div className="favorites">
                        <h1>Sal's Favorites</h1>
                        {mapFavData(saldata)}
                    </div>
                    <div className="favorites">
                        <h1>Rohan's Favorites</h1>
                        {mapFavData(rohandata)}
                    </div>
                </>}
            </div>
        )
    }
}

export default Search
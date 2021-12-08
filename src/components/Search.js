import { Component } from "react";

class Search extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            result: []
        }
    }

    handleUserInput = (event) => {
        this.setState({userInput: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { userInput } = this.state
        // Replace process.env.REACT_APP_API_KEY with process.env.<Your .env variable name>
        // Your environment variable in the .env file must start with React_APP_<...> = <Your Youtube API Key>
        // Then restart npm start in order to update process.env
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(result => {
            // console.log(result.items)
            this.setState({result: result.items})
        })
        .catch(console.log)
    }

    render(){     

        const videoCard = (this.state.result.length && this.state.result.map((el) => {
            const { title, thumbnails} = el.snippet
            const { etag, id } = el
            console.log(id)
            const { medium } = thumbnails
            return (
                <div key={etag} name={id.videoId} onClick={}>
                    <img src={medium.url} alt="" />
                    <h3 name='title'>{title}</h3>
                </div>
            )
        })) || "No search results have been added yet"

        return(
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleUserInput} type="text" placeholder="Search..." />
                    <input type="submit" value="Search"  />
                </form>
                <div>
                    {videoCard}
                </div>
            </div>
        )
    }
}

export default Search
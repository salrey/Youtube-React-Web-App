import { Component } from "react";
import obj from '../Results-test'

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
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(result => {
            console.log(result.items)
            this.setState({result: result.items})
        })
        .catch(console.log)

        // const { items } = obj
        // if(this.state.userInput){
        //     this.setState({result: items})
        // }
    }

    render(){
        const videoCard = this.state.result.length && this.state.result.map((el, i) => {
            const { title, description, thumbnails} = el.snippet
            const { etag, id } = el
            const { medium, high, default: small } = thumbnails
            return (
                <div key={etag} name={id.videoId}>
                    <img src={medium.url} alt="" />
                    <h3 name='title'>{title}</h3>
                    {/* <p name='time'>0:00</p> */}
                    {/* <p name='description'>{description}</p> */}
                </div>
            )
        })
        return(
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleUserInput} type="text" />
                    <input type="submit" />
                </form>
                <div>
                    {videoCard || null}
                </div>
            </div>
        )
    }
}

export default Search
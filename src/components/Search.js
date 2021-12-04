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
        const { items } = obj
        // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.state.userInput}&type=video&key=process.env.REACT_APP_API_KEY`)
        // .then(response => response.json())
        // .then(result => {
        //     this.setState({result: result})
        // })
        // .catch(console.log)
        if(this.state.userInput){
            this.setState({result: items})
        }
    }

    render(){
        const videoCard = this.state.result.length && this.state.result.map((el, i) => {
            const { title, description, thumbnails} = el.snippet
            const { etag, id } = el
            const { medium, high, default: small } = thumbnails
            return (
                <div key={etag} name={id.videoId}>
                    <h3 name='title'>{title}</h3>
                    <img src={medium.url} alt="" />
                    <p name='time'>0:00</p>
                    <p name='description'>{description}</p>
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
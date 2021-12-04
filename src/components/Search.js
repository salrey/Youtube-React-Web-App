import { Component } from "react";

class Search extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            result: null,
        }
    }

    render(){
        return(
            <div className="search-form">
                <form action="">
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Search
import React from "react";
import CommentForm from "./CommentForm";

class CommentSection extends React.Component {
    constructor() {
        super()
        this.state = {
            userInput: {
                name: '',
                comment: ''
            },
            userComments: [],
        }
    }

    handleChange = (event) => {
        this.setState(prevState => (
            {
                userInput: { ...prevState.userInput, [event.target.name]: event.target.value }
            }
        ));
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            userComments: [...prevState.userComments, prevState.userInput],
            userInput: { name: "", comment: "" }
        }))
    }

    render() {
        return (
            <CommentForm
                handleChange={this.handleChange}
                userInput={this.state.userInput}
                handleSubmit={this.handleSubmit} />
        )
    }
}

export default CommentSection;
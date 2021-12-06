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
        const { userInput } = this.state

        this.setState({
            userInput: { ...userInput, [event.target.name]: event.target.value }
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();
        
        const { userComments, userInput } = this.state;

        this.setState({
            userComments: [...userComments, userInput],
            userInput: { name: "", comment: "" }
        })
    }

    render() {
        const { userComments, userInput } = this.state;

        return (
            <div>
                <CommentForm
                    handleChange={this.handleChange}
                    userInput={userInput}
                    userComments={userComments}
                    handleSubmit={this.handleSubmit} />
            </div>

        )
    }
}

export default CommentSection;
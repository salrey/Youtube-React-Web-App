import React, { Component } from "react";

class CommentForm extends React.Component {
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
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.userInput.name} onChange={this.handleChange} />
                </label>
                <label>
                    Comment:
                    <textarea name="comment" value={this.state.userInput.comment} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default CommentForm;
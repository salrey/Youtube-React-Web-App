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
            <div>
                <CommentForm
                    handleChange={this.handleChange}
                    userInput={this.state.userInput}
                    handleSubmit={this.handleSubmit} />
                <ul>{this.state.userComments.map((eachComment, index) => (
                    <li key={index}>
                        <ul className="comment-tile">
                            <b>{eachComment.name}</b>
                            <p>{eachComment.comment}</p>
                        </ul>
                    </li>))}
                </ul>
            </div>

        )
    }
}

export default CommentSection;
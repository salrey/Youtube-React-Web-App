import { Component } from "react";

class CommentSection extends Component {
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

        userInput.name && userInput.comment && this.setState({
            userComments: [...userComments, userInput],
            userInput: { name: "", comment: "" }
        })
    }

    render() {
        const { userComments, userInput } = this.state;

        return (
            <div className="CommentSection">
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name..."
                            value={userInput.name} 
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Comment:
                        <textarea 
                            name="comment" 
                            placeholder="..."
                            value={userInput.comment} 
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <ul>{userComments.map((eachComment, index) => {
                    return (
                        <li key={index}>
                            <ul className="video-comment">
                                <b>{eachComment.name}</b>
                                <p>{eachComment.comment}</p>
                            </ul>
                        </li>
                    )
                })}
                </ul>
            </div> 
        )
    }
}

export default CommentSection;
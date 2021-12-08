import { Component } from "react";
import './CommentSection.css'

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
                <form onSubmit={this.handleSubmit} className="CommentForm">
                    <div>
                        <label for='name'> Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name..."
                            value={userInput.name}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for='comment'>Comment</label>
                        <textarea
                            name="comment"
                            placeholder="..."
                            value={userInput.comment}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className='CommentSubmit' />
                    </div>
                </form >
                <hr></hr>
                {
                    userComments.map((eachComment, index) => {
                        return (
                            <li key={index} className='VideoComments'>
                                <b>{eachComment.name}</b>
                                <p>{eachComment.comment}</p>
                            </li>
                        )
                    })
                }
            </div >
        )
    }
}

export default CommentSection;
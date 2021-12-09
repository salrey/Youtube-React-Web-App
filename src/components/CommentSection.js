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

        //Restart npm start to test localStorage
        const storedComments = localStorage.getItem(this.props.videoId)

        if (storedComments) {
            localStorage.setItem(this.props.videoId, localStorage.getItem(this.props.videoId) + ", " + `{"name": "${userInput.name}", "comment": "${userInput.comment}"}`)
        } else {
            localStorage.setItem(this.props.videoId, `{"name": "${userInput.name}", "comment": "${userInput.comment}"}`)
        }
    }

    handleDelete = (event) => {                
        const index = event.target.parentNode.id

        this.state.userComments.splice(index, 1)
        this.setState({
            userComments: this.state.userComments
        })

        // console.log(...this.state.userComments.join(""))

        localStorage.setItem(this.props.videoId, JSON.stringify([...this.state.userComments]))
    }

    componentDidMount() {
        const storedComments = localStorage.getItem(this.props.videoId)

        if (storedComments) {
            this.setState({
                userComments: JSON.parse(`[${storedComments}]`),
            })
        }
    }
    
    render() {
        const { userComments, userInput} = this.state;
        
        // console.log(userComments)
        
        return (
            <div className="CommentSection">
                <form onSubmit={this.handleSubmit} className="CommentForm">
                    <div>
                        <label htmlFor='name'> Username</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter 10 characters max..."
                            value={userInput.name}
                            onChange={this.handleChange}
                            maxLength="10" 
                            required />
                    </div>
                    <div>
                        <label htmlFor='comment'>Comment</label>
                        <textarea
                            name="comment"
                            placeholder="Enter 100 characters max..."
                            value={userInput.comment}
                            onChange={this.handleChange}
                            maxLength="100" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className='CommentSubmit' />
                    </div>
                </form >
                <hr></hr>
                {
                    userComments.map((eachComment, index) => {
                        return (
                            <li key={index} id={index} className='VideoComments'>
                                <button onClick={this.handleDelete}>Delete</button>
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
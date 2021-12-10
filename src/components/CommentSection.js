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
            index: "",
            showSubmit: "",
            showUpdate: "hidden"
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

        const str = this.state.userComments.reduce((acc, el) => {
            return acc + JSON.stringify(el)
        }, '')

        localStorage.setItem(this.props.videoId, str)
    }

    grabIndex = (event) => {
        const index = event.target.parentNode.id

        this.setState({index: index})
        this.setState({
            showSubmit: "hidden",
            showUpdate: ""
        })
    }

    handleUpdate = () => {
        const { userComments, userInput, index } = this.state;

        userComments.splice(index, 1, {name: userInput.name, comment: userInput.comment})
        this.setState({
            userComments: userComments,
            showSubmit: "",
            showUpdate: "hidden",
            userInput: { name: "", comment: "" }
        })

        const str = userComments.reduce((acc, el) => {
            return acc + JSON.stringify(el)
        }, '')

        localStorage.setItem(this.props.videoId, str)
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
                        <input 
                            type="submit" 
                            value="Submit" 
                            className={this.state.showSubmit} />
                    </div>
                </form >
                    <button className={this.state.showUpdate} onClick={this.handleUpdate}>Update</button>
                <hr></hr>
                {
                    userComments.map((eachComment, index) => {
                        return (
                            <li key={index} id={index} className='VideoComments'>
                                <button onClick={this.handleDelete}>Delete</button>
                                <button onClick={this.grabIndex}>Update?</button>
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
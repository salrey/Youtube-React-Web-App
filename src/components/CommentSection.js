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

        if(localStorage.getItem('isLoggedIn') === "false"){
            alert("Login in to leave a comment")
        } else {
            const { userComments, userInput } = this.state;

            userInput.name && userInput.comment && this.setState({
                userComments: [...userComments, userInput],
                userInput: { name: "", comment: "" }
            })

            //Restart npm start to test localStorage
            const storedComments = localStorage.getItem(this.props.videoId)

            if (storedComments) {
                localStorage.setItem(this.props.videoId, `${localStorage.getItem(this.props.videoId)}, {"name": "${userInput.name}", "comment": "${userInput.comment}"}`)
            } else {
                localStorage.setItem(this.props.videoId, `{"name": "${userInput.name}", "comment": "${userInput.comment}"}`)
            }
        }
    }

    handleDelete = (event) => {                
        const index = event.target.parentNode.id

        this.state.userComments.splice(index, 1)
        this.setState({
            userComments: this.state.userComments
        })

        const str = this.state.userComments.reduce((acc, el) => {
            if(acc.length === 0){
                return acc + JSON.stringify(el)
            } else {
                return acc +","+JSON.stringify(el)
            }
        }, '')

        localStorage.setItem(this.props.videoId, str)
    }

    grabIndex = (event) => {
        const index = event.target.parentNode.id

        const updateName = this.state.userComments[index].name
        const updateComment = this.state.userComments[index].comment

        this.setState({index: index})
        this.setState({
            showSubmit: "hidden",
            showUpdate: "",
            userInput: { name: updateName, comment: updateComment }

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
            if(acc.length === 0){
                return acc + JSON.stringify(el)
            } else {
                return acc +","+JSON.stringify(el)
            }
        }, '')

        localStorage.setItem(this.props.videoId, str)
    }

    componentDidMount() {
        const storedComments = localStorage.getItem(this.props.videoId)

        // console.log(localStorage.getItem("userName"))

        if (storedComments) {
            this.setState({
                userComments: JSON.parse(`[${storedComments}]`),
            })
        }
        if(localStorage.getItem("userName")){
            this.setState({ userInput: { name: localStorage.getItem("userName"),
            comment: ''
        }})
        }
    }
    
    render() {
        const { userComments, userInput} = this.state;
            
        return (
            <div className="CommentSection">
                <form onSubmit={this.handleSubmit} className="CommentForm">
                    {/* <div>
                        <label htmlFor='name'> Username</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter 10 characters max..."
                            value={userInput.name}
                            onChange={this.handleChange}
                            maxLength="10" 
                            required />
                    </div> */}
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
                    <button className={this.state.showUpdate} id="update-button" onClick={this.handleUpdate}>Update</button>
                {/* <hr></hr> */}
                <div className="All-Comments-Area">
                    {
                    userComments.map((eachComment, index) => {
                        const showUpdateDelete = eachComment.name === localStorage.getItem("userName")
                        const deleteButton = showUpdateDelete && <button onClick={this.handleDelete}>Delete</button>
                        const updateButton = showUpdateDelete && <button onClick={this.grabIndex}>Update?</button>
                        return (
                            <li key={index} id={index} className='VideoComments'>
                                <p className="Name-Time"><b>{eachComment.name}</b> 2 hours ago</p>
                                <p className="Comment-para">{eachComment.comment}</p>
                                {updateButton}
                                {deleteButton}
                                <hr></hr>
                                
                            </li>
                        )
                    }).reverse()
                }
                </div>
                
            </div >
        )
    }
}

export default CommentSection;
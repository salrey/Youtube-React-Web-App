import React from 'react'

const CommentForm = (props) => {
    return (
        <div className="CommentSection">
            <form onSubmit={props.handleSubmit} >
                <label>
                    Name:
                    <input type="text" name="name" value={props.userInput.name} onChange={props.handleChange} />
                </label>
                <label>
                    Comment:
                    <textarea name="comment" value={props.userInput.comment} onChange={props.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ul>{props.userComments.map((eachComment, index) => {
                return (
                    <li key={index}>
                        <ul className="comment-tile">
                            <b>{eachComment.name}</b>
                            <p>{eachComment.comment}</p>
                        </ul>
                    </li>)})}
            </ul>
        </div>
    )
}

export default CommentForm;
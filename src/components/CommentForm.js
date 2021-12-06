import React from 'react'

const CommentForm = (props) => {
    return (
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
    )
}

export default CommentForm;
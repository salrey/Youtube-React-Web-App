import React from 'react'

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
            rePassword: '',
        }
    }

    handleUserInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem("userName", this.state.userName)
        localStorage.setItem("password", this.state.password)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="userName">User Name: </label>
                <input onChange={this.handleUserInput} name="userName" type="text" />

                <label htmlFor="password">Password: </label>
                <input onChange={this.handleUserInput} name="password" type="text" />

                <label htmlFor="rePassword">Re -Password: </label>
                <input onChange={this.handleUserInput} name="rePassword" type="text" />

                <input type="submit" />
            </form>
        )
    }
}

export default SignUp
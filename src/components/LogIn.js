import React from 'react'

class LogIn extends React.Component {
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
            isLoggedIn: false,
        }
    }

    handleUserInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {userName, password } = this.state
        const actualName = localStorage.getItem('userName')

        const actualPass = localStorage.getItem('password')
        if(userName === actualName && password === actualPass){
            this.setState({isLoggedIn: true})
            localStorage.setItem("isLoggedIn", true)
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="userName">User Name: </label>
                <input onChange={this.handleUserInput} name="userName" type="text" />

                <label htmlFor="password">Password: </label>
                <input onChange={this.handleUserInput} name="password" type="text" />
                
                <input type="submit" />
            </form>
        )
    }
}

export default LogIn
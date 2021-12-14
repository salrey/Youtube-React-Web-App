import React from 'react'
import './Login.css'
import { Link, Redirect } from 'react-router-dom';


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
        // const actualName = localStorage.getItem('userName')

        // const actualPassword = localStorage.getItem('password')
        const userObj = JSON.parse(`{${localStorage.getItem("users")}}`)
        const isUser = userObj[userName] === password
        if(isUser){
            this.setState({isLoggedIn: true})
            this.props.handleLoggedIn(true)
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("userName", userName)
        } else {
            alert("Incorrect UserName or password")
        }
    }

    render(){
        if (this.state.isLoggedIn) {
            return <Redirect to="/" />
          }
        return(
            <form className="Login-form" onSubmit={this.handleSubmit}>
                <label className='Login-Label' htmlFor="userName">User Name </label>
                <input className='Login-input' onChange={this.handleUserInput} name="userName" type="text" />

                <label className='Login-Label' htmlFor="password">Password </label>
                <input className='Login-input' onChange={this.handleUserInput} name="password" type="text" />
                
                <input className='Login-submit' type="submit" />
                <Link className='Login-to-Signup' to="/signup">Sign Up</Link>
                {/* <input type="submit" /> */}
            </form>
        )
    }
}

export default LogIn
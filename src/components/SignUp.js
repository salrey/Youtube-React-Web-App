import React from 'react'
import './SignUp.css'
import { Link, Redirect } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
            rePassword: '',
            // signUp: false,
        }
    }

    handleUserInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {userName, password} = this.state
        // this.setState({signUp: true})
        if(localStorage.getItem("users")){
            localStorage.setItem("users", `${localStorage.getItem("users")},"${userName}": "${password}"`)
        } else {
            localStorage.setItem("users", `"${userName}": "${password}"`)
        }

        event.target.reset()
        
    }

    render(){
        if (this.state.signUp) {
            return <Redirect to="./Login" />
          }
        return (
            <form className='Signup-form' onSubmit={this.handleSubmit}>
                <label className='Signup-Label' htmlFor="userName">User Name </label>
                <input className='Signup-input' onChange={this.handleUserInput} name="userName" type="text" />

                <label className='Signup-Label' htmlFor="password">Password </label>
                <input className='Signup-input' onChange={this.handleUserInput} name="password" type="text" />

                <label className='Signup-Label' htmlFor="rePassword">Re -Password </label>
                <input className='Signup-input' onChange={this.handleUserInput} name="rePassword" type="text" />

                <input className='Signup-submit' type="submit" />
                <Link className="Login-to-Signup" to="/login">Login</Link>
            </form>
        )
    }
}

export default SignUp
import React from 'react'

class LogIn extends React.Component {
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
            rePassword: ''
        }
    }
    render(){
        return(
            <form>
                <label htmlFor="userName">User Name: </label>
                <input name="userName" type="text" />
                <label htmlFor="password">Password: </label>
                <input name="password" type="text" />
            </form>
        )
    }
}

export default LogIn
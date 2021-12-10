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

    render(){
        return (
            <form>
                <label htmlFor="userName">User Name: </label>
                <input name="userName" type="text" />
                <label htmlFor="password">Password: </label>
                <input name="password" type="text" />
                <label htmlFor="rePassword">Re -Password: </label>
                <input name="rePassword" type="text" />
            </form>
        )
    }
}
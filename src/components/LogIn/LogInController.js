

import React from 'react';
import { connect } from 'react-redux'
import LoginComponent from './LoginComponent'
import SignUpComponent from './SignUpComponent'
import { autoLogin } from './../../actions/userActions'
import { logUserOut, signUserUp,fetchUser } from './../../actions/userActions'

class App extends React.Component {
    state = {
        buttonText: 'Log In'
    }


    handleFormSwitch() {
        if (this.state.buttonText === 'Log In') {
            this.setState({
                buttonText: 'Sign Up'
            })
        }
        else {
            this.setState({
                buttonText: 'Log In'
            })
        }
    }
    handleSignUp = (e) => {
        this.props.signUserUp({ username: e.target.username.value, email: e.target.email.value, password: e.target.password.value })
    }
    handleLogIn = (e) => {
        this.props.fetchUser({ username: e.target.username.value, password: e.target.password.value})
    }

    componentDidMount() {
        if (this.props.userReducer.loggedIn) {
            this.props.autoLogin()
        }
        
    }
    handleLogOut() {

        this.props.logUserOut();
    }
    render() {
        let x = "";

        if (this.state.buttonText == 'Log In') {
            x = (<SignUpComponent
                buttonText={this.state.buttonText}
                signUp={this.handleSignUp}
                onClick={() => this.handleFormSwitch()}/>)
        } else {
            x = (<LoginComponent
                buttonText={this.state.buttonText}
                logIn={this.handleLogIn}
                onClick={() => this.handleFormSwitch()}/>)
        }
        
            return (
                <div className='login '>
                    {x}
                    
                 </div>
            )
        

        
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        autoLogin: () => dispatch(autoLogin()),
        logUserOut: () => dispatch(logUserOut()),
        signUserUp: (x) => dispatch(signUserUp(x)),
        fetchUser: (x) => dispatch(fetchUser(x))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

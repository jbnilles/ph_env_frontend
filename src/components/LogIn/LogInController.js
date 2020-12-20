

import React from 'react';
import './../../App.css';
import { connect } from 'react-redux'
import LoginComponent from './LoginComponent'
import SignUpComponent from './SignUpComponent'
import { autoLogin } from './../../actions/userActions'
import { logUserOut } from './../../actions/userActions'

class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }
    handleLogOut() {

        this.props.logUserOut();
    }
    render() {
        if (this.props.userReducer.loggedIn) {
            return (
                <div className='login'>
                    <h1>Welcome, {this.props.userReducer.user.userName}</h1>
                    <button onClick={() => this.handleLogOut()}>Logout</button>
                </div>)
        }
        else {
            return (
                <div className='login'>
                    <SignUpComponent />
                    <LoginComponent />
                 </div>
            )
        }

        
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
        logUserOut: () => dispatch(logUserOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

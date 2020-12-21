

import React from 'react';
import './../../App.css';
import { connect } from 'react-redux'
import LoginComponent from './LoginComponent'
import SignUpComponent from './SignUpComponent'
import { autoLogin } from './../../actions/userActions'
import { logUserOut } from './../../actions/userActions'

class App extends React.Component {
    state = {
        form: <SignUpComponent />,
        buttonText: 'Log In'
    }


    handleFormSwitch() {
        if (this.state.buttonText === 'Log In') {
            this.setState({
                form: <LoginComponent />,
                buttonText: 'Sign Up'
            })
        }
        else {
            this.setState({
                form: <SignUpComponent />,
                buttonText: 'Log In'
            })
        }
    }

    componentDidMount() {
        if (this.props.userReducer.loggedIn) {
            this.props.autoLogin()
        }
        console.log(this.props)
        
    }
    handleLogOut() {

        this.props.logUserOut();
    }
    render() {
        
            return (
                <div className='login'>
                    {this.state.form}
                    <a  onClick={() => this.handleFormSwitch()}>{ this.state.buttonText}</a>
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
        logUserOut: () => dispatch(logUserOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*import React from 'react';
import TTTBoard from './TTT/TTTBoard';
import Login from './LogIn/Login';
import LoginForm from './LogIn/LoginForm';

function App() {
  return (
      <React.Fragment> 
          <LoginForm />
      < TTTBoard />
    </React.Fragment>
  );
}

export default App;*/

import React from 'react';
import './../App.css';
import { connect } from 'react-redux'
import LoginComponent from './LogIn/LoginComponent'
import LogInController from './LogIn/LogInController'
import SignUpComponent from './LogIn/SignUpComponent'
import { autoLogin } from './../actions/userActions'
import TTTBoard from './TTT/TTTBoard';

import { logUserOut } from '../actions/userActions'

class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }
    handleLogOut() {
        
        this.props.logUserOut();
    }
    render() {
        console.log(this.props)
        return (
            <div className="App">
                
                
                <LogInController />
                

                < TTTBoard />
            </div>
            )
        /*return (
            <div className="App">
                {
                    !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.userName}</h1>
                }
                <SignUpComponent />
                <LoginComponent />
                <button onClick={ () =>this.handleLogOut()}>Logout</button>

                < TTTBoard />
            </div>
        );*/
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

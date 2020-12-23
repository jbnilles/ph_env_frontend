

import React from 'react';
import { connect } from 'react-redux'
import LogInController from './LogIn/LogInController'
import Contact from './Contacts/Contact'
import { autoLogin, logUserOut } from './../actions/userActions'
import Header from './Header'
import GameController from './Games/GameController';


class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }
    handleLogOut() {
        
        this.props.logUserOut();
    }
    render() {

        let x = ""
            /*< TTTController />*/
        if (this.props.userReducer.loggedIn) {
            x = (
                <React.Fragment>
                    <div className='row'>
                    <div className='col-8 game-component'>
                        <GameController />
                    </div>
                    <div className='col-4 contact-component'>
                        <Contact />
                    </div>
                    </div>
                </React.Fragment>)
        } else {
           x = <LogInController />
        }


        return (
            <div className="App">
                <Header
                    onLogOut={() => this.handleLogOut()}
                    userReducer={this.props.userReducer} />
                <div id='spacing'></div>
                
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
        logUserOut: () => dispatch(logUserOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

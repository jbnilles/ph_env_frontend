import React from 'react'
import { connect } from 'react-redux'
import TTTController from './../TTT/TTTController'
import tttImage from './../../images/ttt.png'
import checkers from './../../images/checkers.png'
import chess from './../../images/chess.png'
import cards from './../../images/hearts.png'
import UnderConstruction from './UnderConstructions'

//import { sendMessage, getMessagesFrom, getNewMessages } from '../../actions/ChatActions'



class GameController extends React.Component {

    state = {
        x: 'home',
    }
    
    componentDidMount() {
        //  this.props.getContacts()

      /*  this.interval = setInterval(this.tick, this.state.delay)*/

    }

    componentDidUpdate(prevProps, prevState) {


      /*  if (prevState.delay !== this.state.delay) {
            clearInterval(this.interval);
            this.interval = setInterval(this.tick, this.state.delay);


        }*/



    }

    componentWillUnmount() {


/*        clearInterval(this.interval);
*/    }

    
    
    handleTTTClick = () => {
        /*console.log('lllllllllllllllllllllll', this.props)
        this.setState({
            x: null,
            inGameStatus: -1,
            shownWaiting: false
        })
        if (Object.keys(this.props.gameReducer.currentGame).length != 0) {
            this.props.removeGame({ game_id: this.props.gameReducer.currentGame.id })
        }*/
        this.setState({x: 'ttt'})
    }
    setStateDefault = () => {
        this.setState({ x: 'home' })
    }
    handleUnderConstructions = () => {
        this.setState({x: 'underConstruction'})
    }




    render() {
        console.log(this.props)
        let frame = ""
        if (this.state.x == 'home') {
            frame = (<div className='light-text'> <h1>Choose a Game to Play</h1><div className='row' >

                <div className='col-3'>Tic Tac Toe <img className='game-image' onClick={this.handleTTTClick} src={tttImage} /></div>
                <div className='col-3'>Chess <img className='game-image' onClick={this.handleUnderConstructions} src={chess} /></div>
                <div className='col-3'>Checkers <img className='game-image' onClick={this.handleUnderConstructions} src={checkers} /></div>
                <div className='col-3'>Hearts <img className='game-image' onClick={this.handleUnderConstructions} src={cards} /></div>


            </div >
            </div>)
        } else if (this.state.x == 'ttt') {
            frame = (<TTTController goBack={this.setStateDefault} />)
        } else if (this.state.x == 'underConstruction') {
            frame = (<UnderConstruction goBack={this.setStateDefault} />)
        }
        return (
            <React.Fragment>
                {frame}
                



            </React.Fragment>
            )
        
        
    }
}


/*const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {


    }
}*/

export default connect(null, null)(GameController)
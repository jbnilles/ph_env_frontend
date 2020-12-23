import React from 'react'
import { connect } from 'react-redux'
//import { sendMessage, getMessagesFrom, getNewMessages } from '../../actions/ChatActions'
import GameController from './../Games/GameController'



class ServiceController extends React.Component {

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



    handleGameClick = () => {
        /*console.log('lllllllllllllllllllllll', this.props)
        this.setState({
            x: null,
            inGameStatus: -1,
            shownWaiting: false
        })
        if (Object.keys(this.props.gameReducer.currentGame).length != 0) {
            this.props.removeGame({ game_id: this.props.gameReducer.currentGame.id })
        }*/
        this.setState({ x: 'games' })
    }
    setStateDefault = () => {
        this.setState({x: 'home'})
    }




    render() {
        let frame = ""
        if (this.state.x == 'home') {
            frame = (<div className='row' >
                <div className='col-3'><button onClick={this.handleGameClick}>Games</button></div>
                <div className='col-3'>Video</div>
                <div className='col-3'>News</div>
                <div className='col-3'>Work</div>


            </div >)
        }
        else if (this.state.x == 'games') {
            frame = <GameController
                goBack={ this.setStateDefault}/>
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

export default connect(null, null)(ServiceController)
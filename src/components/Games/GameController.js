import React from 'react'
import { connect } from 'react-redux'
//import { sendMessage, getMessagesFrom, getNewMessages } from '../../actions/ChatActions'



class GameController extends React.Component {

    state = {
        x: (
            <React.Fragment>
                <div className='row'>
                    <div className='col-3'><button onClick={this.handleGameClick}>Games</button></div>
                    <div className='col-3'>Video</div>
                    <div className='col-3'>News</div>
                    <div className='col-3'>Work</div>


                </div>




            </React.Fragment>
        ),
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
        console.log('qweqweqweqweqwe')
    }
    setStateDefault = () => {

}




    render() {

        return (
            <React.Fragment>
                {this.state.x}




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
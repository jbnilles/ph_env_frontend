import React from 'react'
import { connect } from 'react-redux'
import { getGames, joinGame, createGame, removeGame } from '../../actions/GameActions'
import TTTGameList from "./TTTGameList"
//import { sendMessage, getMessagesFrom, getNewMessages } from '../../actions/ChatActions'



class TTTController extends React.Component {

    state = {
        pollingCount: 0,
        delay: 3000,
        x: null,
        inGame: false
    };

    componentDidMount() {
      //  this.props.getContacts()
        this.props.getGames({ game_name: 'TTT', });

        this.handleInGameSwitch();
        this.interval = setInterval(this.tick, this.state.delay)

    }

    componentDidUpdate(prevProps, prevState) {


        if (prevState.delay !== this.state.delay) {
            clearInterval(this.interval);
            this.interval = setInterval(this.tick, this.state.delay);


        }



    }
    componentWillUnmount() {

        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            pollingCount: this.state.pollingCount + 1
        });
        console.log(this.props)
        this.props.getGames({ game_name: 'TTT', });
       // this.props.getContacts()
       // this.props.getNotifications()
    }


    handleSearch = (e) => {
        e.preventDefault();
      //  this.props.searchUsers({ userName: e.target.username.value })
       // this.props.getContacts()

        console.log(this.props)
    }
    handleAddContact = (e) => {
      //  this.props.addContact({ userId: e.id, })
       // this.props.getContacts()
    }
    handleCreateGameClick = (e) => {
        console.log(this.props)
        this.props.createGame({ game_name: 'TTT', game_state: [...Array(3)].map(e => Array(3).fill(null)).toString() });
        
        

    }
    handleJoinGameClick = (e) => {
       console.log(e)
        this.props.joinGame({game_id: e.game_id,})
    }
    handleInGameSwitch() {
        
    }




    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
    /*<h1>Polling Count: {this.state.pollingCount}</h1>*/
       
        return (
            <div>

                {this.state.x}
                
                <div>
                    <TTTGameList
                        onClick={this.handleJoinGameClick}
                        games={this.props.gameReducer.games}
                    />
                    <button onClick={this.handleCreateGameClick}>Create Game</button>
                </div>


                



            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        gameReducer: state.gameReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGames: (contactId) => dispatch(getGames(contactId)),
        createGame: (contactId) => dispatch(createGame(contactId)),
        joinGame: (contactId) => dispatch(joinGame(contactId)),
        removeGame: (contactId) => dispatch(removeGame(contactId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TTTController)
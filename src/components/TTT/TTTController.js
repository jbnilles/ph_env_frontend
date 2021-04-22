import React from 'react'
import { connect } from 'react-redux'
import { getGames, joinGame, createGame, removeGame, checkMove, getGame } from '../../actions/GameActions'
import TTTBoard from './TTTBoard';
import TTTGameList from "./TTTGameList"

class TTTController extends React.Component {

    state = {
        pollingCount: 0,
        delay: 1000,
        x: null,
        inGameStatus: -1,
        shownWaiting:  false
    };

    componentDidMount() {
        this.props.getGames({ game_name: 'TTT', });
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
        this.props.getGames({ game_name: 'TTT', });
        if (Object.keys(this.props.gameReducer.currentGame).length > 0) {
            this.props.getGame({ id: this.props.gameReducer.currentGame.id })
        }
    }


    handleSearch = (e) => {
        e.preventDefault();
    }
    handleAddContact = (e) => {
      //  this.props.addContact({ userId: e.id, })
       // this.props.getContacts()
    }
    handleCreateGameClick = (e) => {
        

        this.props.createGame({ game_name: 'TTT', });
        this.setState({ inGameStatus: 0 }); //0 mm 1 playing -1 nothing


    }
    handleJoinGameClick = (e) => {
        this.props.joinGame({ game_id: e, })
        this.props.getGame({ id: e, })
        this.setState({ inGameStatus: 1 });
    }
    handleSquareClick = (e) => {

        let x = e.target.name.split('_');
        this.props.checkMove({
            game_id: this.props.gameReducer.currentGame.id,
            row: x[0],
            col: x[1],
            update_at: this.props.gameReducer.currentGame.updated_at})

    }
    handleLeaveGame = () => {
        this.setState({
            x: null,
            inGameStatus: -1,
            shownWaiting: false
        })
        if (Object.keys(this.props.gameReducer.currentGame).length !== 0) {
            this.props.removeGame({ game_id: this.props.gameReducer.currentGame.id})
        }
    }
    handleLeavePage = () => {
        this.handleLeaveGame()
        this.props.goBack()

    }




    render() {
       
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
    /*<h1>Polling Count: {this.state.pollingCount}</h1>*/
        if (this.props.gameReducer.currentGame.status === 1 && this.state.inGameStatus !== 1) {
            this.setState(
                { inGameStatus: 1 }
            )
        }
        
        let div = (<div>
            <TTTGameList
                onClick={this.handleJoinGameClick}
                games={this.props.gameReducer.games}
                onCreateGame={this.handleCreateGameClick}
            />
        </div>)
        if (this.props.gameReducer.currentGame.status !== 2 && this.state.inGameStatus > 0 && Object.keys(this.props.gameReducer.currentGame).length > 0) {
            div = (<div><TTTBoard
                currentGame={this.props.gameReducer.currentGame}
                onClick={this.handleSquareClick}
            />
                <button onClick={this.handleLeaveGame} className='btn btn-light'>Leave Game</button>
            </div>)

        }
        else if (this.state.inGameStatus < 0) {
            div = (<div>
                <TTTGameList
                    onClick={this.handleJoinGameClick}
                    games={this.props.gameReducer.games}
                    onCreateGame={this.handleCreateGameClick}
                />
            </div>)

        } else if (this.state.inGameStatus === 0 && Object.keys(this.props.gameReducer.currentGame).length > 0) {
            div = (<div>
                <h1 >Waiting for opponent</h1>
            </div>)
        } else if (this.props.gameReducer.currentGame.status === 2 && this.props.gameReducer.currentGame.winner_id !== '0') {
            div = (<div>
                <h1>congratulations {this.props.gameReducer.currentGame.winner_username}, you won</h1>
                <TTTBoard
                    currentGame={this.props.gameReducer.currentGame}
                    onClick={this.handleSquareClick}
                />
                <button onClick={this.handleLeaveGame} className='btn btn-light'>Leave Game</button>
            </div>)
        } else if (this.props.gameReducer.currentGame.status === 2 && this.props.gameReducer.currentGame.winner_id === '0') {
            div = (<div>
                <h1>Draw</h1>
                <TTTBoard
                    currentGame={this.props.gameReducer.currentGame}
                    onClick={this.handleSquareClick}
                />
                <button onClick={this.handleLeaveGame} className='btn btn-light'>Leave Game</button>
            </div>)
        }
        return (
            <div >

                {div}
                
                


                <button className='btn btn-dark' onClick={this.handleLeavePage}>go back</button>



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
        removeGame: (contactId) => dispatch(removeGame(contactId)),
        getGame: (contactId) => dispatch(getGame(contactId)),
        checkMove: (contactId) => dispatch(checkMove(contactId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TTTController)
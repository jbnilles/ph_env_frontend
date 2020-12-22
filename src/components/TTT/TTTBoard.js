import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import { move } from './../../actions';


function TTTBoard(props) {



    const handleClick = (e) => {
        props.onClick(e)
    }






    console.log(props)

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    gameState={JSON.parse(props.currentGame.game_state)}
                    onClick={handleClick}
                />
            </div>
            <div className="game-info">
                <h2>Current Turn: {props.currentGame.current_turn_username}</h2>
            </div>
        </div>
    );
}

export default TTTBoard;